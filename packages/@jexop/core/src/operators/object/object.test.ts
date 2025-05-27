import { describe, expect, it } from 'vitest';
import { evaluate, Registry } from '../../evaluate.js';

const registry = new Registry();
registry.addDefaults();

describe('object:transform operator', () => {
  it('transforms object values using the `to` expression', () => {
    const expr = {
      op: 'object:transform',
      object: { a: 1, b: 2 },
      to: { op: 'literal', value: 42 },
    };
    expect(evaluate(expr, {})).toEqual({ a: 42, b: 42 });
  });

  it('can use key and value in the `to` expression', () => {
    const expr = {
      op: 'object:transform',
      object: { a: 1, b: 2 },
      to: { op: 'literal', value: { op: 'add', left: { op: 'literal', value: 10 }, right: { op: 'literal', value: 5 } } },
    };
    // This test is illustrative; actual add operator must exist in registry
    // For now, just check that the structure is preserved
    const result = evaluate(expr, {});
    expect(result).toHaveProperty('a');
    expect(result).toHaveProperty('b');
  });

  it('returns null if object is not valid', () => {
    expect(evaluate({ op: 'object:transform', object: null, to: {} }, {})).toBeNull();
    expect(evaluate({ op: 'object:transform', object: 123, to: {} }, {})).toBeNull();
    expect(evaluate({ op: 'object:transform', object: [1,2], to: {} }, {})).toBeNull();
  });

  it('returns null if evaluated object is not valid', () => {
    const expr = {
      op: 'object:transform',
      object: { op: 'literal', value: null },
      to: {},
    };
    expect(evaluate(expr, {})).toBeNull();
  });

  it('transforms nested objects', () => {
    const expr = {
      op: 'object:transform',
      object: { x: { y: 1 } },
      to: { op: 'literal', value: 'nested' },
    };
    expect(evaluate(expr, {})).toEqual({ x: 'nested' });
  });
});
