const fs = require('fs');
const path = require('path');

module.exports = function updateUiDeps(oldName, newName) {
  const dirs = ['apps', 'packages'];
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach((sub) => {
      const pkgPath = path.join(dir, sub, 'package.json');
      if (fs.existsSync(pkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        let changed = false;
        ['dependencies', 'devDependencies', 'peerDependencies'].forEach((depType) => {
          if (pkg[depType] && pkg[depType][oldName]) {
            pkg[depType][newName] = pkg[depType][oldName];
            delete pkg[depType][oldName];
            changed = true;
          }
        });
        if (changed) {
          fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
          console.log(`Dependência atualizada em: ${pkgPath}`);
        }
      }
    });
  });
};
