# JSON Expression Operators

Evaluate expressions with operators that are represented purely JSON objects. Completely
extensible, giving ability to add or remove operators as required.

## Basic Usage

```typescript
import { evaluate, registry } from '@jexop/core';

// register default operators
registry.addDefaults();

const expression = {
  op: 'if',
  condition: {
    op: '>'
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

const context = {
  foo: 'bar',
  x: 19,
  y: 7,
};

const result = evaluate(expression, context);
```

### Add custom operators

```typescript
// add custom operator 'is'
registry.set('is', ({ a, b }, ctx) => a === b);
// or, for many at once
registry.add({
  'is': ({ a, b }, ctx) => a === b,
  "isn't": ({ a, b }, ctx) => a !== b,
});

const expression = {
  op: 'is',
  a: 45,
  b: 17,
};
evaluate(expression); // => false
```

## Default Operators

There are many basic operators provided in `@jexop/core`. These can be viewed at [Operators](./src/operators/README.md).

Other operators can be found at

- [@jexop/color](https://www.npmjs.com/package/@jexop/color) using dependency of [chroma-js](https://www.npmjs.com/package/chroma-js)
- [@jexop/date-time](https://www.npmjs.com/package/@jexop/date-time) using dependency of [luxon](https://www.npmjs.com/package/luxon)
