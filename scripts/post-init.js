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

  // 4. Renomear último commit (apenas se estiver na main)
  let currentBranch = '';
  try {
    currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch (e) {
    console.warn('Não foi possível identificar a branch atual. Pulando amend do commit.');
  }
  if (currentBranch === 'main') {
    run('git commit --amend -m "chore(initial-setup): initialize project structure"');
    run('git push --force origin main');
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

  // 8. Configurar proteções de branch via API do GitHub
  const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
  const apiBase = `https://api.github.com/repos/${githubRepo}/branches`;
  const headers = { Authorization: `token ${githubToken}`, Accept: 'application/vnd.github+json' };

  // Remove proteções antigas das branches main e dev antes de aplicar as novas
  await fetch(`${apiBase}/main/protection`, {
    method: 'DELETE',
    headers,
  });
  await fetch(`${apiBase}/dev/protection`, {
    method: 'DELETE',
    headers,
  });

  // Proteção main (nova)
  await fetch(`${apiBase}/main/protection`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      required_status_checks: { strict: true, contexts: [] },
      enforce_admins: true,
      required_pull_request_reviews: { required_approving_review_count: 1 },
      restrictions: null,
    }),
  });
  // Proteção dev (nova, libera push/tag sem PR/review, sem status checks obrigatórios)
  await fetch(`${apiBase}/dev/protection`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      required_status_checks: null,
      enforce_admins: false,
      required_pull_request_reviews: null,
      restrictions: null,
    }),
  });
  console.log('Proteções de branch removidas e reconfiguradas!');
  console.log(
    '\nATENÇÃO: Se o semantic-release continuar falhando por proteção da branch dev, revise manualmente as configurações em Settings > Branches > Branch protection rules no GitHub. Certifique-se de que "Require a pull request before merging" e outras restrições estejam desmarcadas para a branch dev.',
  );

  // 9. Rodar validações
  run('pnpm lint');
  run('pnpm build');
  run('pnpm test');
  run('pnpm format');
  run('pnpm dev');
}

main();
