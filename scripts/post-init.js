// Melhorias: tratamento de erros, logs coloridos, pré-requisitos, idempotência, perguntas opcionais, backup, resumo, máscara, modularização, cross-platform
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync, spawnSync } = require('child_process');
let chalk;
try {
  chalk = require('chalk');
} catch {
  chalk = null;
}

function color(msg, type = 'info') {
  if (!chalk) return msg;
  if (type === 'error') return chalk.red(msg);
  if (type === 'warn') return chalk.yellow(msg);
  if (type === 'success') return chalk.green(msg);
  if (type === 'step') return chalk.cyan(msg);
  return chalk.white(msg);
}

function checkPrerequisites() {
  const required = [
    { cmd: 'pnpm', name: 'pnpm' },
    { cmd: 'gh', name: 'GitHub CLI (gh)' },
    { cmd: 'node', name: 'Node.js' },
    { cmd: 'git', name: 'Git' },
    { cmd: 'code', name: 'VSCode CLI (code)', optional: true },
  ];
  let ok = true;
  for (const tool of required) {
    try {
      execSync(`${tool.cmd} --version`, { stdio: 'ignore' });
    } catch {
      if (!tool.optional) {
        console.error(color(`Pré-requisito ausente: ${tool.name}`, 'error'));
        ok = false;
      }
    }
  }
  if (!ok) {
    console.error(color('Instale os pré-requisitos acima antes de rodar o setup.', 'error'));
    process.exit(1);
  }
}

function backupFile(filePath) {
  if (fs.existsSync(filePath)) {
    const bak = filePath + '.bak';
    if (!fs.existsSync(bak)) fs.copyFileSync(filePath, bak);
  }
}

function renameLastCommitIfInitial() {
  try {
    const lastMessage = execSync('git log -1 --pretty=%B').toString().trim();
    if (/^Initial commit$/i.test(lastMessage)) {
      const newMsg = 'chore(init): commit inicial do template';
      execSync(`git commit --amend -m "${newMsg}"`, { stdio: 'inherit' });
      console.log(
        color('\nMensagem do commit inicial atualizada para o padrão convencional.\n', 'success'),
      );
    }
  } catch (err) {
    console.error(color('Erro ao tentar renomear o commit inicial: ' + err.message, 'error'));
    process.exit(1);
  }
}

function checkGitClean() {
  const status = execSync('git status --porcelain').toString().trim();
  if (status) {
    console.error(
      color(
        '\nERRO: Existem arquivos não commitados ou alterações pendentes no repositório.\nPor favor, faça commit ou stash das alterações antes de rodar o setup.\n',
        'error',
      ),
    );
    process.exit(1);
  }
}

function ask(question, mask = false) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    if (!mask) {
      rl.question(color(question, 'step'), (answer) => {
        rl.close();
        resolve(answer);
      });
    } else {
      process.stdout.write(color(question, 'step'));
      let input = '';
      const onData = (char) => {
        char = char + '';
        switch (char) {
          case '\n':
          case '\r':
          case '\u0004':
            process.stdin.pause();
            rl.close();
            process.stdout.write('\n');
            process.stdin.removeListener('data', onData);
            resolve(input.trim());
            break;
          default:
            // Não mostra nada (mais seguro que asterisco)
            input += char;
            break;
        }
      };
      process.stdin.on('data', onData);
    }
  });
}

