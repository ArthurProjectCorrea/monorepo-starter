// Script para sincronizar labels do GitHub a partir de .github/labels.yml
// Requer: node, axios, dotenv
// Uso: node scripts/sync-labels.js

const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const LABELS_PATH = path.resolve(__dirname, '../.github/labels.yml');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPOSITORY || 'ArthurProjectCorrea/monorepo-starter';

if (!GITHUB_TOKEN) {
  console.error('GITHUB_TOKEN não definido no .env');
  process.exit(1);
}

function parseYamlLabels(filePath) {
  const yaml = require('js-yaml');
  const content = fs.readFileSync(filePath, 'utf8');
  return yaml.load(content);
}

async function syncLabels(labels) {
  for (const label of labels) {
    try {
      await axios({
        method: 'post',
        url: `https://api.github.com/repos/${REPO}/labels`,
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3+json',
        },
        data: {
          name: label.name,
          color: label.color.replace('#', ''),
          description: label.description || '',
        },
      });
      console.log(`Label criada/atualizada: ${label.name}`);
    } catch (err) {
      if (err.response && err.response.status === 422) {
        // Label já existe, tenta atualizar
        await axios({
          method: 'patch',
          url: `https://api.github.com/repos/${REPO}/labels/${encodeURIComponent(label.name)}`,
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json',
          },
          data: {
            new_name: label.name,
            color: label.color.replace('#', ''),
            description: label.description || '',
          },
        });
        console.log(`Label atualizada: ${label.name}`);
      } else {
        console.error(`Erro ao criar/atualizar label ${label.name}:`, err.message);
      }
    }
  }
}

async function main() {
  if (!fs.existsSync(LABELS_PATH)) {
    console.error('Arquivo de labels não encontrado:', LABELS_PATH);
    process.exit(1);
  }
  const labels = parseYamlLabels(LABELS_PATH);
  await syncLabels(labels);
}

main();
