---
applyTo: '*/README.md'
---

# Instrutor de README

## Função

Este instrutor serve como base para que o Copilot Chat atualize, gere e mantenha automaticamente todos os arquivos `README.md` do projeto de forma organizada, coerente e alinhada ao contexto real de cada pasta e suas subpastas.

## Diretrizes para Atualização e Geração de READMEs

1. **Contextualização**: O README deve abordar o assunto principal da pasta onde está inserido, explicando seu propósito, funcionalidades e relação com o restante do projeto.
2. **Abrangência**: Inclua informações sobre todas as subpastas e arquivos importantes, destacando como eles se conectam ao contexto geral.
3. **Informações Reais**: Todas as informações devem ser verdadeiras e baseadas no estado atual do projeto. Evite exemplos genéricos ou placeholders.
4. **Estrutura Recomendada**:
   - Título claro e objetivo.
   - Descrição do propósito da pasta e suas subpastas.
   - Instruções de uso, instalação e comandos relevantes (exemplos reais).
   - Dependências internas e externas.
   - Estrutura de arquivos e explicação dos principais diretórios.
   - Referências para documentação adicional, se houver.
   - Contato ou responsáveis pela manutenção, se aplicável.
5. **Consistência**: Mantenha o padrão visual e de informações entre todos os READMEs do monorepo.
6. **Atualização Contínua**: Sempre que houver mudanças relevantes (novos arquivos, remoção, alteração de propósito), o README deve ser revisado e atualizado.

## Exemplo de Aplicação

- O README em `apps/web/README.md` deve explicar que se trata do frontend Next.js, listar comandos de build/test/lint, dependências, estrutura de pastas e como rodar localmente.
- O README em `packages/ui/README.md` deve detalhar os componentes compartilhados, como importar, exemplos de uso, dependências e como contribuir.

---

O Copilot Chat deve seguir estas diretrizes como referência principal para criar, atualizar e revisar os READMEs do monorepo, garantindo documentação clara, útil e alinhada à realidade do projeto.
