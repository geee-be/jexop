# Branch Operators

## `if`

| Property    | Description                     |
| ----------- | ------------------------------- |
| `condition` | Condition to check              |
| `then`      | Returned if condition is truthy |
| `else`      | Returned if condition is falsey |

NOTE: both `then` and `else` are evaluated no matter what the condition is.

## `switch`

| Property   | Description                                             |
| ---------- | ------------------------------------------------------- |
| `expr`     | Input value (string) to match against keys in `options` |
| `options`  | Key-value dictionary/object                             |
| `fallback` | Returned if no `options` match `expr`                   |

Examples

```json
// given context = { "foo": "bar" }, returns { "one": "thing" }
// given context = { "foo": "another" }, returns 7
// given context = { "foo": "other" }, returns "default case"
{
  "op": "switch",
  "expr": {
    "op": "context",
    "path": "foo"
  },
  "options": {
    "bar": { "one": "thing" },
    "another": 7
  },
  "fallback": "default case"
}
```

```json
// given context = { "foo": "bar" }, returns { "one": "thing" }
// given context = { "foo": "another", "value": 9 }, returns 9
// given context = { "foo": "other" }, returns "default case"
{
  "op": "switch",
  "expr": {
    "op": "context",
    "path": "foo"
  },
  "options": {
    "bar": { "one": "thing" },
    "another": {
      "op": "context",
      "path": "value"
    }
  },
  "fallback": "default case"
}
```
