import { contextOperator } from './context.js';
import { getOperator } from './get.js';
import { hasOperator } from './has.js';

export const objectOperators = {
  context: contextOperator,
  get: getOperator,
  has: hasOperator,
};
