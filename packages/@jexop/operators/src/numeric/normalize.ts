import { toNumber, type Operator } from '@jexop/core';

export const normalizeOperator: Operator<number> = ({ min, max, value }) => {
  const minNumber = toNumber(min);
  const maxNumber = toNumber(max);
  const valueNumber = toNumber(value);

  if (minNumber === null || maxNumber === null || valueNumber === null) return null;

  return valueNumber < minNumber
    ? 0
    : valueNumber > maxNumber
    ? 1
    : (valueNumber - minNumber) / (maxNumber - minNumber);
};
