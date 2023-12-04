# Boolean Operators

## `and`, `&&`

Returns the result of all values combined with the logical `and` operation.

| Property | Description |
| -------- | ----------- |
| `values` | Inputs      |

Examples

```jsonc
// returns false
{
  "op": "and",
  "values": [true, false]
}
```

```jsonc
// returns true
{
  "op": "and",
  "values": [
    true,
    {
      "op": "=",
      "a": 100,
      "b": {
        "op": "plus",
        "a": 1,
        "b": 99
      }
    }
  ]
}
```

## `or`, `||`

Returns the result of all values combined with the logical `or` operation.

| Property | Description |
| -------- | ----------- |
| `values` | Inputs      |

Examples

```jsonc
// returns true
{
  "op": "or",
  "values": [true, false]
}
```

```jsonc
// returns false
{
  "op": "or",
  "values": [
    false,
    {
      "op": "!=",
      "a": 100,
      "b": {
        "op": "plus",
        "a": 1,
        "b": 99
      }
    }
  ]
}
```
