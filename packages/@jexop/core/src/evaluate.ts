import { operators as defaultOperators } from './operators/index.js';
import { type Operator } from './types.js';
import { isPrimitive } from './utils.js';

export class Registry extends Map<string, Operator> {
  public static from(operators?: Record<string, Operator>, options?: { addDefaults: boolean }): Registry {
    const { addDefaults = true } = options ?? {};
    const r = new Registry();
    if (addDefaults) {
      r.addDefaults();
    }
    if (operators) {
      r.add(operators);
    }
    return r;
  }

  public add(operators: Record<string, Operator>): void {
    Object.entries(operators).forEach(([key, value]) => this.set(key, value));
  }

  public addDefaults(): void {
    this.add(defaultOperators);
  }
}

export const registry = new Registry();

export const evaluate = (expression: unknown, context: object): unknown =>
  evaluateRegistry(registry, expression, context);

export const evaluateRegistry = (registry: Map<string, Operator>, expression: unknown, context: object): unknown => {
  if (isPrimitive(expression)) return expression;

  // array
  if (Array.isArray(expression)) return expression.map((item) => evaluateRegistry(registry, item, context));

  // object
  if (expression && typeof expression === 'object') {
    const { op, ...args } = expression as { op: unknown };
    // implicit literal - no operator
    if (typeof op !== 'string') return expression;
    // explicit literal
    if (op === 'literal') return (expression as { value: unknown }).value ?? null;
    // mapped array
    if (op === 'array:map') {
      const { items, to } = args as { items: unknown; to: unknown };
      if (!items) return null;

      if (!Array.isArray(items)) {
        const evaluatedItems = evaluateRegistry(registry, items, { context });

        if (!evaluatedItems || !Array.isArray(evaluatedItems)) return null;
        return evaluatedItems.map((item: unknown, index) => evaluateRegistry(registry, to, { context, item, index }));
      }

      return items.map((item: unknown, index) => evaluateRegistry(registry, to, { context, item, index }));
    }
    // tranformed ovject
    if (op === 'object:transform') {
      const { object: obj, to } = args as { object: unknown; to: unknown };
      if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null;

      const evaluatedObj = evaluateRegistry(registry, obj, { context });

      if (!evaluatedObj || typeof evaluatedObj !== 'object' || Array.isArray(evaluatedObj)) return null;

      const result: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(evaluatedObj)) {
        result[key] = evaluateRegistry(registry, to, { context, key, value });
      }
      return result;
    }

    const fn = registry.get(op);
    // implicit literal - operator not supported
    if (!fn) return expression;

    const evaluatedArgs = Object.entries(args).reduce(
      (acc, entry) => ({ ...acc, [entry[0]]: evaluateRegistry(registry, entry[1], context) }),
      {},
    );
    return fn(evaluatedArgs, context);
  }
};
