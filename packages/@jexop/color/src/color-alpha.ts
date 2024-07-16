import { isNumber, isString, toNumber, type Operator } from '@jexop/core';
import chroma from 'chroma-js';

export const alphaOperator: Operator<string> = ({ color, opacity }) => {
  const alpha = toNumber(opacity);
  if (alpha === null) return null;

  const setColor: chroma.Color = isString(color) || isNumber(color) ? chroma(color) : chroma('#000000');

  const alphaColor = chroma(setColor).alpha(alpha);
  return alphaColor.hex();
};

