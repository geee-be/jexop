import { type Operator } from '../types.js';
import { booleanOperators } from './boolean/index.js';
import { branchOperators } from './branch/index.js';
import { equalityOperators } from './equality/index.js';
import { numericOperators } from './numeric/index.js';
import { objectOperators } from './object/index.js';

export const operators: Record<string, Operator> = {
  ...branchOperators,
  ...booleanOperators,
  ...equalityOperators,
  ...numericOperators,
  ...objectOperators,
};
