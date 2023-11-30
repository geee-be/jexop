# Array Operators

## `array:map`

| Property | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| `items`  | Array that will be run over                                          |
| `to`     | Object to evaluate with additional `item` and `index` in the context |

Examples

```json
{
  "op": "array:map",
  "items": [2, 4, 6],
  "to": {
    "op": "<",
    "left": {
      "op": "context",
      "path": "item"
    },
    "right": 5
  }
}
```
