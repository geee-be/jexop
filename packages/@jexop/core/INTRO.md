# JSON Expression Operators

The JSON Expression Operators library allows you to evaluate expressions with operators that are represented purely as JSON objects. It is completely extensible, giving you the ability to add or remove operators as required.

## Basic Usage

To use the library, first import the `evaluate` and `registry` functions from the `@jexop/core` package, then add the operators that you wish to use to the registry:

```typescript
import { evaluate, registry } from '@jexop/core';

// register all default operators
registry.addDefaults();
```

Now you can construct an expression as a JSON object. Here's an example:

```typescript
const expression = {
  op: 'if',
  condition: {
    op: '>',
    left: {
      op: 'context',
      path: 'x',
    },
    right: {
      op: 'context',
      path: 'y',
    },
  },
  then: {
    op: 'context',
    path: 'foo',
  },
  else: 'something else',
};
```

In this example, the expression is checking if the value of `x` is greater than the value of `y`. If the condition is true, it returns the value of `foo` that is in the given context, otherwise it returns the string `'something else'`.

Finally, you can evaluate the expression by calling the `evaluate` function and providing the context required:

```typescript
const context = {
  foo: 'bar',
  x: 19,
  y: 7,
};

const result = evaluate(expression, context);
```

The `result` variable will contain the result of the expression evaluation.

### Adding Custom Operators

In addition to the default operators provided by `@jexop/core`, you can also add custom operators. To add a custom operator, use the `set` or `add` functions on the `registry`.

Here's an example of adding a custom operator called 'is' that checks if two values are equal:

```typescript
registry.set('is', ({ a, b }, ctx) => a === b);
```

You can also add multiple custom operators at once using the `add` function:

```typescript
registry.add({
  'is': ({ a, b }, ctx) => a === b,
  "isn't": ({ a, b }, ctx) => a !== b,
});
```

Now you can use the custom operators in expressions. For example:

```typescript
const expression = {
  op: 'is',
  a: 45,
  b: 17,
};
const result = evaluate(expression); // result will be false
```

## Operators

The `@jexop/core` package provides many basic operators by default. These operators cover common use cases and provide a good starting point for most applications.

Additionally, there are more operators available in the following packages:

- **[@jexop/color](https://www.npmjs.com/package/@jexop/color):** This package provides color-related operators using the dependency of [chroma-js](https://www.npmjs.com/package/chroma-js).
- **[@jexop/date-time](https://www.npmjs.com/package/@jexop/date-time):** This package provides date and time-related operators using the dependency of [luxon](https://www.npmjs.com/package/luxon).

You can install and use these packages to access a wider range of operators for your expressions.
