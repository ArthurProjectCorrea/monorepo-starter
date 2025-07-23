const { execSync } = require('child_process');

module.exports = function installDeps() {
  execSync('pnpm install', { stdio: 'inherit' });
};
