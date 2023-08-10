import { type Operator } from '../../types.js';
import { toNumber } from '../../utils.js';

export const normalizeOperator: Operator<number> = ({ min, max, value }) => {
  const minNumber = toNumber(min);
  const maxNumber = toNumber(max);
  const valueNumber = toNumber(value);

  if (minNumber === null || maxNumber === null || valueNumber === null) return null;

  return valueNumber < minNumber
    ? 0
    : valueNumber > maxNumber
    ? 1
    : maxNumber === minNumber
    ? null
    : (valueNumber - minNumber) / (maxNumber - minNumber);
};
