# JSON Expression Color Operators

## Basic Usage

```typescript
import { evaluate, registry } from '@jexop/core';
import { colorOperators } from '@jexop/color';

// register default operators
registry.addDefaults();
// register color operators
registry.add(colorOperators);
```

## Operators

### `color-range`

Returns color from a gradient `from`-`to`

| Property         | Description                      |
| ---------------- | -------------------------------- |
| `from` (color)   | Color when `value` is `0`        |
| `to` (color)     | Color when `value` is `1`        |
| `value` (number) | Normalized number (in range 0-1) |

Examples

```jsonc
{
  "op": "color-range",
  "from": "red",
  "to": "green",
  "value": 0.7
}
```

```jsonc
{
  "op": "color-range",
  "from": "red",
  "to": "green",
  "value": {
    "op": "normalize",
    "min": 0,
    "max": 100,
    "value": 70
  }
}
```
