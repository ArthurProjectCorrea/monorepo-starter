const fs = require('fs');
const { execSync } = require('child_process');

module.exports = function installVSCodeExtensions() {
  if (fs.existsSync('.vscode/extensions.json')) {
    try {
      const extList = JSON.parse(fs.readFileSync('.vscode/extensions.json')).recommendations || [];
      extList.forEach((ext) => execSync(`code --install-extension ${ext}`, { stdio: 'inherit' }));
    } catch {}
  }
};
