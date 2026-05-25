# Date-Time Operators

Date and time operators for the JSON Expression Operators library. This package provides operators for evaluating date and time-based expressions, powered by [luxon](https://www.npmjs.com/package/luxon).

## Installation

```bash
npm install @jexop/date-time
# or
pnpm add @jexop/date-time
```

## Basic Usage

First, import the `dateTimeOperators` and add them to the registry:

```typescript
import { evaluate, registry } from '@jexop/core';
import { dateTimeOperators } from '@jexop/date-time';

// register date-time operators
registry.add(dateTimeOperators);
```

Now you can use date and time operators in your expressions:

```typescript
const expression = {
  op: 'age',
  timestamp: '2024-01-15',
};

const result = evaluate(expression);
// result will be a Duration representing the time elapsed since 2024-01-15
```

## Operators

The `@jexop/date-time` package provides date and time-related operators. These operators allow you to work with timestamps, calculate durations, and compare dates relative to the current time.

For a complete list of operators and their usage, see [src/README.md](./src/README.md).

## More Information

For more information about JSON Expression Operators and other operator packages, visit the [@jexop/core](https://www.npmjs.com/package/@jexop/core) package.

Additional operator packages:

- **[@jexop/color](https://www.npmjs.com/package/@jexop/color):** Color manipulation operators powered by [chroma-js](https://www.npmjs.com/package/chroma-js).
