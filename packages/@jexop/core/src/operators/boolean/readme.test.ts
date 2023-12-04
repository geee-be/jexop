import { describe, expect, test } from 'vitest';
import { Registry, evaluateRegistry } from '../../evaluate.js';

const registry = new Registry();
registry.addDefaults();

describe('boolean', () => {
  describe('and', () => {
    test('example 1', () => {
      const expression = {
        op: 'and',
        values: [true, false],
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toStrictEqual(false);
    });

    test('example 2', () => {
      const expression = {
        op: 'and',
        values: [
          true,
          {
            op: '=',
            a: 100,
            b: {
              op: 'plus',
              a: 1,
              b: 99,
            },
          },
        ],
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toStrictEqual(true);
    });
  });

  describe('or', () => {
    test('example 1', () => {
      const expression = {
        op: 'or',
        values: [true, false],
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toStrictEqual(true);
    });

    test('example 2', () => {
      const expression = {
        op: 'or',
        values: [
          false,
          {
            op: '!=',
            a: 100,
            b: {
              op: 'plus',
              a: 1,
              b: 99,
            },
          },
        ],
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toStrictEqual(false);
    });
  });
});
