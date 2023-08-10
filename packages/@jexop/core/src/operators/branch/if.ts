import { type Operator } from '../../types.js';

export const ifOperator: Operator = ({ condition, then, else: fallback }) => (condition ? then : fallback);
