import { type Operator } from '../../types.js';
import { isObject, isString } from '../../utils.js';

export const switchOperator: Operator = ({ expr, options, fallback }) => {
  if (!isString(expr) || !isObject(options)) return fallback ?? null;

  return expr in options ? options[expr] : fallback;
};
