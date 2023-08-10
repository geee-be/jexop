import { type Operator } from '../../types.js';
import { toNumber } from '../../utils.js';

export const comparisonOperator =
  (op: (left: number, right: number) => boolean): Operator<boolean> =>
  ({ left, right }) => {
    const a = toNumber(left);
    const b = toNumber(right);
    if (a === null || b === null) return null;
    return op(a, b);
  };
