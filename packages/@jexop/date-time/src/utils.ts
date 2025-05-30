import { DateTime, Duration } from 'luxon';

const fixDateTime = (value: DateTime): DateTime | null =>
  value.isValid ? value : null;

export const toDateTime = (value: unknown): DateTime | null => {
  if (!value) return null;
  if (value instanceof DateTime) return fixDateTime(value);
  if (value instanceof Date) return fixDateTime(DateTime.fromJSDate(value));
  if (typeof value === 'number') return fixDateTime(DateTime.fromMillis(value));
  if (typeof value === 'string') return fixDateTime(DateTime.fromISO(value));
  if (Array.isArray(value)) return null;
  if (typeof value === 'object')
    return fixDateTime(DateTime.fromObject(value, { zone: 'UTC' }));
  return null;
};

const fixDuration = (value: Duration): Duration | null =>
  value.isValid ? value : null;

export const toDuration = (value: unknown): Duration | null => {
  if (!value) return null;
  if (value instanceof Duration) return fixDuration(value);
  if (typeof value === 'number') return fixDuration(Duration.fromMillis(value));
  if (typeof value === 'string') return fixDuration(Duration.fromISO(value));
  if (Array.isArray(value)) {
    if (value.length !== 2) return null;
    const [qty, unit] = value as [unknown, unknown];
    if (typeof qty !== 'number' || typeof unit !== 'string') return null;

    switch (unit.toLowerCase()) {
      case 'ms':
      case 'millis':
      case 'millisecond':
      case 'milliseconds':
        return fixDuration(Duration.fromMillis(qty));
      case 'sec':
      case 'secs':
      case 'second':
      case 'seconds':
        return fixDuration(Duration.fromObject({ seconds: qty }));
      case 'min':
      case 'mins':
      case 'minute':
      case 'minutes':
        return fixDuration(Duration.fromObject({ minutes: qty }));
      case 'h':
      case 'hr':
      case 'hrs':
      case 'hour':
      case 'hours':
        return fixDuration(Duration.fromObject({ hours: qty }));
      case 'd':
      case 'day':
      case 'days':
        return fixDuration(Duration.fromObject({ days: qty }));
      case 'w':
      case 'week':
      case 'weeks':
        return fixDuration(Duration.fromObject({ weeks: qty }));
      default:
        return null;
    }
  }
  if (typeof value === 'object') return fixDuration(Duration.fromObject(value));
  return null;
};
