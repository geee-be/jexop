import { DateTime } from 'luxon';
import { describe, expect, test } from 'vitest';
import { ageOperator } from './age.js';

describe('ageOperator', () => {
  test('returns positive duration for timestamps in the past', () => {
    expect(
      ageOperator({
        timestamp: DateTime.now().minus({ minutes: 1 }),
      })?.toMillis(),
    ).toBeGreaterThan(0);
  });
});
