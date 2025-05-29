# Object Operators

## `context`

Returns the context or part of it.

| Property             | Description                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ |
| `path` (optional)    | Property path to check                                                               |
| `default` (optional) | Value to be returned if the property doesn't exist or the value is null or undefined |

Examples

```jsonc
// given context = { "foo": "bar" }, returns { "foo": "bar" }
{
  "op": "context"
}
```

```jsonc
// given context = { "foo": "bar" }, returns "bar"
{
  "op": "context",
  "path": "foo"
}
```

```jsonc
// given context = { "foo": "bar" }, returns "this is the fallback"
{
  "op": "context",
  "path": "other",
  "default": "this is the fallback"
}
```

## `get`

Gets the value of the given property at the given `path` from the input `object`.

| Property             | Description                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ |
| `path`               | Property path to check                                                               |
| `object`             | Input object                                                                         |
| `default` (optional) | Value to be returned if the property doesn't exist or the value is null or undefined |

Examples

```jsonc
// returns { "bar": 17 }
{
  "op": "get",
  "path": "foo",
  "object": {
    "foo": {
      "bar": 17
    }
  }
}
```

```jsonc
// returns 17
{
  "op": "get",
  "path": "foo.bar",
  "object": {
    "foo": {
      "bar": 17
    }
  }
}
```

```jsonc
// returns 17
{
  "op": "get",
  "path": ["foo", "bar"],
  "object": {
    "foo": {
      "bar": 17
    }
  }
}
```

```jsonc
// returns "not-found'
{
  "op": "get",
  "path": ["prop"],
  "object": {
    "foo": {
      "bar": 17
    }
  },
  "default": "not-found"
}
```

## `object:has`

True if the input `object` has a property at the given `path`.

| Property | Description            |
| -------- | ---------------------- |
| `object` | Input object           |
| `path`   | Property path to check |

Examples

```jsonc
// returns true
{
  "op": "object:has",
  "path": "foo.bar",
  "object": {
    "foo": {
      "bar": 17
    }
  }
}
```

```jsonc
// returns true
{
  "op": "object:has",
  "path": ["foo", "bar"],
  "object": {
    "foo": {
      "bar": 17
    }
  }
}
```

```jsonc
// returns false
{
  "op": "object:has",
  "path": "other",
  "object": {
    "foo": {
      "bar": 17
    }
  }
}
```

## `object:keys`

Returns the object's keys as an array.

| Property          | Description                          |
| ----------------- | ------------------------------------ |
| `object`          | Input object                         |
| `path` (optional) | Evaluate child property at this path |

Examples

```jsonc
// returns ["foo", "bar"]
{
  "op": "object:keys",
  "object": {
    "foo": 12,
    "bar": 17
  }
}
```

```jsonc
// returns ["bar"]
{
  "op": "object:keys",
  "path": "foo",
  "object": {
    "foo": {
      "bar": 17
    }
  }
}
```

## `object:transform`

| Property | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
| `object` | Object whose entries (key-value pairs) will be transformed                   |
| `to`     | Object to evaluate for each entry, with additional `key` and `value` in context |

### Behavior

- Iterates over each key-value pair of the provided `object`.
- For each entry, evaluates the `to` expression.
- During evaluation, adds `key` and `value` to the context.
- Returns a new object with the same keys, where each value is the result of the evaluated `to` expression.

### Example

```jsonc
// returns { "a": 10, "b": 20, "c": 30 }
{
  "op": "object:transform",
  "object": {
    "a": 1,
    "b": 2,
    "c": 3
  },
  "to": {
    "op": "*",
    "a": {
      "op": "context",
      "path": "value"
    },
    "b": 10
  }
}
```
