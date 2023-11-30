import _ from 'lodash';
import { type Operator } from '../../types.js';
import { isObject, isPath } from '../../utils.js';

export const keysOperator: Operator = ({ path, object }) => {
  const value = isPath(path) ? (_.get(object, path, null) as unknown) : object;

  if (!isObject(value)) return null;
  return Object.keys(value);
};
