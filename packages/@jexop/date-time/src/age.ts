import type { Operator } from '@jexop/core';
import { DateTime, type Duration } from 'luxon';
import { toDateTime, toDuration } from './utils.js';

const ageComparisonOperator =
  (comparison: (value: DateTime, duration: Duration) => boolean): Operator<boolean> =>
  ({ timestamp, age }) => {
    const dateTime = toDateTime(timestamp);
    const duration = toDuration(age);
    if (dateTime === null || duration === null) return null;

    return comparison(dateTime, duration);
  };

export const beforePast = ageComparisonOperator((value, duration) => value < DateTime.now().minus(duration));
export const afterPast = ageComparisonOperator((value, duration) => value > DateTime.now().minus(duration));
export const beforeFuture = ageComparisonOperator((value, duration) => value < DateTime.now().plus(duration));
export const afterFuture = ageComparisonOperator((value, duration) => value > DateTime.now().plus(duration));

export const ageOperator: Operator<Duration> = ({ timestamp }) => {
  const dateTime = toDateTime(timestamp);
  if (dateTime === null) return null;

  return dateTime.diffNow().negate();
};
