import { type Operator } from '../../types.js';
import { isNumber } from '../../utils.js';

export const isNumberOperator: Operator<boolean> = ({ value }) => isNumber(value);
