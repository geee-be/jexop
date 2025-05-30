import { describe, expect, test } from 'vitest';
import { toDateTime, toDuration } from './utils.js';

describe('utils', () => {
  describe('toDateTime', () => {
    test('positive cases', () => {
      const date = new Date(1691629840655);
      expect(toDateTime(date)?.toMillis()).toBe(1691629840655);
      expect(toDateTime(1691629840655)?.toMillis()).toBe(1691629840655);
      expect(toDateTime('2023-08-10T13:10:40.655+12:00')?.toMillis()).toBe(
        1691629840655,
      );
      expect(toDateTime('2023-08-10T01:10:40.655Z')?.toMillis()).toBe(
        1691629840655,
      );
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

  describe('toDuration', () => {
    test('positive cases', () => {
      expect(toDuration(145)?.toMillis()).toBe(145);
      expect(toDuration('PT5S')?.toMillis()).toBe(5000);
      expect(toDuration('PT5M')?.toMillis()).toBe(300000);
      expect(
        toDuration({
          seconds: 40,
        })?.toMillis(),
      ).toBe(40000);
      expect(toDuration([5, 'secs'])?.toMillis()).toBe(5000);
      expect(toDuration([5, 'Min'])?.toMillis()).toBe(300000);
      expect(toDuration([5, 'hOUrs'])?.toMillis()).toBe(18000000);
      expect(toDuration([5, 'day'])?.toMillis()).toBe(432000000);
      expect(toDuration([5, 'WEEK'])?.toMillis()).toBe(3024000000);
    });

    test('negative cases', () => {
      expect(toDuration([1691629840655])).toBeNull();
      expect(toDuration('f00 bar')).toBeNull();
      expect(toDuration([5, 4, 'secs'])).toBeNull();
      expect(toDuration([5, 'month'])).toBeNull();
    });
  });
});
