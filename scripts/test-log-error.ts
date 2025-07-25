import { registrarErro, carregarErros } from './log-error';

// Simula um erro de comando
registrarErro('pnpm install pacote-inexistente', 'ERR_PNPM_FETCH_404: Not Found', 1);

const erros = carregarErros();
console.log('Erros registrados:', erros);
