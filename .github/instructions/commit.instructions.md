---
applyTo: '**'
---

# 📘 **Instrutor Profissional de Commits Convencionais para Chat Copilot**

> **Este instrutor é direcionado ao Chat Copilot e a qualquer agente automatizado de commit deste repositório. Todas as regras, exemplos e fluxos aqui descritos devem ser seguidos rigorosamente por qualquer automação de commit, revisão ou sugestão de mensagem de commit.**

**Objetivo:** Padronizar a escrita de commits para garantir clareza, rastreabilidade, integração com ferramentas de CI/CD e histórico limpo, sempre mediada pelo Chat Copilot.

## 📌 ESTRUTURA GERAL (USO OBRIGATÓRIO PELO CHAT COPILOT)

```bash
<tipo>[ escopo opcional]: <descrição curta>
```

### ✅ Regras (Chat Copilot deve sempre aplicar):

- A **primeira linha** deve ter **máximo de 72 caracteres**.
- Use o **imperativo presente** (ex: _"corrige erro"_, e não _"corrigido"_ ou _"corrigindo"_).
- Nunca termine o título com ponto final.
- Use escopo em parênteses se desejar especificar o módulo afetado.
- Adicione uma **descrição detalhada** no corpo (opcional, mas recomendado).
- Referencie **issues e PRs** se aplicável.

---

## 🎯 TIPOS DE COMMIT (Chat Copilot: utilize sempre o tipo correto)

| Tipo       | Uso recomendado                                   |
| ---------- | ------------------------------------------------- |
| `feat`     | Adição de nova feature funcional                  |
| `fix`      | Correção de bug/erro                              |
| `docs`     | Alterações na documentação                        |
| `style`    | Mudanças de formatação (sem alterar lógica)       |
| `refactor` | Refatoração sem alterar comportamento externo     |
| `perf`     | Melhoria de performance                           |
| `test`     | Adição ou alteração de testes                     |
| `chore`    | Tarefas internas ou manutenção (ex: build, CI)    |
| `revert`   | Reversão de commit anterior                       |
| `ci`       | Alterações nos arquivos de CI/CD                  |
| `build`    | Alterações em dependências, build ou package.json |

---

## 💡 OCASIÕES COMUNS E EXEMPLOS DE COMMIT (Chat Copilot: siga estes padrões)

### 1. ✅ **Nova feature**

```bash
feat(auth): adiciona login com Google
```

> Quando uma nova funcionalidade é implementada.

---

### 2. 🐛 **Correção de bug**

```bash
fix(user): corrige erro ao atualizar e-mail do usuário
```

> Para qualquer correção de comportamento quebrado no sistema.

---

### 3. 📝 **Documentação**

```bash
docs(readme): adiciona instruções de setup no README
```

> Sempre que alterar arquivos `.md` ou `.mdx`, comentários de código, ou gerar documentação automática.

---

### 4. 🎨 **Melhoria de código sem impacto funcional**

```bash
style(app): ajusta indentação e formata código com Prettier
```

> Sem alteração de lógica; apenas estilo, espaços, vírgulas, etc.

---

### 5. ♻️ **Refatoração**

```bash
refactor(api): separa lógica de autenticação em serviço dedicado
```

> Melhora interna sem alteração de comportamento.

---

### 6. 🧪 **Testes**

```bash
test(product): adiciona testes unitários para método calculatePrice
```

> Quando adicionar, corrigir ou remover testes.

---

### 7. 🚧 **Correção de erros em PR**

```bash
fix(pr): ajusta testes quebrados após mudança no controller de produtos
```

> Correções após revisão ou execução dos testes CI.

---

### 8. 🔗 **Relacionamento com issues**

```bash
feat(post): permite editar postagens existentes

Closes #123
```

> Use `Closes`, `Fixes` ou `Resolves` para fechar issues automaticamente.

---

### 9. 🔄 **Reversão de commit**

```bash
revert: remove suporte a múltiplos idiomas por problemas de compatibilidade

Reverts commit 1a2b3c4d
```

---

### 10. 🧹 **Tarefas administrativas**

```bash
chore(deps): atualiza dependências do projeto
```

> Sem impacto direto no app: dependências, limpeza, scripts auxiliares, etc.

---

### 11. 📦 **Build/Empacotamento**

```bash
build(api): adiciona configuração do Docker para o ambiente de produção
```

---

### 12. ⚙️ **CI/CD**

```bash
ci(github): adiciona step de cache ao workflow de build
```

---

### 13. 🚑 **Hotfix emergencial**

```bash
fix(security): remove rota pública indevida temporariamente
```

> Correções urgentes em produção.

---

