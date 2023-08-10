import _ from 'lodash';
import { type Operator } from '../../types.js';
import { toNumber } from '../../utils.js';

export const multiplyOperator: Operator<number> = ({ a, b }) => _.multiply(toNumber(a) ?? 1, toNumber(b) ?? 1);
