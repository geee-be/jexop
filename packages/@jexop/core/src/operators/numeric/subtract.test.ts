import { describe, expect, test } from 'vitest';
import { subtractOperator } from './subtract.js';

describe('numeric', () => {
  describe('subtract', () => {
    test('computes a - b', () => {
      expect(subtractOperator({ a: 1, b: 2 })).toBe(-1);
      expect(subtractOperator({ b: 2 })).toBe(-2);
      expect(subtractOperator({ a: undefined, b: 2 })).toBe(-2);
      expect(subtractOperator({ a: null, b: 2 })).toBe(-2);
      expect(subtractOperator({ a: '1', b: 2 })).toBe(-1);
      expect(subtractOperator({ a: 'undefined', b: 2 })).toBe(-2);
      expect(subtractOperator({ a: [4], b: 2 })).toBe(-1);
      expect(subtractOperator({ a: 1 })).toBe(1);
      expect(subtractOperator({ a: 1, b: undefined })).toBe(1);
      expect(subtractOperator({ a: 1, b: null })).toBe(1);
      expect(subtractOperator({ a: 1, b: 'undefined' })).toBe(1);
      expect(subtractOperator({ a: 1, b: [4] })).toBe(0);
    });
  });
});
