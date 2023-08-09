import { isPath, type Operator } from '@jexop/core';
import _ from 'lodash';

export const getOperator: Operator = ({ path, object, default: defaultValue }) => {
  if (!isPath(path)) return null;

  return _.get(object, path, defaultValue ?? null);
};
