import fs from 'fs';
import path from 'path';

const LOG_PATH = path.resolve(__dirname, 'copilot-errors.json');

export function registrarErro(comando: string, mensagem: string, codigo?: number) {
  const log = fs.existsSync(LOG_PATH) ? JSON.parse(fs.readFileSync(LOG_PATH, 'utf-8')) : [];

  log.push({
    comando,
    mensagem,
    codigo,
    data: new Date().toISOString(),
  });

  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
}

export function carregarErros() {
  if (!fs.existsSync(LOG_PATH)) return [];
  return JSON.parse(fs.readFileSync(LOG_PATH, 'utf-8'));
}
