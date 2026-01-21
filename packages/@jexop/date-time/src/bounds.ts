import type { Operator } from '@jexop/core';
import { DateTime, type DateTimeUnit } from 'luxon';

const allowedUnits = new Set<DateTimeUnit>([
  'hour',
  'day',
  'week',
  'month',
  'year',
]);

const normalizeUnit = (value: unknown): DateTimeUnit | null => {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return null;

  const singular = trimmed.endsWith('s') ? trimmed.slice(0, -1) : trimmed;
  if (!allowedUnits.has(singular as DateTimeUnit)) return null;

  return singular as DateTimeUnit;
};

const boundaryOperator =
  (mode: 'start' | 'end'): Operator<DateTime> =>
  ({ unit }) => {
    const normalizedUnit = normalizeUnit(unit);
    if (!normalizedUnit) return null;

    const now = DateTime.now();
    return mode === 'start'
      ? now.startOf(normalizedUnit)
      : now.endOf(normalizedUnit);
  };

export const startOfNowOperator = boundaryOperator('start');
export const endOfNowOperator = boundaryOperator('end');
