import _ from 'lodash';
import { type Operator } from '../../types.js';
import { isPath } from '../../utils.js';

export const getOperator: Operator = ({ path, object, default: defaultValue }) => {
  if (!isPath(path)) return null;

  return _.get(object, path, defaultValue ?? null);
};
