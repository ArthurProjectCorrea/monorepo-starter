const { execSync } = require('child_process');

module.exports = function checkGitStatus() {
  const status = execSync('git status --porcelain').toString().trim();
  if (status) {
    console.error(
      '\nERRO: Existem arquivos não commitados ou alterações pendentes no repositório.\nPor favor, faça commit ou stash das alterações antes de rodar o setup.\n',
    );
    process.exit(1);
  }
};
