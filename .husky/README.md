# Husky Hooks do Monorepo

Este diretório contém os hooks de Git automatizados para garantir qualidade e padronização no fluxo de desenvolvimento.

## Hooks configurados

- **pre-commit**: Executa build, lint global e lint-staged nos arquivos alterados.
- **commit-msg**: Valida a mensagem de commit usando commitlint (padrão Conventional Commits).
- **pre-push**: Executa typecheck e todos os testes antes de permitir o push.

## Dicas

- Para pular hooks temporariamente: `git commit --no-verify` ou `git push --no-verify`
- Se algum hook falhar, leia a mensagem de erro e corrija antes de tentar novamente.

## Customização

Edite os scripts em cada arquivo para adaptar à sua stack ou fluxo.

---

> Mantenha este README atualizado sempre que alterar os hooks.
