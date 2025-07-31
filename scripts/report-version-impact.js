#!/usr/bin/env node
// scripts/report-version-impact.js
// Gera um relatório dos pacotes impactados e seus níveis de versionamento entre main e dev
// Uso: node scripts/report-version-impact.js

import { execSync } from 'child_process';
import fs from 'fs';

// 1. Buscar todos os packages.json (incluindo o da raiz)
function getAllPackages(dir = '.') {
  const pkgs = {};
  function walk(current) {
    const files = fs.readdirSync(current, { withFileTypes: true });
    for (const file of files) {
      if (file.name === 'node_modules' || file.name.startsWith('.')) continue;
      const fullPath = `${current}/${file.name}`;
      if (file.isDirectory()) {
        walk(fullPath);
      } else if (file.name === 'package.json') {
        try {
          const pkg = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
          if (pkg.name) {
            const relPath = fullPath.replace(/^[.][\\/]/, '').replace(/\\/g, '/');
            pkgs[pkg.name] = relPath;
          }
        } catch (e) {
          // Ignora pacotes.json inválidos
        }
      }
    }
  }
  walk(dir);
  return pkgs;
}

const PKGS = getAllPackages();
const PKG_NAMES = Object.keys(PKGS);

console.log('Pacotes encontrados:');
PKG_NAMES.forEach((name) => {
  console.log(`- ${name} (${PKGS[name]})`);
});
console.log('\n');

// 2. Listar todos os commits entre main e dev
const COMMITS = execSync('git log --pretty=format:"%s" origin/main..dev', { encoding: 'utf-8' })
  .split('\n')
  .filter(Boolean);

console.log('Commits entre main e dev:');
COMMITS.forEach((c) => console.log('- ' + c));
console.log('\n');

// 3. Filtrar commits relevantes e associar a cada package
const RELEVANT_TYPES = ['feat', 'fix', 'refactor', 'perf'];
const impact = {};

for (const line of COMMITS) {
  const match = line.match(/^([a-z]+)\(([^)]+)\):/);
  if (!match) continue;
  const tipo = match[1];
  const escopo = match[2];
  if (!RELEVANT_TYPES.includes(tipo)) continue;
  // O escopo pode ser o nome do package ou o nome da pasta (compatibilidade)
  for (const pkgName of PKG_NAMES) {
    if (escopo === pkgName) {
      // Determinar nível
      let nivel = 'patch';
      if (/BREAKING CHANGE|!:/i.test(line)) nivel = 'major';
      else if (tipo === 'feat') nivel = 'minor';
      else if (tipo === 'fix') nivel = 'patch';
      // Se já for major, não rebaixa
      if (
        !impact[pkgName] ||
        nivel === 'major' ||
        (nivel === 'minor' && impact[pkgName] !== 'major')
      ) {
        impact[pkgName] = nivel;
      }
    }
  }
}

console.log('Pacotes a serem versionados e seus níveis:');
if (Object.keys(impact).length === 0) {
  console.log('Nenhum pacote será versionado.');
} else {
  for (const [pkg, nivel] of Object.entries(impact)) {
    console.log(`- ${pkg}: ${nivel}`);
  }
}
