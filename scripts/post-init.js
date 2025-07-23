const path = require('path');
const { execSync } = require('child_process');

async function runInitScripts() {
  // 1. Check git status
  require('./init/01-check-git-status')();

  // 2. Install dependencies
  require('./init/02-install-deps')();

  // 3. Install VSCode extensions
  require('./init/03-vscode-extensions')();

  // 4. Turbo login
  require('./init/04-turbo-login')();

  // 5. Setup .env
  const setupEnv = require('./init/05-env');
  await setupEnv();
  require('dotenv').config();
  const githubUser = process.env.GITHUB_USER;
  const githubRepo = process.env.GITHUB_REPO;

  // 6. Atualiza nome do pacote UI
  const updateUiName = require('./init/06-update-ui-name');
  const uiPkgPath = path.join('packages', 'ui', 'package.json');
  let oldUiName = null;
  if (require('fs').existsSync(uiPkgPath)) {
    const uiPkg = JSON.parse(require('fs').readFileSync(uiPkgPath, 'utf8'));
    oldUiName = uiPkg.name;
  }
  const newUiName = updateUiName(githubUser, githubRepo);

  // 7. Atualiza imports do pacote UI
  if (oldUiName && newUiName && oldUiName !== newUiName) {
    require('./init/07-update-ui-imports')(oldUiName, newUiName);
    require('./init/08-update-ui-deps')(oldUiName, newUiName);
  }

  // 9. Configura secrets do GitHub para workflow
  require('./init/09-setup-gh-secrets')();
  // ...continue scripts de proteção de branch, validações, etc
}

runInitScripts();
