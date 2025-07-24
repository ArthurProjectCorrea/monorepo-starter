const { execSync } = require('child_process');
const readline = require('readline');

function ask(question, def = 'N') {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(`${question} [y/N]: `, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase() === 'y');
    });
  });
}

async function branchExists(branch) {
  try {
    execSync(`git show-ref --verify --quiet refs/heads/${branch}`);
    return true;
  } catch {
    return false;
  }
}

async function remoteBranchExists(branch) {
  try {
    execSync(`git ls-remote --exit-code --heads origin ${branch}`);
    return true;
  } catch {
    return false;
  }
}

async function createAndPushBranch(branch, from = 'main') {
  execSync(`git checkout ${from}`);
  execSync(`git checkout -b ${branch}`);
  execSync(`git push -u origin ${branch}`);
}

async function syncDevWithMain() {
  execSync('git checkout dev');
  execSync('git fetch origin main');
  execSync('git merge origin/main');
  execSync('git push origin dev');
}

async function deleteBranchProtection(repo, branch) {
  try {
    execSync(`gh api -X DELETE repos/${repo}/branches/${branch}/protection`);
  } catch (err) {
    // Se não existe, ignora
  }
}

async function setBranchProtection(repo, branch, config) {
  execSync(
    `gh api -X PUT repos/${repo}/branches/${branch}/protection -f required_pull_request_reviews='${JSON.stringify(config.reviews)}' -f required_status_checks='${JSON.stringify(config.statusChecks)}' -f enforce_admins=${config.enforceAdmins} -f restrictions='${JSON.stringify(config.restrictions)}' -f required_conversation_resolution=${config.conversationResolution} -f required_signatures=${config.signedCommits}`,
  );
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
    execSync('git push origin main');
  }

  if (!devExists) {
    await createAndPushBranch('dev', 'main');
  } else if (!remoteDevExists) {
    execSync('git push origin dev');
  }

  // 2. Sincroniza dev com main se necessário
  execSync('git checkout dev');
  execSync('git fetch origin main');
  const mainHash = execSync('git rev-parse origin/main').toString().trim();
  const devHash = execSync('git rev-parse HEAD').toString().trim();
  if (mainHash !== devHash) {
    await syncDevWithMain();
    console.log('Branch dev sincronizada com main.');
  }

  // 3. Proteção das branches
  // Apaga proteção anterior
  await deleteBranchProtection(repo, 'main');
  await deleteBranchProtection(repo, 'dev');

  // Configuração main
  const signedCommitsMain = await ask('Deseja exigir commits assinados na branch main?', 'N');
  const configMain = {
    reviews: { required_approving_review_count: 2 },
    statusChecks: { strict: true, contexts: ['build', 'lint', 'test', 'typecheck'] },
    enforceAdmins: true,
    restrictions: { users: [], teams: [], apps: [] },
    conversationResolution: true,
    signedCommits: signedCommitsMain,
  };
  await setBranchProtection(repo, 'main', configMain);
  console.log('Proteção da branch main configurada.');

  // Configuração dev
  const restrictPushDev = await ask('Deseja restringir quem pode fazer push na branch dev?', 'N');
  const signedCommitsDev = await ask('Deseja exigir commits assinados na branch dev?', 'N');
  const configDev = {
    reviews: { required_approving_review_count: 1 },
    statusChecks: { strict: true, contexts: ['build', 'lint', 'test'] },
    enforceAdmins: false,
    restrictions: restrictPushDev ? { users: [], teams: [], apps: [] } : null,
    conversationResolution: true,
    signedCommits: signedCommitsDev,
  };
  await setBranchProtection(repo, 'dev', configDev);
  console.log('Proteção da branch dev configurada.');
};
