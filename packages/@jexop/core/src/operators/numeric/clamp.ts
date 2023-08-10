import { type Operator } from '../../types.js';
import { isNumber, toNumber } from '../../utils.js';

export const clampOperator: Operator<number> = ({ min, max, value }) => {
  const numValue = toNumber(value);
  if (numValue === null) return null;

  return isNumber(min) && numValue < min ? min : isNumber(max) && numValue > max ? max : numValue;
};
