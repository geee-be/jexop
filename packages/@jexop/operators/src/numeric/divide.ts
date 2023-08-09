import { toNumber, type Operator } from '@jexop/core';
import _ from 'lodash';

export const divideOperator: Operator<number> = ({ a, b }) => {
  const divisor = toNumber(b);
  return divisor !== 0 ? _.divide(toNumber(a) ?? 1, divisor ?? 1) : null;
};
