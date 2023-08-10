import { addOperator } from './add.js';
import { clampOperator } from './clamp.js';
import { comparisonOperator } from './comparison.js';
import { divideOperator } from './divide.js';
import { isNumberOperator } from './is-number.js';
import { multiplyOperator } from './multiply.js';
import { normalizeOperator } from './normalize.js';
import { numberOperator } from './number.js';
import { subtractOperator } from './subtract.js';

const geOperator = comparisonOperator((left, right) => left >= right);
const gtOperator = comparisonOperator((left, right) => left > right);
const leOperator = comparisonOperator((left, right) => left <= right);
const ltOperator = comparisonOperator((left, right) => left < right);

export const numericOperators = {
  '-': subtractOperator,
  '*': multiplyOperator,
  '/': divideOperator,
  '+': addOperator,
  '<': ltOperator,
  '<=': leOperator,
  '>': gtOperator,
  '>=': geOperator,
  'add': addOperator,
  'clamp': clampOperator,
  'divide': divideOperator,
  'ge': geOperator,
  'gt': gtOperator,
  'is-number': isNumberOperator,
  'le': leOperator,
  'lt': ltOperator,
  'minus': subtractOperator,
  'multiply': multiplyOperator,
  'normalize': normalizeOperator,
  'number': numberOperator,
  'plus': addOperator,
  'subtract': subtractOperator,
};
