import { toNumber, type Operator } from '@jexop/core';
import _ from 'lodash';

export const multiplyOperator: Operator<number> = ({ a, b }) => _.multiply(toNumber(a) ?? 1, toNumber(b) ?? 1);
