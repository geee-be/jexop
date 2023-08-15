import { describe, expect, test } from 'vitest';
import { toDateTime } from './utils.js';

describe('utils', () => {
  describe('toDateTime', () => {
    test('positive cases', () => {
      const date = new Date(1691629840655);
      expect(toDateTime(date)?.toMillis()).toBe(1691629840655);
      expect(toDateTime(1691629840655)?.toMillis()).toBe(1691629840655);
      expect(toDateTime('2023-08-10T13:10:40.655+12:00')?.toMillis()).toBe(1691629840655);
      expect(toDateTime('2023-08-10T01:10:40.655Z')?.toMillis()).toBe(1691629840655);
      expect(
        toDateTime({
          year: 2023,
          month: 8,
          day: 10,
          hour: 1,
          minute: 10,
          second: 40,
          millisecond: 655,
        })?.toMillis(),
      ).toBe(1691629840655);
    });

    test('negative cases', () => {
      expect(toDateTime([1691629840655])).toBeNull();
      expect(toDateTime('f00 bar')).toBeNull();
    });
  });
});
