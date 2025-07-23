const { execSync } = require('child_process');
require('dotenv').config();

function setupGithubSecrets() {
  const repo = process.env.GITHUB_REPO;
  const user = process.env.GITHUB_USER;
  const pat = process.env.GH_PAT;
  const npmToken = process.env.NPM_TOKEN;

  if (!repo || !user || !pat || !npmToken) {
    console.error(
      '[setup-gh-secrets] Variáveis .env faltando: GITHUB_REPO, GITHUB_USER, GH_PAT, NPM_TOKEN',
    );
    process.exit(1);
  }

  try {
    // Configura GH_PAT
    execSync(`gh secret set GH_PAT --body "${pat}" --repo ${user}/${repo}`, { stdio: 'inherit' });
    // Configura NPM_TOKEN
    execSync(`gh secret set NPM_TOKEN --body "${npmToken}" --repo ${user}/${repo}`, {
      stdio: 'inherit',
    });
    console.log('[setup-gh-secrets] Secrets GH_PAT e NPM_TOKEN configurados com sucesso!');
  } catch (err) {
    console.error('[setup-gh-secrets] Erro ao configurar secrets:', err);
    process.exit(1);
  }
}

module.exports = setupGithubSecrets;
