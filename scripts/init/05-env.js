const fs = require('fs');
const readline = require('readline');

async function ask(question, mask = false) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    if (!mask) {
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    } else {
      process.stdout.write(question);
      let input = '';
      process.stdin.on('data', (char) => {
        char = char + '';
        switch (char) {
          case '\n':
          case '\r':
          case '\u0004':
            process.stdin.pause();
            rl.close();
            process.stdout.write('\n');
            resolve(input);
            break;
          default:
            process.stdout.write('*');
            input += char;
            break;
        }
      });
    }
  });
}

module.exports = async function setupEnv() {
  let githubToken, githubUser, githubRepo, npmToken, npmUser;
  if (!fs.existsSync('.env')) {
    githubToken = await ask('Informe seu GitHub Personal Access Token: ', true);
    githubUser = await ask('Informe seu usuário do GitHub: ');
    githubRepo = await ask('Informe o nome do repositório (ex: user/repo): ');
    npmUser = await ask('Informe seu nome de usuário no npm: ');
    npmToken = await ask('Informe seu NPM_TOKEN (token do npm para publicação): ', true);
    fs.writeFileSync(
      '.env',
      `GITHUB_TOKEN=${githubToken}\nGITHUB_USER=${githubUser}\nGITHUB_REPO=${githubRepo}\nNPM_USER=${npmUser}\nNPM_TOKEN=${npmToken}\n`,
    );
    console.log('Arquivo .env criado com sucesso!');
  } else {
    const envContent = fs.readFileSync('.env', 'utf8');
    if (!envContent.includes('NPM_USER=')) {
      npmUser = await ask('Informe seu nome de usuário no npm: ');
      fs.appendFileSync('.env', `NPM_USER=${npmUser}\n`);
      console.log('NPM_USER adicionado ao .env!');
    }
    if (!envContent.includes('NPM_TOKEN=')) {
      npmToken = await ask('Informe seu NPM_TOKEN (token do npm para publicação): ', true);
      fs.appendFileSync('.env', `NPM_TOKEN=${npmToken}\n`);
      console.log('NPM_TOKEN adicionado ao .env!');
    }
  }
};
