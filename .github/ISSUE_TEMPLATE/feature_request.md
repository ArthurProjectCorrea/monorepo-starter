---
name: 'Feature Request'
description: 'Solicite uma nova feature para o monorepo.'
about: 'Template para solicitação de nova feature, cobrindo implementação, testes e documentação.'
title: '[Feature] <Nome da Feature>'
labels: ['feature', 'enhancement']
assignees: []
---

## 🚧 Nome da Branch

Padrão sugerido: `feat/<numero-issue>-<nome-descritivo>`

Exemplo: `feat/123-login-social`

---

---

## 📌 Descrição da Feature

Descreva de forma clara e objetiva:

- O que será implementado?
- O que NÃO será entregue nesta issue (escopo fora ou adiado)?
- Qual o problema/motivo dessa implementação?
- Qual valor essa feature agrega?

> **Importante:** Ao criar o PR, referencie esta issue e detalhe no PR tudo que foi implementado, não implementado e qualquer extra realizado.

---

## 📋 Tarefas

- [ ] Implementação principal
- [ ] Testes unitários e e2e
- [ ] Atualização da documentação
- [ ] Validação com demais pacotes/apps
- [ ] Revisão de código

---

## 🛠️ Detalhes Técnicos

| Item                      | Descrição                                     |
| ------------------------- | --------------------------------------------- |
| **Apps/Pacotes afetados** | Ex: `apps/api`, `apps/web`, `packages/ui`     |
| **Dependências**          | Ex: `zod`, `axios`                            |
| **Aliases/Paths**         | Ex: `@/shared/*`, `@api/*`                    |
| **Scripts auxiliares**    | Scripts de build, seed, deploy, etc.          |
| **Ambiente**              | Alguma variável nova? Configuração no `.env`? |

---

## 🧪 Estratégia de Testes

- Frameworks utilizados: `Jest`, `Vitest`, etc.
- Tipos: unitários, integração, e2e
- Principais cenários de teste
- Mocks/stubs esperados
- Cobertura mínima desejada (ex: 80%)

---

## 📚 Documentação

- [ ] `README.md` do pacote ou app
- [ ] `apps/docs` via Starlight
- [ ] Comentários diretamente no código

---

## ✅ Critérios de Aceite

- [ ] Comportamento esperado implementado
- [ ] Sem regressões em apps/pacotes impactados
- [ ] Testes cobrindo os principais fluxos
- [ ] Documentação técnica clara e acessível
- [ ] Merge sem conflitos com a `dev`

---

## 🧠 Observações Finais

- Possíveis dúvidas, riscos, dependências externas ou bloqueios
- Sugestões de abordagem, validações extras ou integrações futuras
- Pontos que devem ser revisados no PR (ex: decisões técnicas, desvios do escopo, entregas extras)

---

🔁 **Gatilhos IA (Copilot/ChatGPT)**  
Use os comandos abaixo para automações específicas:

- `@start`: Iniciar fluxo da feature
- `@branch`: Gerar nome da branch
- `@testar`: Planejar e gerar testes
- `@documentar`: Iniciar documentação
- `@commitar`: Gerar commit semântico
- `@pullrequest`: Criar e validar PR
