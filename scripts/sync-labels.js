import fs from 'fs';
import axios from 'axios';
import yaml from 'js-yaml';
import path from 'path';

const LABELS_PATH = path.resolve('.github/labels.yml');
const GITHUB_TOKEN = process.env.GH_PAT;
const REPO = process.env.GITHUB_REPO;

if (!GITHUB_TOKEN) {
  console.error('GH_PAT não definido');
  process.exit(1);
}
if (!REPO) {
  console.error('GITHUB_REPO não definido');
  process.exit(1);
}
if (!fs.existsSync(LABELS_PATH)) {
  console.error('Arquivo de labels não encontrado:', LABELS_PATH);
  process.exit(1);
}

const labels = yaml.load(fs.readFileSync(LABELS_PATH, 'utf8'));

void (async () => {
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
})();
