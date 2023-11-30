import { contextOperator } from './context.js';
import { getOperator } from './get.js';
import { hasOperator } from './has.js';
import { keysOperator } from './keys.js';

export const objectOperators = {
  'context': contextOperator,
  'get': getOperator,
  'has': hasOperator,
  'object:has': hasOperator,
  'object:keys': keysOperator,
};
