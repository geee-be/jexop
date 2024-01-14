import { afterFuture, afterPast, ageOperator, beforeFuture, beforePast } from './age.js';
import { nowOperator } from './now.js';

export const dateTimeOperators = {
  'after-future': afterFuture,
  'after-past': afterPast,
  'age': ageOperator,
  'before-future': beforeFuture,
  'before-past': beforePast,
  'now': nowOperator,
};
