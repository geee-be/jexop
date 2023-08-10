# Equality Operators

## `eq`, `=`, `==`, `===`

Returns `true` if inputs are exactly equal. Otherwise, returns `false`.

| Property | Description |
| -------- | ----------- |
| `left`   | Input       |
| `right`  | Input       |

Examples

```jsonc
// returns false
{
  "op": "eq",
  "a": "foo",
  "b": "bar"
}
```

```jsonc
// returns true
{
  "op": "=",
  "a": 100,
  "b": {
    "op": "plus",
    "a": 1,
    "b": 99
  }
}
```

## `ne`, `!=`, `!==`

Returns `false` if inputs are exactly equal. Otherwise, returns `true`.

| Property | Description |
| -------- | ----------- |
| `left`   | Input       |
| `right`  | Input       |

Examples

```jsonc
// returns false
{
  "op": "ne",
  "a": "foo",
  "b": "bar"
}
```

```jsonc
// returns true
{
  "op": "!=",
  "a": 100,
  "b": {
    "op": "plus",
    "a": 1,
    "b": 99
  }
}
```
