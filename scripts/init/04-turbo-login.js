const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports = function turboLogin() {
  const turboConfigPath = path.join('.turbo', 'config.json');
  if (!fs.existsSync(turboConfigPath)) {
    execSync('pnpm dlx turbo login', { stdio: 'inherit' });
    execSync('npx turbo link', { stdio: 'inherit' });
  } else {
    console.log(
      'Turbo Remote Cache já está vinculado. Pulando "pnpm dlx turbo login" e "npx turbo link".',
    );
  }
};
