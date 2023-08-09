import { toNumber, type Operator } from '@jexop/core';

export const numberOperator: Operator<number> = ({ value, default: defaultValue }) => {
  return toNumber(value) ?? toNumber(defaultValue);
};
