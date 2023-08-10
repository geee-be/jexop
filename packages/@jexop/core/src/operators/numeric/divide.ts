import _ from 'lodash';
import { type Operator } from '../../types.js';
import { toNumber } from '../../utils.js';

export const divideOperator: Operator<number> = ({ a, b }) => {
  const divisor = toNumber(b);
  return divisor !== 0 ? _.divide(toNumber(a) ?? 1, divisor ?? 1) : null;
};
