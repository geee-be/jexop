import { isPrimitive, type Operator } from '@jexop/core';

export const registry: Record<string, Operator> = {};

export const evaluate = (expression: unknown, context: object): unknown => {
  if (isPrimitive(expression)) return expression;

  // array
  if (Array.isArray(expression)) return expression.map((item) => evaluate(item, context));

  // object
  if (expression && typeof expression === 'object') {
    const { op, ...args } = expression as { op: unknown };

    // literal
    if (typeof op !== 'string' || !(op in registry)) return expression;
    if (op === 'literal') return (expression as { value: unknown }).value ?? null;

    const evaluatedArgs = Object.entries(args).reduce(
      (acc, entry) => ({ ...acc, [entry[0]]: evaluate(entry[1], context) }),
      {},
    );
    const fn = registry[op];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const result = fn.bind(context)(evaluatedArgs);
    return result;
  }

  // TODO symbol, bigint, function
  throw new Error(`Unsupported expression type ${typeof expression}`);
};
