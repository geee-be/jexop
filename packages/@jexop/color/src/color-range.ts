import { isNumber, isString, toNumber, type Operator } from '@jexop/core';
import chroma from 'chroma-js';

export const colorRangeOperator: Operator<string> = ({ from, to, value }) => {
  const num = toNumber(value);
  if (num === null) return null;

  const fromColor: chroma.Color =
    isString(from) || isNumber(from) ? chroma(from) : chroma('#000000');
  const toColor: chroma.Color =
    isString(to) || isNumber(to) ? chroma(to) : chroma('#ffffff');

  const scale = chroma.scale([fromColor, toColor]).mode('lrgb'); // cspell: ignore lrgb
  const color = scale(num);
  return color.hex();
};
