import { Operator } from '@jexop/core';

const eqOperator: Operator<boolean> = ({ a, b }) => a === b;
const neOperator: Operator<boolean> = ({ a, b }) => a !== b;

export const equalityOperators = {
  '!=': neOperator,
  '!==': neOperator,
  '=': eqOperator,
  '==': eqOperator,
  '===': eqOperator,
  'eq': eqOperator,
  'ne': neOperator,
};
