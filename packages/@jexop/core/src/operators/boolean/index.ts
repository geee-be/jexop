import { type Operator } from '../../types.js';

const andOperator: Operator<boolean> = ({ values }) => {
  if (!values || !Array.isArray(values)) return null;
  if (!values.length) return false;
  return values.reduce<boolean>((acc, item) => acc && !!item, true);
};

const orOperator: Operator<boolean> = ({ values }) => {
  if (!values || !Array.isArray(values)) return null;
  if (!values.length) return false;
  return values.reduce<boolean>((acc, item) => acc || !!item, false);
};

export const booleanOperators = {
  'and': andOperator,
  '&&': andOperator,
  'or': orOperator,
  '||': orOperator,
};