async function setupEnv(skipGh = false) {
  let ghPat, githubUser, githubRepo, npmToken, npmUser;
  if (!fs.existsSync('.env')) {
    ghPat = await ask('Informe seu GitHub Personal Access Token: ', true);
    githubUser = await ask('Informe seu usuário do GitHub: ');
    githubRepo = await ask('Informe o nome do repositório (ex: user/repo): ');
    npmUser = await ask('Informe seu nome de usuário no npm: ');
    npmToken = await ask('Informe seu NPM_TOKEN (token do npm para publicação): ', true);
    fs.writeFileSync(
      '.env',
      `GH_PAT=${ghPat}\nGITHUB_USER=${githubUser}\nGITHUB_REPO=${githubRepo}\nNPM_USER=${npmUser}\nNPM_TOKEN=${npmToken}\n`,
    );
    console.log(color('Arquivo .env criado com sucesso!', 'success'));

    if (!skipGh) {
      // Tenta configurar os secrets no repositório via GitHub CLI
      try {
        try {
          execSync('gh auth status', { stdio: 'ignore' });
        } catch {
          try {
            console.log(
              color(
                '\nRealizando login automático no GitHub CLI usando o token informado...',
                'step',
              ),
            );
            execSync(`echo "${ghPat}" | gh auth login --with-token`, { stdio: 'inherit' });
            console.log(color('Login realizado com sucesso!', 'success'));
          } catch (loginErr) {
            console.warn(
              color(
                'Não foi possível realizar o login automático no GitHub CLI. Faça login manualmente com "gh auth login".',
                'warn',
              ),
            );
            return;
          }
        }
        const repo = githubRepo.includes('/') ? githubRepo : `${githubUser}/${githubRepo}`;
        execSync(`gh secret set GH_PAT --body "${ghPat}" --repo "${repo}"`, { stdio: 'inherit' });
        execSync(`gh secret set NPM_TOKEN --body "${npmToken}" --repo "${repo}"`, {
          stdio: 'inherit',
        });
        console.log(
          color('Secrets GH_PAT e NPM_TOKEN configurados no repositório com sucesso!', 'success'),
        );
      } catch (err) {
        console.warn(
          color(
            'Não foi possível configurar os secrets automaticamente via GitHub CLI. Configure manualmente se necessário.',
            'warn',
          ),
        );
      }
    }
  } else {
    const envContent = fs.readFileSync('.env', 'utf8');
    if (!envContent.includes('NPM_USER=')) {
      npmUser = await ask('Informe seu nome de usuário no npm: ');
      fs.appendFileSync('.env', `NPM_USER=${npmUser}\n`);
      console.log(color('NPM_USER adicionado ao .env!', 'success'));
    }
    if (!envContent.includes('NPM_TOKEN=')) {
      npmToken = await ask('Informe seu NPM_TOKEN (token do npm para publicação): ', true);
      fs.appendFileSync('.env', `NPM_TOKEN=${npmToken}\n`);
      console.log(color('NPM_TOKEN adicionado ao .env!', 'success'));
    }
  }
}

function shouldSkipStep(argName, question) {
  if (process.argv.includes(`--skip-${argName}`)) return true;
  return false;
}

function printSummary(summary) {
  console.log(color('\nResumo do setup:', 'step'));
  summary.forEach((item) => {
    if (item.type === 'success') console.log(color('✔ ' + item.msg, 'success'));
    else if (item.type === 'warn') console.log(color('⚠ ' + item.msg, 'warn'));
    else if (item.type === 'error') console.log(color('✖ ' + item.msg, 'error'));
    else console.log('- ' + item.msg);
  });
}

async function ensureBranches() {
  // Garante que main e dev existem, e faz checkout em dev
  let branches = execSync('git branch --list', { encoding: 'utf8' })
    .split('\n')
    .map((b) => b.replace('*', '').trim())
    .filter(Boolean);
  const hasMain = branches.includes('main');
  const hasDev = branches.includes('dev');
  if (!hasMain) {
    // Cria main a partir do commit atual
    execSync('git checkout -b main', { stdio: 'inherit' });
    branches.push('main');
  } else {
    execSync('git checkout main', { stdio: 'inherit' });
  }
  if (!hasDev) {
    // Cria dev a partir de main
    execSync('git checkout -b dev', { stdio: 'inherit' });
    branches.push('dev');
  } else {
    execSync('git checkout dev', { stdio: 'inherit' });
  }
}

