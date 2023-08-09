import { type Operator } from '@jexop/core';

export const ifOperator: Operator = ({ condition, then, else: fallback }) => (condition ? then : fallback);
