import _ from 'lodash';
import { type Operator } from '../../types.js';
import { isPath } from '../../utils.js';

export const contextOperator: Operator = ({ path, default: defaultValue }, context) => {
  if (!context || typeof context !== 'object') return null;

  if (!isPath(path)) return context;

  return _.get(context, path, defaultValue ?? null);
};