async function main() {
  checkPrerequisites();
  renameLastCommitIfInitial();
  checkGitClean();
  await ensureBranches();

  const summary = [];
  const skipGh = shouldSkipStep('gh', 'Pular configuração de secrets GitHub?');
  const skipTurbo = shouldSkipStep('turbo', 'Pular turbo login?');
  const skipVSCode = shouldSkipStep('vscode', 'Pular instalação de extensões VSCode?');

  await setupEnv(skipGh);
  require('dotenv').config();

  // 3. Setup identidade do repositório (nomes, descrição, substituições globais, validação, commit/push)
  const env = require('dotenv').config().parsed || process.env;
  // Detecta dados antigos
  const rootPkgPath = path.join(process.cwd(), 'package.json');
  const uiPackagePath = path.join('packages', 'ui', 'package.json');
  let oldRepoName = 'monorepo-starter';
  let oldUiName = '@arthurcorreadev/monorepo-starter-ui';
  let oldUser = 'arthurcorreadev';
  if (fs.existsSync(rootPkgPath)) {
    const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));
    if (rootPkg.name) oldRepoName = rootPkg.name;
  }
  if (fs.existsSync(uiPackagePath)) {
    const uiPkg = JSON.parse(fs.readFileSync(uiPackagePath, 'utf8'));
    if (uiPkg.name) oldUiName = uiPkg.name;
  }
  if (oldUiName.startsWith('@')) {
    oldUser = oldUiName.split('/')[0].replace('@', '');
  }

  // Detecta dados novos
  const githubUser = env.GITHUB_USER || oldUser;
  const repo = env.GITHUB_REPO || `${githubUser}/${oldRepoName}`;
  const npmUser = env.NPM_USER || githubUser;
  const repoName = repo.split('/')[1] || oldRepoName;
  const newUiName = `@${npmUser}/${repoName}-ui`;
  const newRepoName = repoName;
  const newUser = npmUser;

  // Atualiza o nome do pacote UI
  if (fs.existsSync(uiPackagePath)) {
    backupFile(uiPackagePath);
    const uiPkg = JSON.parse(fs.readFileSync(uiPackagePath, 'utf8'));
    if (uiPkg.name !== newUiName) {
      uiPkg.name = newUiName;
      uiPkg.publishConfig = { access: 'public' };
      fs.writeFileSync(uiPackagePath, JSON.stringify(uiPkg, null, 2));
      summary.push({ type: 'success', msg: `Nome do pacote UI atualizado para: ${newUiName}` });
    }
  }

  // Atualiza o nome do package.json raiz
  if (fs.existsSync(rootPkgPath)) {
    backupFile(rootPkgPath);
    const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));
    if (rootPkg.name !== newRepoName) {
      rootPkg.name = newRepoName;
      fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2));
      summary.push({
        type: 'success',
        msg: `Nome do package.json raiz atualizado para: ${newRepoName}`,
      });
    }
  }

  // Atualiza a descrição do projeto no README.md
  try {
    const description = execSync(`gh repo view ${repo} --json description --jq .description`, {
      encoding: 'utf8',
    }).trim();
    const readmePath = path.join(process.cwd(), 'README.md');
    if (fs.existsSync(readmePath) && description) {
      backupFile(readmePath);
      let readme = fs.readFileSync(readmePath, 'utf8');
      readme = readme.replace(
        /<div id="project-description">([\s\S]*?)<\/div>/,
        `<div id="project-description">\n${description}\n</div>`,
      );
      fs.writeFileSync(readmePath, readme);
      summary.push({ type: 'success', msg: 'Descrição do projeto atualizada no README.md!' });
    }
  } catch (err) {
    summary.push({
      type: 'warn',
      msg: 'Não foi possível atualizar a descrição do projeto no README.md: ' + err.message,
    });
  }

  // Substituições globais (UI, repo, user) em arquivos relevantes
  const substitutions = [
    [oldUiName, newUiName],
    [oldRepoName, newRepoName],
    [oldUser, newUser],
  ];
  const exts = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.yml', '.yaml'];
  const dirs = ['apps', 'packages', '.', '.github', 'scripts'];
  const filesWithError = [];

  function updateInFile(filePath, pairs) {
    try {
      backupFile(filePath);
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      pairs.forEach(([oldStr, newStr]) => {
        if (oldStr && newStr && oldStr !== newStr) {
          const regex = new RegExp(oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
          if (regex.test(content)) {
            content = content.replace(regex, newStr);
            changed = true;
          }
        }
      });
      if (changed) {
        fs.writeFileSync(filePath, content);
        summary.push({ type: 'success', msg: `Atualizado: ${filePath}` });
      }
    } catch (e) {
      filesWithError.push(filePath);
      summary.push({ type: 'warn', msg: `Erro ao atualizar ${filePath}: ${e.message}` });
    }
  }

  function walk(folder) {
    fs.readdirSync(folder).forEach((file) => {
      const fullPath = path.join(folder, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (exts.some((ext) => file.endsWith(ext))) {
        updateInFile(fullPath, substitutions);
      }
    });
  }
  dirs.forEach((dir) => {
    if (fs.existsSync(dir)) walk(dir);
  });

  // Validação pós-setup: install, build, lint, format, test
  try {
    console.log(color('\nExecutando pnpm install...', 'step'));
    execSync('pnpm install', { stdio: 'inherit' });
    console.log(color('\nExecutando pnpm format...', 'step'));
    execSync('pnpm format', { stdio: 'inherit' });
    console.log(color('\nExecutando pnpm lint...', 'step'));
    execSync('pnpm lint', { stdio: 'inherit' });
    console.log(color('\nExecutando pnpm build...', 'step'));
    execSync('pnpm build', { stdio: 'inherit' });
    console.log(color('\nExecutando pnpm test...', 'step'));
    execSync('pnpm test', { stdio: 'inherit' });
    // Se tudo passou, faz commit e push
    console.log(color('\nTudo validado! Realizando commit e push das alterações...', 'success'));
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "chore(setup): personalização automática do monorepo"', {
      stdio: 'inherit',
    });
    execSync('git push', { stdio: 'inherit' });
    summary.push({ type: 'success', msg: 'Commit e push realizados com sucesso!' });
  } catch (err) {
    summary.push({
      type: 'error',
      msg: 'Erro durante a validação ou commit/push automático: ' + err.message,
    });
    printSummary(summary);
    process.exit(1);
  }

  // 4. Turbo login
  const turboConfigPath = path.join('.turbo', 'config.json');
  if (!skipTurbo) {
    if (!fs.existsSync(turboConfigPath)) {
      try {
        execSync('pnpm dlx turbo login', { stdio: 'inherit' });
        execSync('npx turbo link', { stdio: 'inherit' });
        summary.push({ type: 'success', msg: 'Turbo Remote Cache vinculado.' });
      } catch (e) {
        summary.push({ type: 'warn', msg: 'Falha ao vincular Turbo Remote Cache: ' + e.message });
      }
    } else {
      summary.push({ type: 'success', msg: 'Turbo Remote Cache já está vinculado.' });
    }
  } else {
    summary.push({ type: 'warn', msg: 'Turbo login pulado (--skip-turbo).' });
  }

  // 5. Instala extensões recomendadas do VSCode
  if (!skipVSCode && fs.existsSync('.vscode/extensions.json')) {
    try {
      const extList = JSON.parse(fs.readFileSync('.vscode/extensions.json')).recommendations || [];
      extList.forEach((ext) => {
        try {
          execSync(`code --install-extension ${ext}`, { stdio: 'inherit' });
          summary.push({ type: 'success', msg: `Extensão instalada: ${ext}` });
        } catch (e) {
          summary.push({ type: 'warn', msg: `Falha ao instalar extensão ${ext}: ${e.message}` });
        }
      });
    } catch (e) {
      summary.push({ type: 'warn', msg: 'Erro ao ler .vscode/extensions.json: ' + e.message });
    }
  } else if (skipVSCode) {
    summary.push({ type: 'warn', msg: 'Instalação de extensões VSCode pulada (--skip-vscode).' });
  }

  printSummary(summary);
  if (summary.some((s) => s.type === 'error')) {
    process.exit(1);
  }

  // Dispara workflows essenciais via GitHub CLI
  const workflows = ['update-internal-deps.yml', 'github-sync.yml', 'security-maintenance.yml'];
  workflows.forEach((wf) => {
    try {
      execSync(`gh workflow run ${wf}`, { stdio: 'inherit' });
      console.log(color(`Workflow ${wf} disparado com sucesso!`, 'success'));
    } catch (e) {
      console.warn(color(`Não foi possível disparar o workflow ${wf}: ${e.message}`, 'warn'));
    }
  });
}

main();
