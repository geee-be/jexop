import type { Duration } from 'luxon';
import { toDuration } from './utils.js';

/**
 * Operator function that converts an unknown value to a Luxon Duration using toDuration.
 * @param value - The value to convert.
 * @returns The resulting Duration or null if conversion fails.
 */
export const toDurationOperator = (value: unknown): Duration | null => {
  return toDuration(value);
};
