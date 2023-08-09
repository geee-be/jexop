import { toNumber, type Operator } from '@jexop/core';

export const comparisonOperator =
  (op: (left: number, right: number) => boolean): Operator<boolean> =>
  ({ left, right }) => {
    const a = toNumber(left);
    const b = toNumber(right);
    if (a === null || b === null) return null;
    return op(a, b);
  };
