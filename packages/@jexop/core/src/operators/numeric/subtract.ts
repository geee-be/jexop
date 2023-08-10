import _ from 'lodash';
import { type Operator } from '../../types.js';
import { toNumber } from '../../utils.js';

export const subtractOperator: Operator<number> = ({ a, b }) => _.subtract(toNumber(a) ?? 0, toNumber(b) ?? 0);
