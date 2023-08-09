import { Operator } from '@jexop/core';
import { equalityOperators } from './equality/index.js';
import { numericOperators } from './numeric/index.js';
import { objectOperators } from './object/index.js';
import { branchOperators } from './branch/index.js';

export const operators: Record<string, Operator> = {
  ...branchOperators,
  ...equalityOperators,
  ...numericOperators,
  ...objectOperators,
};
