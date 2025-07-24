---
title: Pacote UI — Componentes React
---

import { CardGrid, Card, Badge } from '@astrojs/starlight/components';

# Pacote UI — Componentes React

Biblioteca de componentes React compartilhados, pronta para uso em apps Next.js e outros projetos do monorepo.

<CardGrid>
  <Card title="Card" icon="layers">
    Componente visual para destacar informações. <Badge variant="tip">Stable</Badge>
  </Card>
  <Card title="Button" icon="bolt">
    Botão estilizado e acessível. <Badge variant="beta">Beta</Badge>
  </Card>
  <Card title="Input" icon="edit">
    Campo de entrada customizável. <Badge variant="experimental">Experimental</Badge>
  </Card>
</CardGrid>

## Principais recursos

- Componentes reutilizáveis, tipados e testados
- Integração com TailwindCSS
- Pronto para SSR/SSG

## Exemplo de uso

```tsx title="Exemplo de uso do Card"
import { Card } from '@repo/ui';

<Card title="Exemplo" />;
```

Consulte o [README do pacote](../../../packages/ui/README.md) para detalhes técnicos.
