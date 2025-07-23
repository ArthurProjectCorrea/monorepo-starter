const fs = require('fs');
const path = require('path');

module.exports = function updateUiName(githubUser, githubRepo) {
  // Usa NPM_USER e GITHUB_REPO do .env
  const env = require('dotenv').config().parsed || process.env;
  const npmUser = env.NPM_USER || githubUser || 'repo';
  const repoName = (env.GITHUB_REPO || githubRepo || 'repo/repo').split('/')[1] || 'repo';
  const uiPackagePath = path.join('packages', 'ui', 'package.json');
  if (fs.existsSync(uiPackagePath)) {
    const uiPkg = JSON.parse(fs.readFileSync(uiPackagePath, 'utf8'));
    const newName = `@${npmUser}/${repoName}-ui`;
    if (uiPkg.name !== newName) {
      uiPkg.name = newName;
      uiPkg.publishConfig = { access: 'public' };
      fs.writeFileSync(uiPackagePath, JSON.stringify(uiPkg, null, 2));
      console.log(`Nome do pacote UI atualizado para: ${newName}`);
    }
    return newName;
  }
  return null;
};
