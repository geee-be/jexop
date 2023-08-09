import { isPath, type Operator } from '@jexop/core';
import _ from 'lodash';

export const hasOperator: Operator<boolean> = ({ path, object }) => {
  if (!isPath(path)) return false;

  return _.has(object, path);
};
