import { numberOperator } from './number.js';

describe('numeric', () => {
  describe('is-number', () => {
    it('convert to number', () => {
      expect(numberOperator({ value: 17 })).toBe(17);
      expect(numberOperator({ value: '123' })).toBe(123);
      expect(numberOperator({ value: [12, 1, 3] })).toBe(3);
    });

    it('returns null for any non-numeric (convertible) input', () => {
      expect(numberOperator({ value: 'foobar' })).toBeNull();
      expect(numberOperator({ value: { b: 2 } })).toBeNull();
      expect(numberOperator({ value: ['bar'] })).toBeNull();
      expect(numberOperator({ value: undefined })).toBeNull();
      expect(numberOperator({ value: null })).toBeNull();
      expect(numberOperator({ value: Number.NaN })).toBeNull();
      expect(numberOperator({ value: Number.POSITIVE_INFINITY })).toBeNull();
      expect(numberOperator({ value: Number.NEGATIVE_INFINITY })).toBeNull();
    });

    it('applies default to non-numeric (convertible) input', () => {
      expect(numberOperator({ value: 'foobar', default: 99 })).toBe(99);
      expect(numberOperator({ value: { b: 2 }, default: 99 })).toBe(99);
      expect(numberOperator({ value: ['bar'], default: 99 })).toBe(99);
      expect(numberOperator({ value: undefined, default: 99 })).toBe(99);
      expect(numberOperator({ value: null, default: 99 })).toBe(99);
      expect(numberOperator({ value: Number.NaN, default: 99 })).toBe(99);
      expect(numberOperator({ value: Number.POSITIVE_INFINITY, default: 99 })).toBe(99);
      expect(numberOperator({ value: Number.NEGATIVE_INFINITY, default: 99 })).toBe(99);
    });
  });
});
