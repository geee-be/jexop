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

````jsonc
// given context = { "foo": "bar" }, returns "bar"
{
  "op": "context",
  "path": "foo"
}

```jsonc
// given context = { "foo": "bar" }, returns "this is the fallback"
{
  "op": "context",
  "path": "other",
  "default": "this is the fallback"
}
````

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

## `has`

True if the input `object` has a property at the given `path`.

| Property | Description            |
| -------- | ---------------------- |
| `path`   | Property path to check |
| `object` | Input object           |

Examples

```jsonc
// returns true
{
  "op": "has",
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
  "op": "has",
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
  "op": "has",
  "path": "other",
  "object": {
    "foo": {
      "bar": 17
    }
  }
}
```
