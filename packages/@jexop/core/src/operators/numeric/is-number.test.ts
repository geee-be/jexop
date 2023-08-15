import { describe, expect, test } from 'vitest';
import { isNumberOperator } from './is-number.js';

describe('numeric', () => {
  describe('is-number', () => {
    test('is true for number', () => {
      expect(isNumberOperator({ value: 1 })).toBeTruthy();
    });

    test('returns null for any non-numeric input', () => {
      expect(isNumberOperator({ value: 'foobar' })).toBeFalsy();
      expect(isNumberOperator({ value: { b: 2 } })).toBeFalsy();
      expect(isNumberOperator({ value: [1] })).toBeFalsy();
      expect(isNumberOperator({ value: undefined })).toBeFalsy();
      expect(isNumberOperator({ value: null })).toBeFalsy();
      expect(isNumberOperator({ value: Number.NaN })).toBeFalsy();
      expect(isNumberOperator({ value: Number.POSITIVE_INFINITY })).toBeFalsy();
      expect(isNumberOperator({ value: Number.NEGATIVE_INFINITY })).toBeFalsy();
    });
  });
});
