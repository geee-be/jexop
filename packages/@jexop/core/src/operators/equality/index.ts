import { type Operator } from '../../types.js';

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
