import type { Duration } from 'luxon';
import { toDuration } from './utils.js';

export const toDurationOperator = (value: unknown): Duration | null => {
  return toDuration(value);
};
