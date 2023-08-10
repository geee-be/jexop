import _ from 'lodash';
import { type Operator } from '../../types.js';
import { isPath } from '../../utils.js';

export const hasOperator: Operator<boolean> = ({ path, object }) => {
  if (!isPath(path)) return false;

  return _.has(object, path);
};
