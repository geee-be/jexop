import { type Operator } from '../../types.js';
import { toNumber } from '../../utils.js';

export const numberOperator: Operator<number> = ({ value, default: defaultValue }) => {
  return toNumber(value) ?? toNumber(defaultValue);
};
