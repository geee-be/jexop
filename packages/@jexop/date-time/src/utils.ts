import { DateTime } from 'luxon';

const fix = (value: DateTime): DateTime | null => (value.isValid ? value : null);

export const toDateTime = (value: unknown): DateTime | null => {
  if (!value) return null;
  if (value instanceof DateTime) return fix(value);
  if (value instanceof Date) return fix(DateTime.fromJSDate(value));
  if (typeof value === 'number') return fix(DateTime.fromMillis(value));
  if (typeof value === 'string') return fix(DateTime.fromISO(value));
  if (Array.isArray(value)) return null;
  if (typeof value === 'object') return fix(DateTime.fromObject(value));
  return null;
};
