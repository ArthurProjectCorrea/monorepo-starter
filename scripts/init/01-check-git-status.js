const { execSync } = require('child_process');

function renameLastCommitIfInitial() {
  try {
    const lastMessage = execSync('git log -1 --pretty=%B').toString().trim();
    if (/^Initial commit$/i.test(lastMessage)) {
      const newMsg = 'chore(init): commit inicial do template';
      execSync(`git commit --amend -m "${newMsg}"`, { stdio: 'inherit' });
      console.log('\nMensagem do commit inicial atualizada para o padrão convencional.\n');
    }
  } catch (err) {
    console.error('Erro ao tentar renomear o commit inicial:', err.message);
    process.exit(1);
  }
}

module.exports = function checkGitStatus() {
  // Renomeia o commit inicial se necessário antes de qualquer verificação
  renameLastCommitIfInitial();
  const status = execSync('git status --porcelain').toString().trim();
  if (status) {
    console.error(
      '\nERRO: Existem arquivos não commitados ou alterações pendentes no repositório.\nPor favor, faça commit ou stash das alterações antes de rodar o setup.\n',
    );
    process.exit(1);
  }
};
