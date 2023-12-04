import { type Operator } from '../../types.js';

const notOperator: Operator<boolean> = ({ value }) => (value === null || value === undefined ? null : !value);

const booleanOperator =
  (initial: boolean, operator: (a: boolean, b: boolean) => boolean, not = false): Operator<boolean> =>
  ({ values }) => {
    if (!values || !Array.isArray(values)) return null;
    if (!values.length) return false;
    const reduction = values.reduce<boolean>((acc, item) => operator(acc, !!item), initial);
    return not !== reduction;
  };

export const booleanOperators = {
  'not': notOperator,
  '!': notOperator,
  'and': booleanOperator(true, (a, b) => a && b),
  '&&': booleanOperator(true, (a, b) => a && b),
  'nand': booleanOperator(true, (a, b) => a && b, true),
  'or': booleanOperator(false, (a, b) => a || b),
  '||': booleanOperator(false, (a, b) => a || b),
  'nor': booleanOperator(false, (a, b) => a || b, true),
};
