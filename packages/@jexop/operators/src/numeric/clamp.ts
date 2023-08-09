import { isNumber, type Operator } from '@jexop/core';
import { toNumber } from 'lodash';

export const clampOperator: Operator<number> = ({ min, max, value }) => {
  const numValue = toNumber(value);
  if (numValue === null) return null;

  return isNumber(min) && numValue < min ? min : isNumber(max) && numValue > max ? max : numValue;
};
