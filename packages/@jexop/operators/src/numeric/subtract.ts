import { toNumber, type Operator } from '@jexop/core';
import _ from 'lodash';

export const subtractOperator: Operator<number> = ({ a, b }) => _.subtract(toNumber(a) ?? 0, toNumber(b) ?? 0);
