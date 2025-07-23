const fs = require('fs');
const path = require('path');

function updateImportsInFile(filePath, oldName, newName) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(new RegExp(`(['"])${oldName}`, 'g'), `$1${newName}`);
  if (content !== updated) {
    fs.writeFileSync(filePath, updated);
    console.log(`Atualizado imports em: ${filePath}`);
  }
}

module.exports = function updateUiImports(oldName, newName) {
  const exts = ['.ts', '.tsx', '.js', '.jsx'];
  const dirs = ['apps', 'packages'];
  dirs.forEach((dir) => {
    const walk = (folder) => {
      fs.readdirSync(folder).forEach((file) => {
        const fullPath = path.join(folder, file);
        if (fs.statSync(fullPath).isDirectory()) {
          walk(fullPath);
        } else if (exts.some((ext) => file.endsWith(ext))) {
          updateImportsInFile(fullPath, oldName, newName);
        }
      });
    };
    if (fs.existsSync(dir)) walk(dir);
  });
};
