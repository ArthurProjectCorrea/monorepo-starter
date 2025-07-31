---
applyTo: 'apps/docs/**'
---

# Guia Prático: Componentes Starlight/Astro em MDX

Este tutorial mostra como importar, usar e combinar os principais componentes nativos do Starlight/Astro em `.mdx`, com exemplos claros e foco em sintaxe correta e padrão visual.

## 1. Importação

Sempre importe os componentes no início do arquivo:

```mdx
import {
  Icon,
  Card,
  LinkCard,
  CardGrid,
  Aside,
  Badge,
  Code,
  FileTree,
  LinkButton,
  Steps,
  Tabs,
  TabItem,
} from '@astrojs/starlight/components';

;
```

Para componentes próprios:

```mdx
import MeuComponente from '../../components/MeuComponente.astro';

;
```

## 2. Boas Práticas Gerais

- Use componentes nativos sempre que possível.
- Prefira caminhos relativos para componentes próprios.
- Use `label` em ícones para acessibilidade.
- Use a classe `not-content` para evitar estilos padrão:
  ```astro
  <div class="not-content">Conteúdo sem estilo padrão.</div>
  ```
- Não repita imports ou componentes desnecessários.
- Sempre confira a sintaxe: componentes iniciam com maiúscula e são usados como tags JSX.
- Não esqueça do frontmatter:
  ```mdx
  ---
  title: Título da Página
  ---
  ```

## 3. Exemplos de Uso

### Ícone

```mdx
<Icon name="star" label="Estrela" size="2rem" color="goldenrod" />
```

### Card e LinkCard

```mdx
<Card title="Título" icon="star">
  Conteúdo
</Card>
<LinkCard title="Guia" href="/guia/" description="Descrição opcional." />
```

### CardGrid

```mdx
<CardGrid>
  <Card title="A">A</Card>
  <Card title="B">B</Card>
</CardGrid>
<CardGrid stagger>
  <LinkCard title="Doc" href="/doc/" />
  <LinkCard title="API" href="/api/" />
</CardGrid>
```

### Aside

```mdx
<Aside type="caution" title="Cuidado!" icon="warning">
  Mensagem customizada.
</Aside>
```

### Badge

```mdx
<Badge text="Novo" variant="success" size="small" />
```

### Code

```mdx
<Code code={`console.log('Olá mundo!')`} lang="js" title="Exemplo" />
```

### FileTree

```mdx
<FileTree>- src - components - **Header.astro** arquivo principal - ...</FileTree>
```

### LinkButton

```mdx
<LinkButton href="/start" icon="rocket" iconPlacement="start">
  Comece
</LinkButton>
```

### Steps

```mdx
<Steps>
  1. Importe o componente.
  2. Envolva sua lista ordenada com `<Steps>`.
</Steps>
```

### Tabs

```mdx
<Tabs syncKey="exemplo">
  <TabItem label="Opção 1" icon="star">
    Conteúdo 1
  </TabItem>
  <TabItem label="Opção 2" icon="moon">
    Conteúdo 2
  </TabItem>
</Tabs>
```

## 4. Resumo de Props Úteis

- Ícone: `name`, `label`, `size`, `color`, `class`
- Card: `title` (obrigatório), `icon`
- LinkCard: `title`, `href` (obrigatórios), `description`
- CardGrid: `stagger` (opcional)
- Aside: `type`, `title`, `icon`
- Badge: `text` (obrigatório), `variant`, `size`
- Code: `code` (obrigatório), `lang`, `title`, `mark`
- LinkButton: `href` (obrigatório), `variant`, `icon`, `iconPlacement`
- Steps: sem props, apenas envolve lista ordenada
- Tabs: `syncKey` (opcional); TabItem: `label` (obrigatório), `icon`
- FileTree: apenas conteúdo em lista Markdown

---

> Use este guia como referência rápida para evitar erros de sintaxe e manter o padrão visual do projeto.
