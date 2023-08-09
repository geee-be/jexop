import { addOperator } from './add.js';

describe('numeric', () => {
  describe('add', () => {
    it('computes a + b', () => {
      expect(addOperator({ a: 1, b: 2 })).toBe(3);
      expect(addOperator({ b: 2 })).toBe(2);
      expect(addOperator({ a: undefined, b: 2 })).toBe(2);
      expect(addOperator({ a: null, b: 2 })).toBe(2);
      expect(addOperator({ a: '1', b: 2 })).toBe(3);
      expect(addOperator({ a: 'undefined', b: 2 })).toBe(2);
      expect(addOperator({ a: [1], b: 2 })).toBe(3);
      expect(addOperator({ a: 1 })).toBe(1);
      expect(addOperator({ a: 1, b: undefined })).toBe(1);
      expect(addOperator({ a: 1, b: null })).toBe(1);
      expect(addOperator({ a: 1, b: 'undefined' })).toBe(1);
      expect(addOperator({ a: 1, b: [2] })).toBe(3);
    });
  });
});
