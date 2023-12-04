# Boolean Operators

## `not`, `!`

Returns the logical `not` of the value.

| Property | Description |
| -------- | ----------- |
| `value`  | Input       |

Examples

```jsonc
// returns true
{
  "op": "not",
  "value": false
}
```

```jsonc
// returns false
{
  "op": "!",
  "values": [
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

## `nand`

Returns the result of all values combined with the logical `nand` operation.

| Property | Description |
| -------- | ----------- |
| `values` | Inputs      |

Examples

```jsonc
// returns true
{
  "op": "nand",
  "values": [true, false]
}
```

```jsonc
// returns false
{
  "op": "nand",
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

## `nor`

Returns the result of all values combined with the logical `nor` operation.

| Property | Description |
| -------- | ----------- |
| `values` | Inputs      |

Examples

```jsonc
// returns false
{
  "op": "nor",
  "values": [true, false]
}
```

```jsonc
// returns true
{
  "op": "nor",
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
