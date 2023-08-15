import { describe, expect, test } from 'vitest';
import { addOperator } from './add.js';

describe('numeric', () => {
  describe('add', () => {
    test('computes a + b', () => {
      expect(addOperator({ a: 2, b: 3 })).toBe(5);
      expect(addOperator({ b: 3 })).toBe(3);
      expect(addOperator({})).toBe(0);
      expect(addOperator({ a: undefined, b: 2 })).toBe(2);
      expect(addOperator({ a: null, b: 2 })).toBe(2);
      expect(addOperator({ a: '2', b: 3 })).toBe(5);
      expect(addOperator({ a: 'undefined', b: 2 })).toBe(2);
      expect(addOperator({ a: [2], b: 3 })).toBe(4);
      expect(addOperator({ a: 1 })).toBe(1);
      expect(addOperator({ a: 2, b: undefined })).toBe(2);
      expect(addOperator({ a: 2, b: null })).toBe(2);
      expect(addOperator({ a: 2, b: 'undefined' })).toBe(2);
      expect(addOperator({ a: 2, b: [3] })).toBe(3);
    });
  });
});
