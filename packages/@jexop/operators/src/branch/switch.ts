import { isObject, isString, type Operator } from '@jexop/core';

export const switchOperator: Operator = ({ expr, options, fallback }) => {
  if (!isString(expr) || !isObject(options)) return fallback ?? null;

  return expr in options ? options[expr] : fallback;
};
