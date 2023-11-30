import { describe, expect, test } from 'vitest';
import { Registry, evaluateRegistry } from '../../evaluate.js';

const registry = new Registry();
registry.addDefaults();

describe('object', () => {
  describe('keys', () => {
    test('extracts keys without path', () => {
      const expression = {
        op: 'object:keys',
        object: {
          foo: 12,
          bar: 17,
        },
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toStrictEqual(['foo', 'bar']);
    });

    test('extracts keys with path', () => {
      const expression = {
        op: 'object:keys',
        path: 'foo',
        object: {
          foo: {
            bar: 17,
          },
        },
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toStrictEqual(['bar']);
    });
  });
});
