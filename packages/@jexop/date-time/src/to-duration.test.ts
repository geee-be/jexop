import { Duration } from 'luxon';
import { describe, expect, it } from 'vitest';
import { toDurationOperator } from './to-duration.js';

describe('toDurationOperator', () => {
  it('returns null for null/undefined/invalid', () => {
    expect(toDurationOperator(null)).toBeNull();
    expect(toDurationOperator(undefined)).toBeNull();
    expect(toDurationOperator([])).toBeNull();
    expect(toDurationOperator({})).not.toBeNull(); // object returns Duration
  });

  it('returns Duration for Duration input', () => {
    const d = Duration.fromObject({ hours: 1 });
    expect(toDurationOperator(d)).toEqual(d);
  });

  it('returns Duration for number (ms)', () => {
    const ms = 60000;
    expect(toDurationOperator(ms)?.as('minutes')).toBe(1);
  });

  it('returns Duration for ISO string', () => {
    const iso = 'PT1H';
    expect(toDurationOperator(iso)?.as('hours')).toBe(1);
  });

  it('returns Duration for [qty, unit] array', () => {
    expect(toDurationOperator([2, 'hours'])?.as('hours')).toBe(2);
    expect(toDurationOperator([30, 'minutes'])?.as('minutes')).toBe(30);
    expect(toDurationOperator([1, 'days'])?.as('days')).toBe(1);
    expect(toDurationOperator([3, 'weeks'])?.as('weeks')).toBe(3);
    expect(toDurationOperator([100, 'millis'])?.as('milliseconds')).toBe(100);
    expect(toDurationOperator([1, 'invalid'])).toBeNull();
    expect(toDurationOperator([1])).toBeNull();
    expect(toDurationOperator(['a', 'hours'])).toBeNull();
  });

  it('returns Duration for object', () => {
    expect(toDurationOperator({ hours: 2 })?.as('hours')).toBe(2);
    expect(toDurationOperator({ minutes: 90 })?.as('minutes')).toBe(90);
  });
});
