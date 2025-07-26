---
applyTo: '**'
---

# Fluxo Oficial de Documentação — apps/docs (Astro + Starlight)

Este arquivo define o fluxo detalhado para criação, revisão e atualização da documentação técnica interna do monorepo em `apps/docs`, seguindo padrões Astro + Starlight e as melhores práticas centralizadas em `.github/instructions/docs.instructions.md`.

> **Atenção:** Para garantir padronização, clareza, exemplos reais e uso correto dos recursos do Starlight/Astro, consulte SEMPRE os instrutores modulares abaixo durante o fluxo:
>
> - **Onboarding e primeiros passos:** [`docs-start-here.instructions.md`](docs-start-here.instructions.md)
> - **Componentes nativos:** [`docs-components.instructions.md`](docs-components.instructions.md)
> - **Guias técnicos:** [`docs-guides.instructions.md`](docs-guides.instructions.md)
> - **Referência de configuração:** [`docs-reference.instructions.md`](docs-reference.instructions.md)
> - **Centralizador e resumo:** [`docs.instructions.md`](docs.instructions.md)
>
> Utilize o instrutor correspondente em cada etapa para detalhes técnicos, exemplos, padrões visuais e melhores práticas. O centralizador (`docs.instructions.md`) resume e conecta todos os demais.

---

## 1. Estrutura e Organização

- Toda documentação deve ser criada/atualizada em `apps/docs/src/content/docs/`.
- Organize por escopo principal:
  - `monorepo/` — visão geral, arquitetura, integração entre apps/pacotes.
  - `api/` — backend (NestJS).
  - `web/` — frontend (Next.js).
  - `packages/` — pacotes compartilhados (`ui/`, `config/`, etc).
  - `ui/` — componentes React reutilizáveis.
  - `github/` — automações, workflows e configs do repositório.
- Cada escopo deve ter uma página central (`index.mdx`) com tópicos claros, exemplos reais e links para subpáginas detalhadas.

---

## 2. Fluxo de Documentação (Passo a Passo)

Antes de criar, revisar ou atualizar qualquer documentação:

- Consulte a documentação existente para o arquivo/pasta.
- Se já existir, valide se está atualizada e alinhada ao objetivo/contexto atual.
- Se houver divergências, corrija e atualize para garantir precisão e completude.

Siga este fluxo sempre que for documentar um arquivo, pasta ou recurso:

1. Crie ou atualize a documentação detalhada do arquivo/pasta, seguindo as práticas do Astro/Starlight e as instruções modulares (`docs-start-here`, `docs-components`, `docs-guides`, `docs-reference`).
2. Informe sempre o(s) nome(s) dos arquivos MDX criados/atualizados.
3. Atualize a sidebar para garantir que todos os arquivos estejam representados e acessíveis na navegação.
4. Cada página deve abordar:
   - Visão geral do módulo/recurso.
   - Como usar e integrar (exemplos reais).
   - Como estender/adaptar (hooks, middlewares, componentes, etc).
   - Boas práticas de manutenção, performance, acessibilidade e integração.
   - Dependências e recursos relacionados.
   - Funcionalidades dependentes e integrações entre apps/pacotes.
   - Referências cruzadas para docs de outros módulos.
5. Priorize componentes nativos do Astro/Starlight para enriquecer a interface (Cards, Asides, Code, FileTree, Steps, etc).
6. Só utilize componentes personalizados se os nativos não atenderem à necessidade visual ou de usabilidade.
7. Sempre use exemplos reais do projeto, nunca fictícios.

---

## 3. Qualidade Visual e Padrão

- Clareza e concisão, com tópicos bem definidos.
- Uso de componentes visuais sempre que possível.
- Organização por escopo e modularidade: cada tema em seu próprio arquivo.
- Atualize sumários, índices e navegação ao criar/alterar docs.
- Use frontmatter com `title` e `description` em todas as páginas.
- Importe componentes nativos no início do arquivo.
- Use caminhos relativos ou aliases (`@/`) para imports.

---

## 4. Sidebar e Navegação

- Sidebar é gerada pela estrutura de pastas/títulos, mas pode ser customizada via frontmatter ou `astro.config.mjs`.
- Garanta que toda nova página esteja representada na navegação.
- Use badges, ordem e agrupamentos para destacar novidades ou tópicos importantes.

---

## 5. Internacionalização (i18n)

- Estruture docs multilíngues em subpastas (`en/`, `pt-BR/`).
- Traduções de UI ficam em `src/content/i18n/`.
- Configure idiomas no bloco `starlight` do `astro.config.mjs`.

---

## 6. Customização, Plugins e Dados Dinâmicos

- Para sobrescrever componentes nativos, use o campo `components` em `astro.config.mjs`.
- Adicione CSS customizado em `src/styles/` e use Tailwind conforme padrão do monorepo.
- Para busca, use Pagefind (padrão) ou Algolia DocSearch via plugin.
- Para acessar dados da página/rota atual, use `Astro.locals.starlightRoute` em componentes Astro.
- Para lógica global, crie um middleware em `src/routeData.ts` e registre em `astro.config.mjs`.

---

## 7. Exemplo de Estrutura Recomendada

```
src/content/docs/
  monorepo/
    index.mdx         # visão geral do monorepo
    arquitetura.mdx   # detalhes de arquitetura
  api/
    index.mdx         # docs do backend NestJS
    rotas.mdx         # exemplos de rotas reais
  web/
    index.mdx         # docs do frontend Next.js
    pages.mdx         # exemplos de páginas reais
  packages/
    config/
      index.mdx       # docs de configs compartilhadas
    ui/
      index.mdx       # docs dos componentes React
  github/
    index.mdx         # docs de automações e workflows
```

---

> Siga este fluxo e consulte SEMPRE os instrutores modulares para garantir que a documentação interna do monorepo seja clara, conectada, profissional e fácil de evoluir para todos os desenvolvedores.
