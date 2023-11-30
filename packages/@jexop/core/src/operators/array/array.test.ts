import { describe, expect, test } from 'vitest';
import { Registry, evaluateRegistry } from '../../evaluate.js';

const registry = new Registry();
registry.addDefaults();

describe('array', () => {
  describe('array:map', () => {
    test('maps array items', () => {
      const expression = {
        op: 'array:map',
        items: [2, 4, 6],
        to: {
          op: 'context',
          path: 'item',
        },
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toStrictEqual([2, 4, 6]);
    });

    test('pass items down the tree', () => {
      const expression = {
        op: 'array:map',
        items: [2, 4, 6],
        to: {
          op: '<',
          left: {
            op: 'context',
            path: 'item',
          },
          right: 5,
        },
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toStrictEqual([true, true, false]);
    });
  });
});
