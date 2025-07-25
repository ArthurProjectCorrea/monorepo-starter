---
title: Exemplo de Teste E2E
---

# Exemplo de Teste E2E

Veja um exemplo real de teste E2E para API (NestJS):

```ts
// apps/api/test/app.e2e-spec.ts
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
  });
});
```

Veja mais exemplos em `apps/api/test/` e `apps/web/src/`.
