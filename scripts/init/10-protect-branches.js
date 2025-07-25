const { exec } = require('child_process');
const util = require('util');
const fs = require('fs');
const execAsync = util.promisify(exec);
// ...

async function branchExists(branch) {
  try {
    await execAsync(`git show-ref --verify --quiet refs/heads/${branch}`);
    return true;
  } catch {
    return false;
  }
}

async function remoteBranchExists(branch) {
  try {
    await execAsync(`git ls-remote --exit-code --heads origin ${branch}`);
    return true;
  } catch {
    return false;
  }
}

async function createAndPushBranch(branch, from = 'main') {
  await execAsync(`git checkout ${from}`);
  await execAsync(`git checkout -b ${branch}`);
  await execAsync(`git push -u origin ${branch}`);
}

// ...

async function deleteBranchProtection(repo, branch) {
  try {
    await execAsync(`gh api -X DELETE repos/${repo}/branches/${branch}/protection`);
  } catch (err) {
    // Se não existe, ignora
  }
}

async function setBranchProtection(repo, branch, config) {
  // Cria arquivo JSON temporário para enviar payload correto
  // Detecta se o repo é de organização (prefixo diferente do usuário)
  // Detecta se o repo é de organização via API do GitHub
  let isOrgRepo = false;
  try {
    const orgCheck = await execAsync(`gh api repos/${repo} --jq ".owner.type"`);
    isOrgRepo = orgCheck.stdout.trim().toLowerCase() === 'organization';
  } catch {
    // fallback para heurística antiga
    const owner = repo.split('/')[0];
    isOrgRepo = process.env.GITHUB_USER
      ? owner.toLowerCase() !== process.env.GITHUB_USER.toLowerCase()
      : false;
  }
  const payload = {};
  if (config.reviews) {
    payload.required_pull_request_reviews = config.reviews;
  }
  if (config.statusChecks) {
    payload.required_status_checks = config.statusChecks;
  }
  if (typeof config.enforceAdmins === 'boolean') {
    payload.enforce_admins = config.enforceAdmins;
  }
  if (typeof config.conversationResolution === 'boolean') {
    payload.required_conversation_resolution = config.conversationResolution;
  }
  if (isOrgRepo) {
    payload.restrictions =
      config.restrictions && typeof config.restrictions === 'object'
        ? config.restrictions
        : { users: [], teams: [], apps: [] };
  } else {
    payload.restrictions = null;
  }
  const tmpDir = 'scripts/tmp';
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }
  const tmpFile = `${tmpDir}/branch-protection-${branch}.json`;
  fs.writeFileSync(tmpFile, JSON.stringify(payload));
  await execAsync(`gh api -X PUT repos/${repo}/branches/${branch}/protection --input ${tmpFile}`);
  // Se commits assinados forem exigidos, ativa via endpoint separado
  if (config.signedCommits) {
    try {
      await execAsync(
        `gh api -X PUT repos/${repo}/branches/${branch}/protection/required_signatures`,
      );
    } catch (err) {
      console.error(`Falha ao exigir commits assinados na branch ${branch}:`, err.message);
    }
  } else {
    // Desativa exigência de commits assinados se necessário
    try {
      await execAsync(
        `gh api -X DELETE repos/${repo}/branches/${branch}/protection/required_signatures`,
      );
    } catch {}
  }
}

module.exports = async function protectBranches() {
  const repo = process.env.GITHUB_REPO;
  if (!repo) throw new Error('GITHUB_REPO não definido no .env');

  // 1. Confirma existência das branches main e dev
  const mainExists = await branchExists('main');
  const devExists = await branchExists('dev');
  const remoteMainExists = await remoteBranchExists('main');
  const remoteDevExists = await remoteBranchExists('dev');

  if (!mainExists) {
    await createAndPushBranch('main', 'HEAD');
  } else if (!remoteMainExists) {
    await execAsync('git push origin main');
  }

  // 2. Garante que dev seja igual à main: exclui dev local/remoto e só depois recria
  if (devExists) {
    // Garante que não está na branch dev antes de excluir
    await execAsync('git checkout main');
    try {
      await execAsync('git branch -D dev');
    } catch {}
  }
  if (remoteDevExists) {
    try {
      await execAsync('git push origin --delete dev');
    } catch {}
  }
  // Agora cria dev a partir da main
  await createAndPushBranch('dev', 'main');
  console.log('Branch dev recriada a partir da main.');

  // 3. Proteção das branches
  // Apaga proteção anterior
  await deleteBranchProtection(repo, 'main');
  await deleteBranchProtection(repo, 'dev');

  // Detecta se o repo é de organização (prefixo diferente do usuário)
  const owner = repo.split('/')[0];
  const isOrgRepo = process.env.GITHUB_USER
    ? owner.toLowerCase() !== process.env.GITHUB_USER.toLowerCase()
    : false;

  // Configuração main (sem perguntas interativas)
  const configMain = {
    reviews: { required_approving_review_count: 2 },
    statusChecks: { strict: true, contexts: ['build', 'lint', 'test', 'typecheck'] },
    enforceAdmins: true,
    conversationResolution: true,
    signedCommits: false,
  };
  if (isOrgRepo) {
    configMain.restrictions = { users: [], teams: [], apps: [] };
  }
  await setBranchProtection(repo, 'main', configMain);
  console.log('Proteção da branch main configurada.');

  // Configuração dev (sem perguntas interativas)
  const configDev = {
    reviews: { required_approving_review_count: 1 },
    statusChecks: { strict: true, contexts: ['build', 'lint', 'test'] },
    enforceAdmins: false,
    conversationResolution: true,
    signedCommits: false,
  };
  // Nunca restringe push na dev por padrão
  // ...
  await setBranchProtection(repo, 'dev', configDev);
  console.log('Proteção da branch dev configurada.');

  // Limpeza dos arquivos temporários de branch protection
  const tmpDir = 'scripts/tmp';
  try {
    const files = fs.readdirSync(tmpDir);
    files.forEach((file) => {
      if (file.startsWith('branch-protection-') && file.endsWith('.json')) {
        fs.unlinkSync(`${tmpDir}/${file}`);
      }
    });
    console.log('Arquivos temporários de branch protection removidos.');
  } catch (err) {
    // Se pasta não existe ou erro, ignora
  }
};
