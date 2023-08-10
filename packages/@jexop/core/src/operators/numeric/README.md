# Numeric Operators

## `add`, `plus`, `+`

Adds two numbers.

| Property | Description |
| -------- | ----------- |
| `a`      | Addend      |
| `b`      | Addend      |

Computes `a` + `b`.

If `a` or `b` are not numeric they are defaulted to `0`.

Examples

```jsonc
// returns 12
{
  "op": "add",
  "a": 10,
  "b": 2
}
```

```jsonc
// returns 110
{
  "op": "+",
  "a": 10,
  "b": {
    "op": "plus",
    "a": 1,
    "b": 99
  }
}
```

## `clamp`

Ensures that a value is between a given `min` and `max` (inclusive).

| Property | Description                |
| -------- | -------------------------- |
| `min`    | Lower bound                |
| `max`    | Upper bound                |
| `value`  | Input number to be clamped |

If `value` is less that `min`, then `min` is returned. If `value` is greater than `max` then `max` is returned. Otherwise, `value` is returned.

Examples

```json
// returns 25
{
  "op": "clamp",
  "min": 10,
  "max": 50,
  "value": 25
}
```

```json
// returns 50
{
  "op": "clamp",
  "min": 10,
  "max": 50,
  "value": {
    "op": "plus",
    "a": 1,
    "b": 99
  }
}
```

## `comparison`

Compares two numbers

| Property | Description |
| -------- | ----------- |
| `left`   | Input       |
| `right`  | Input       |

| Operator   | Comparison                                 |
| ---------- | ------------------------------------------ |
| `lt`, `<`  | `left` is less than `right`                |
| `le`, `<=` | `left` is less than or equal to `right`    |
| `gt`, `>`  | `left` is greater than `right`             |
| `ge`, `>=` | `left` is greater than or equal to `right` |

Examples

```json
// returns true
{
  "op": "<",
  "left": 10,
  "right": 50
}
```

```json
// returns false
{
  "op": "ge",
  "left": 10,
  "right": 50
}
```

## `divide`, `/`

Divides one number by another.

| Property | Description |
| -------- | ----------- |
| `left`   | Dividend    |
| `right`  | Divisor     |

Computes `left` ÷ `right`

Examples

```json
// returns 5
{
  "op": "divide",
  "left": 10,
  "right": 2
}
```

```json
// returns 5
{
  "op": "/",
  "left": {
    "op": "divide",
    "left": 100,
    "right": 2
  },
  "right": 10
}
```

## `is-number`

Returns `true` if the `value` is a number. Otherwise, returns `false`.

| Property | Description    |
| -------- | -------------- |
| `value`  | Value to check |

## `multiply`, `*`

Multiplies two numbers.

| Property | Description |
| -------- | ----------- |
| `left`   | Factor      |
| `right`  | Factor      |

Computes `left` × `right`

Examples

```json
// returns 5
{
  "op": "divide",
  "left": 10,
  "right": 2
}
```

```json
// returns 5
{
  "op": "/",
  "left": {
    "op": "divide",
    "left": 100,
    "right": 2
  },
  "right": 10
}
```

## `normalize`

Converts the input `value` to a number in the range 0-1.

| Property | Description  |
| -------- | ------------ |
| `min`    | Lower bound  |
| `max`    | Upper bound  |
| `value`  | Input number |

If `value` is less that `min`, then `min` is returned. If `value` is greater than `max` then `max` is returned. Otherwise, `value` is returned.

Examples

```json
// returns 0.2
{
  "op": "normalize",
  "min": 0,
  "max": 5,
  "value": 1
}
```

```json
// returns 0.5
{
  "op": "normalize",
  "min": 40,
  "max": 50,
  "value": 45
}
```

```json
// returns 1
{
  "op": "clamp",
  "min": -100,
  "max": 100,
  "value": {
    "op": "plus",
    "a": 1,
    "b": 99
  }
}
```

```json
// returns 1
{
  "op": "normalize",
  "min": 0,
  "max": 10,
  "value": 99
}
```

## `number`

Convert to number if possible.

| Property             | Description                                |
| -------------------- | ------------------------------------------ |
| `value`              | Input                                      |
| `default` (optional) | Value to use if conversion is not possible |

If `value` is an array, the length of the array is returned.

The `default` property will also be converted to number if necessary.

Examples

```json
// returns 123
{
  "op": "number",
  "value": "123"
}
```

```json
// returns 3
{
  "op": "number",
  "value": [9, 8, 7]
}
```

```json
// returns null
{
  "op": "number",
  "value": "foo"
}
```

```json
// returns 0
{
  "op": "number",
  "value": "foo",
  "default": 0
}
```

```json
// returns 7
{
  "op": "number",
  "value": "foo",
  "default": "7"
}
```

## `subtract`, `minus`, `-`

Subtracts one number from another.

| Property | Description |
| -------- | ----------- |
| `a`      | Minuend     |
| `b`      | Subtrahend  |

Computes `a` - `b`.

If `a` or `b` are not numeric they are defaulted to `0`.

Examples

```jsonc
// returns 8
{
  "op": "subtract",
  "a": 10,
  "b": 2
}
```

```jsonc
// returns -88
{
  "op": "minus",
  "a": 10,
  "b": {
    "op": "-",
    "a": 1,
    "b": 99
  }
}
```
