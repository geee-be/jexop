import { DateTime, Settings } from 'luxon';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { endOfNowOperator, startOfNowOperator } from './bounds.js';

const fixedMillis = DateTime.fromISO('2023-08-10T13:10:40.655Z').toMillis();
let originalNow: typeof Settings.now;
let originalZone: typeof Settings.defaultZone;

beforeAll(() => {
  originalNow = Settings.now;
  originalZone = Settings.defaultZone;
  Settings.now = () => fixedMillis;
  Settings.defaultZone = 'UTC';
});

afterAll(() => {
  Settings.now = originalNow;
  Settings.defaultZone = originalZone;
});

describe('bounds', () => {
  test('startOfNowOperator returns the start of the provided unit', () => {
    const now = DateTime.now();
    const units = ['hour', 'day', 'week', 'month', 'year'] as const;
    for (const unit of units) {
      expect(startOfNowOperator({ unit })?.toMillis()).toBe(
        now.startOf(unit).toMillis(),
      );
    }
  });

  test('endOfNowOperator returns the end of the provided unit', () => {
    const now = DateTime.now();
    const units = ['hour', 'day', 'week', 'month', 'year'] as const;
    for (const unit of units) {
      expect(endOfNowOperator({ unit })?.toMillis()).toBe(
        now.endOf(unit).toMillis(),
      );
    }
  });

  test('operators accept plural units', () => {
    expect(startOfNowOperator({ unit: 'hours' })?.toMillis()).toBe(
      DateTime.now().startOf('hour').toMillis(),
    );
    expect(endOfNowOperator({ unit: 'months' })?.toMillis()).toBe(
      DateTime.now().endOf('month').toMillis(),
    );
  });

  test('operators return null for invalid units', () => {
    expect(startOfNowOperator({ unit: 'quarter' })).toBeNull();
    expect(endOfNowOperator({ unit: 3 })).toBeNull();
  });
});
