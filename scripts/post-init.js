#!/usr/bin/env node

const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const readline = require('readline');
const path = require('path');

function run(cmd, opts = {}) {
  console.log(`\n> ${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit', ...opts });
  } catch (e) {
    console.error(`Erro ao executar: ${cmd}`);
    process.exit(1);
  }
}

async function ask(question, mask = false) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    if (!mask) {
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    } else {
      process.stdout.write(question);
      let input = '';
      process.stdin.on('data', (char) => {
        char = char + '';
        switch (char) {
          case '\n':
          case '\r':
          case '\u0004':
            process.stdin.pause();
            rl.close();
            process.stdout.write('\n');
            resolve(input);
            break;
          default:
            process.stdout.write('*');
            input += char;
            break;
        }
      });
    }
  });
}

async function main() {
  // Perguntar se exige deployments bem-sucedidos antes do merge na main
  let mainRequiredDeployments = [];
  const mainRequireDeployments =
    (
      await ask('Exigir deployments bem-sucedidos antes do merge na main? (y/n): ')
    ).toLowerCase() === 'y';
  if (mainRequireDeployments) {
    const envs = await ask(
      'Quais ambientes devem ser implantados com sucesso antes do merge? (separe por vírgula, ex: production,staging): ',
    );
    mainRequiredDeployments = envs
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean);
  }
  // 0. Verificar se há arquivos não commitados
  const status = execSync('git status --porcelain').toString().trim();
  if (status) {
    console.error(
      '\nERRO: Existem arquivos não commitados ou alterações pendentes no repositório.\nPor favor, faça commit ou stash das alterações antes de rodar o setup.\n',
    );
    process.exit(1);
  }
  // 1. Instalar dependências
  run('pnpm install');

  // 2. Instalar extensões recomendadas (VSCode)
  if (fs.existsSync('.vscode/extensions.json')) {
    try {
      const extList = JSON.parse(fs.readFileSync('.vscode/extensions.json')).recommendations || [];
      extList.forEach((ext) => run(`code --install-extension ${ext}`));
    } catch {}
  }

  // 3. Login no cache remoto Turborepo
  const turboConfigPath = path.join('.turbo', 'config.json');
  if (!fs.existsSync(turboConfigPath)) {
    run('pnpm dlx turbo login');
    run('npx turbo link');
  } else {
    console.log(
      'Turbo Remote Cache já está vinculado. Pulando "pnpm dlx turbo login" e "npx turbo link".',
    );
  }

  // 4. Perguntar se deseja renomear o último commit (apenas se estiver na main)
  let currentBranch = '';
  try {
    currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch (e) {
    console.warn('Não foi possível identificar a branch atual. Pulando amend do commit.');
  }
  if (currentBranch === 'main') {
    const renameCommit = (
      await ask('Deseja renomear o último commit da main? (y/n): ')
    ).toLowerCase();
    if (renameCommit === 'y') {
      run('git commit --amend -m "chore(initial-setup): initialize project structure"');
      run('git push --force origin main');
    } else {
      console.log('Pulando renomeação do último commit.');
    }
  } else {
    console.log('Pulando git commit --amend: só é executado na branch main.');
  }

  // 5. Solicitar/criar .env apenas se não existir
  let githubToken, githubUser, githubRepo;
  if (!fs.existsSync('.env')) {
    githubToken = await ask('Informe seu GitHub Personal Access Token: ', true);
    githubUser = await ask('Informe seu usuário do GitHub: ');
    githubRepo = await ask('Informe o nome do repositório (ex: user/repo): ');
    fs.writeFileSync(
      '.env',
      `GITHUB_TOKEN=${githubToken}\nGITHUB_USER=${githubUser}\nGITHUB_REPO=${githubRepo}\n`,
    );
    console.log('Arquivo .env criado com sucesso!');
  }

  // 6. Ler dados do .env
  require('dotenv').config();
  githubToken = process.env.GITHUB_TOKEN;
  githubUser = process.env.GITHUB_USER;
  githubRepo = process.env.GITHUB_REPO;
  if (!githubToken || !githubUser || !githubRepo) {
    console.error('Variáveis GITHUB_TOKEN, GITHUB_USER ou GITHUB_REPO não encontradas no .env.');
    process.exit(1);
  }

  // 7. Garantir alinhamento entre dev e main
  run('git checkout main');
  run('git pull origin main');

  // Verifica se a branch dev existe localmente
  let devExistsLocal = false;
  try {
    execSync('git show-ref --verify --quiet refs/heads/dev');
    devExistsLocal = true;
  } catch {}

  // Verifica se a branch dev existe remotamente
  let devExistsRemote = false;
  try {
    const remoteBranches = execSync('git ls-remote --heads origin dev').toString();
    if (remoteBranches.includes('refs/heads/dev')) devExistsRemote = true;
  } catch {}

  if (devExistsLocal || devExistsRemote) {
    // Se existe, faz checkout e rebase/merge da main
    run('git checkout dev');
    run('git pull origin dev');
    // Rebase da main para dev (pode trocar para merge se preferir)
    run('git rebase main');
  } else {
    // Se não existe, cria a partir da main
    run('git checkout -b dev main');
  }

  // Tenta push, se falhar por divergência ou non-fast-forward, faz pull --rebase e tenta novamente
  try {
    run('git push -u origin dev');
  } catch (e) {
    console.log(
      'Push para dev falhou. Tentando git pull --rebase origin dev para alinhar com remoto...',
    );
    try {
      run('git pull --rebase origin dev');
      run('git push -u origin dev');
    } catch (err) {
      console.error(
        'Não foi possível resolver a divergência automaticamente. Resolva manualmente e rode o script novamente.',
      );
      process.exit(1);
    }
  }

  // 8. Perguntar regras de proteção de branch
  const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
  const apiBase = `https://api.github.com/repos/${githubRepo}/branches`;
  const headers = { Authorization: `token ${githubToken}`, Accept: 'application/vnd.github+json' };

  // Remove proteções antigas das branches main e dev antes de aplicar as novas
  await fetch(`${apiBase}/main/protection`, { method: 'DELETE', headers });
  await fetch(`${apiBase}/dev/protection`, { method: 'DELETE', headers });

  // Perguntas para main
  console.log('\nConfiguração de proteção da branch main:');
  const mainStrictStatus =
    (await ask('Exigir status checks antes do merge? (y/n): ')).toLowerCase() === 'y';
  const mainEnforceAdmins =
    (await ask('Aplicar regras para admins? (y/n): ')).toLowerCase() === 'y';
  const mainRequireReview =
    (await ask('Exigir review antes do merge? (y/n): ')).toLowerCase() === 'y';
  let mainReviewCount = 0;
  if (mainRequireReview) {
    const reviewCount = await ask(
      'Quantos reviews são necessários para aprovar o merge? (número): ',
    );
    mainReviewCount = parseInt(reviewCount) || 1;
  }

  await fetch(`${apiBase}/main/protection`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      required_status_checks: mainStrictStatus ? { strict: true, contexts: [] } : null,
      enforce_admins: mainEnforceAdmins,
      required_pull_request_reviews: mainRequireReview
        ? { required_approving_review_count: mainReviewCount }
        : null,
      restrictions: null,
      required_deployments:
        mainRequireDeployments && mainRequiredDeployments.length > 0
          ? { required_deployment_environments: mainRequiredDeployments }
          : undefined,
    }),
  });

  // Perguntas para dev
  console.log('\nConfiguração de proteção da branch dev:');
  const devStrictStatus =
    (await ask('Exigir status checks antes do push/merge em dev? (y/n): ')).toLowerCase() === 'y';
  const devEnforceAdmins =
    (await ask('Aplicar regras para admins em dev? (y/n): ')).toLowerCase() === 'y';
  const devRequireReview =
    (await ask('Exigir review antes do merge em dev? (y/n): ')).toLowerCase() === 'y';
  let devReviewCount = 0;
  if (devRequireReview) {
    const reviewCount = await ask(
      'Quantos reviews são necessários para aprovar o merge em dev? (número): ',
    );
    devReviewCount = parseInt(reviewCount) || 1;
  }

  await fetch(`${apiBase}/dev/protection`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      required_status_checks: devStrictStatus ? { strict: true, contexts: [] } : null,
      enforce_admins: devEnforceAdmins,
      required_pull_request_reviews: devRequireReview
        ? { required_approving_review_count: devReviewCount }
        : null,
      restrictions: null,
    }),
  });

  console.log('Proteções de branch removidas e reconfiguradas!');

  // 9. Rodar validações
  run('pnpm lint');
  run('pnpm build');
  run('pnpm test');
  run('pnpm format');
  run('pnpm dev');
}

main();
