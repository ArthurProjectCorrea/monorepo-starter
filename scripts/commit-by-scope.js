import fs from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

function getAllPackageFoldersAndNames(dir = '.') {
  const result = [];
  function walk(current) {
    const files = fs.readdirSync(current, { withFileTypes: true });
    for (const file of files) {
      if (file.name === 'node_modules' || file.name.startsWith('.')) continue;
      const fullPath = join(current, file.name);
      if (file.isDirectory()) {
        walk(fullPath);
      } else if (file.name === 'package.json') {
        try {
          const pkg = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
          if (pkg.name) {
            const rootFolder = fullPath.split(/[\\/]/).slice(-2, -1)[0];
            result.push({ folder: rootFolder, name: pkg.name });
          }
        } catch {}
      }
    }
  }
  walk(dir);
  return result;
}

// 1. Descobre todos os root folders e names dos package.json
const allPkgs = getAllPackageFoldersAndNames();
const folderToName = Object.fromEntries(allPkgs.map(({ folder, name }) => [folder, name]));

// 2. Executa git ls-files -m -o --exclude-standard para pegar arquivos alterados
const changedFiles = execSync('git ls-files -m -o --exclude-standard', { encoding: 'utf8' })
  .split('\n')
  .map((f) => f.trim())
  .filter(Boolean);

// 3. Agrupa arquivos pelo diretório de package.json mais próximo no caminho
const groups = {};
for (const file of changedFiles) {
  const parts = file.split(/[\\/]/);
  let found = false;
  // Tenta do caminho mais profundo até a raiz
  for (let i = parts.length - 2; i >= 0; i--) {
    const candidate = parts[i];
    if (folderToName[candidate]) {
      if (!groups[candidate]) groups[candidate] = { name: folderToName[candidate], files: [] };
      groups[candidate].files.push(file);
      found = true;
      break;
    }
  }
  if (!found) {
    if (!groups['undefined']) groups['undefined'] = { name: 'monorepo-starter', files: [] };
    groups['undefined'].files.push(file);
  }
}

// 4. Salva JSON agrupando arquivos por escopo (name) em scripts/temp/scopes.json
const result = {};
for (const { name, files } of Object.values(groups)) {
  if (files.length) result[name] = files;
}
const tempDir = join('scripts', 'temp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
fs.writeFileSync(join(tempDir, 'scopes.json'), JSON.stringify(result, null, 2));
console.log('Arquivo scripts/temp/scopes.json gerado com sucesso!');
