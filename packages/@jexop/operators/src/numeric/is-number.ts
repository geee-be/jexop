import { isNumber, type Operator } from '@jexop/core';

export const isNumberOperator: Operator<boolean> = ({ value }) => isNumber(value);
