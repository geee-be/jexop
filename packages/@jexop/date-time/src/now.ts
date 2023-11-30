import type { Operator } from '@jexop/core';
import { DateTime } from 'luxon';

export const nowOperator: Operator = () => DateTime.utc();
