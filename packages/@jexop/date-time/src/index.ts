import { afterFuture, afterPast, ageOperator, beforeFuture, beforePast } from './age.js';
import { nowOperator } from './now.js';

export const dateTimeOperators = {
  afterFuture,
  afterPast,
  age: ageOperator,
  beforeFuture,
  beforePast,
  now: nowOperator,
};
