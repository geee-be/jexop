import { operators as defaultOperators } from './operators/index.js';
import { type Operator } from './types.js';
import { isPrimitive } from './utils.js';

class Registry extends Map<string, Operator> {
  public add(operators: Record<string, Operator>): void {
    Object.entries(operators).forEach(([key, value]) => this.set(key, value));
  }

  public addDefaults(): void {
    this.add(defaultOperators);
  }
}

export const registry = new Registry();

export const evaluate = (expression: unknown, context: object): unknown => {
  if (isPrimitive(expression)) return expression;

  // array
  if (Array.isArray(expression)) return expression.map((item) => evaluate(item, context));

  // object
  if (expression && typeof expression === 'object') {
    const { op, ...args } = expression as { op: unknown };
    // implicit literal - no operator
    if (typeof op !== 'string') return expression;
    // explicit literal
    if (op === 'literal') return (expression as { value: unknown }).value ?? null;

    const fn = registry.get(op);
    // implicit literal - operator not supported
    if (!fn) return expression;

    const evaluatedArgs = Object.entries(args).reduce(
      (acc, entry) => ({ ...acc, [entry[0]]: evaluate(entry[1], context) }),
      {},
    );
    return fn(evaluatedArgs, context);
  }
};