## 🧭 BOAS PRÁTICAS GERAIS (Chat Copilot: sempre siga estas recomendações)

- Use commits pequenos e frequentes. Prefira granularidade.
- Se um commit resolve **mais de uma coisa**, divida-o.
- **Commits automáticos** (ex: dependabot, versão) devem ser controlados.
- Use tags como `BREAKING CHANGE:` no corpo, quando necessário.
- Documente bem commits que afetam outros times ou pacotes.

---

## 🧾 EXEMPLOS AVANÇADOS COM CORPO E ISSUE (Chat Copilot: use como referência)

```bash
feat(auth): adiciona autenticação com token JWT

- Implementa geração e validação de tokens JWT
- Atualiza o serviço de login para suportar autenticação stateless
- Altera o middleware de autorização

Closes #45
```

```bash
fix(product): corrige erro ao calcular total de pedidos

O erro acontecia quando o produto tinha desconto acumulado.
Adicionada verificação de tipo e fallback padrão para `price`.

Refs: #78, PR #120
```

---

## 🛑 A EVITAR (Chat Copilot: nunca utilize estes exemplos ou práticas)

| Mau exemplo                     | Correto                                            |
| ------------------------------- | -------------------------------------------------- |
| "arrumei tudo"                  | `fix(order): corrige cálculo de frete no checkout` |
| "criei tela"                    | `feat(ui): adiciona tela de cadastro de usuário`   |
| "melhorias gerais"              | Refatore e separe em múltiplos commits claros      |
| "commit final" / "final versão" | Utilize um `chore: finaliza etapa X` com descrição |
| "atualizações diversas"         | Divida por tipo e escopo                           |

---

## 🤖 ORIENTAÇÃO GERAL PARA O CHAT COPILOT (OBRIGATÓRIO)

**Este instrutor se aplica a todo e qualquer commit realizado via Chat Copilot.**

---

## 🛠️ Orientação prática para rastreabilidade e verificação de alterações

Antes de realizar qualquer commit automatizado, o Chat Copilot deve SEMPRE:

1. Executar comandos git para identificar o que foi alterado, por exemplo:
   - `git status` — para listar arquivos modificados, adicionados ou removidos.
   - `git diff` — para visualizar as diferenças detalhadas dos arquivos alterados.
   - `git diff --cached` — para revisar o que está staged antes do commit.
   - `git log -p` — para histórico detalhado se necessário.
2. Utilizar essas informações para:
   - Agrupar arquivos por assunto e tipo de modificação, conforme as regras deste instrutor.
   - Garantir que nenhum arquivo relevante fique de fora do commit.
   - Documentar no corpo do commit, se necessário, comandos ou hashes relevantes para rastreabilidade.

> **Exemplo prático:**
>
> Antes de commitar, rode `git status` e `git diff` para garantir que todos os arquivos alterados estão corretamente agrupados e descritos no commit. Isso aumenta a rastreabilidade e facilita auditorias futuras.

---

Sempre que o usuário solicitar "faça o commit para o github" ou qualquer ação de commit automatizado, o Chat Copilot deve:

1. **Verificar todos os arquivos modificados** no repositório.
2. **Agrupar os arquivos por assunto**: arquivos que fazem parte de uma mesma implementação (ex: sistema de autenticação, feature de posts, refatoração de um módulo, etc) devem ser identificados e agrupados juntos.
3. **Dentro de cada grupo de assunto, separar por tipo de modificação**: por exemplo, arquivos de documentação (`docs`), implementação de feature (`feat`), tarefas administrativas (`chore`), testes (`test`), etc.
4. **Criar um commit para cada grupo de assunto e tipo**: cada commit deve conter apenas arquivos relacionados ao mesmo assunto e tipo de modificação, seguindo as regras deste instrutor.
5. **Repetir o processo até que todos os arquivos estejam devidamente commitados**.

> Isso garante granularidade, rastreabilidade e clareza no histórico do projeto, além de facilitar revisões e integrações contínuas.

**Exemplo de fluxo:**

- Implementou um sistema de autenticação? Agrupe todos os arquivos dessa feature e separe commits para `feat`, `docs`, `test` etc, conforme necessário.
- Atualizou documentação de múltiplos módulos? Separe por assunto (ex: docs de autenticação, docs de UI) e depois por tipo.

**Nunca faça um commit único com arquivos de assuntos ou tipos diferentes!**

---

> **Resumindo:** Todo o conteúdo deste instrutor é de aplicação obrigatória para o Chat Copilot e qualquer automação de commit neste repositório. Não ignore, adapte ou flexibilize nenhuma regra sem autorização explícita do mantenedor.
