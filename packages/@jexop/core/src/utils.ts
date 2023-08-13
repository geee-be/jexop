export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isObject = (value: unknown): value is Record<string, unknown> =>
  value !== undefined && value !== null && typeof value === 'object';

export const isPath = (value: unknown): value is string | (string | number)[] => {
  if (isString(value)) return true;
  if (!Array.isArray(value)) return false;

  return value.every((item) => isNumber(item) || isString(item));
};

export const toNumber = (value: unknown): number | null => {
  if (value === null) return null;
  if (Array.isArray(value)) return value.length;

  const num = typeof value === 'number' ? value : Number(value);
  return isNumber(num) ? num : null;
};

export const isPrimitive = (value: unknown): boolean =>
  value === null || value === undefined || ['number', 'string', 'boolean'].includes(typeof value);
