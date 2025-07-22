import { describe, it, expect } from 'vitest';
import { Card } from './card';

// Teste básico para garantir que o componente Card pode ser importado

describe('Card', () => {
  it('deve ser uma função', () => {
    expect(typeof Card).toBe('function');
  });
});
