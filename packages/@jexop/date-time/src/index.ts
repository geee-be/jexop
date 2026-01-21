import {
  afterFuture,
  afterPast,
  ageOperator,
  beforeFuture,
  beforePast,
} from './age.js';
import { endOfNowOperator, startOfNowOperator } from './bounds.js';
import { nowOperator } from './now.js';
import { toDurationOperator } from './to-duration.js';

export const dateTimeOperators = {
  'after-future': afterFuture,
  'after-past': afterPast,
  age: ageOperator,
  'before-future': beforeFuture,
  'before-past': beforePast,
  'end-of': endOfNowOperator,
  now: nowOperator,
  'start-of': startOfNowOperator,
  'to-duration': toDurationOperator,
};
