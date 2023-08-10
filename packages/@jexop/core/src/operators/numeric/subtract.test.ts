import { subtractOperator } from './subtract.js';

describe('numeric', () => {
  describe('subtract', () => {
    it('computes a - b', () => {
      expect(subtractOperator({ a: 1, b: 2 })).toBe(-1);
      expect(subtractOperator({ b: 2 })).toBe(-2);
      expect(subtractOperator({ a: undefined, b: 2 })).toBe(-2);
      expect(subtractOperator({ a: null, b: 2 })).toBe(-2);
      expect(subtractOperator({ a: '1', b: 2 })).toBe(-1);
      expect(subtractOperator({ a: 'undefined', b: 2 })).toBe(-2);
      expect(subtractOperator({ a: [1], b: 2 })).toBe(-1);
      expect(subtractOperator({ a: 1 })).toBe(1);
      expect(subtractOperator({ a: 1, b: undefined })).toBe(1);
      expect(subtractOperator({ a: 1, b: null })).toBe(1);
      expect(subtractOperator({ a: 1, b: 'undefined' })).toBe(1);
      expect(subtractOperator({ a: 1, b: [2] })).toBe(-1);
    });
  });
});
