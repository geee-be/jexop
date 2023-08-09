import { toNumber, type Operator } from '@jexop/core';
import _ from 'lodash';

export const addOperator: Operator<number> = ({ a, b }) => _.add(toNumber(a) ?? 0, toNumber(b) ?? 0);
