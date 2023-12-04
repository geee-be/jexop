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
      expect(result).toBe(false);
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
      expect(result).toBe(true);
    });
  });

  describe('nand', () => {
    test('example 1', () => {
      const expression = {
        op: 'nand',
        values: [true, false],
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toBe(true);
    });

    test('example 2', () => {
      const expression = {
        op: 'nand',
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
      expect(result).toBe(false);
    });
  });

  describe('or', () => {
    test('example 1', () => {
      const expression = {
        op: 'or',
        values: [true, false],
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toBe(true);
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
      expect(result).toBe(false);
    });
  });

  describe('nor', () => {
    test('example 1', () => {
      const expression = {
        op: 'nor',
        values: [true, false],
      };
      const result = evaluateRegistry(registry, expression, {});
      expect(result).toBe(false);
    });

    test('example 2', () => {
      const expression = {
        op: 'nor',
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
      expect(result).toBe(true);
    });
  });
});
