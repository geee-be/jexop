# Date-Time Operators

## Available Operators

### `now`

Returns the current date and time in UTC.

| Property | Description |
| -------- | ----------- |
| *(none)* | No parameters |

Example:

```json
{
  "op": "now"
}
```

### `age`

Calculates the duration from a given timestamp to now.

| Property    | Description                                    |
| ----------- | ---------------------------------------------- |
| `timestamp` | Date/time value (string, number, or DateTime)  |

Example:

```json
{
  "op": "age",
  "timestamp": "2024-01-15T10:30:00"
}
```

### `start-of` & `end-of`

Returns the start or end of a time period relative to now.

| Property | Description                                             |
| -------- | ------------------------------------------------------- |
| `unit`   | Time unit: `hour`, `day`, `week`, `month`, or `year`   |

Example:

```json
{
  "op": "start-of",
  "unit": "day"
}
```

### Age Comparison Operators

Compare a timestamp against a relative time offset from now.

#### `before-past`

Check if a timestamp is before a duration in the past.

| Property    | Description                                    |
| ----------- | ---------------------------------------------- |
| `timestamp` | Date/time value (string, number, or DateTime)  |
| `duration`  | Duration value (string, number, or object)     |

#### `after-past`

Check if a timestamp is after a duration in the past.

| Property    | Description                                    |
| ----------- | ---------------------------------------------- |
| `timestamp` | Date/time value (string, number, or DateTime)  |
| `duration`  | Duration value (string, number, or object)     |

#### `before-future`

Check if a timestamp is before a duration in the future.

| Property    | Description                                    |
| ----------- | ---------------------------------------------- |
| `timestamp` | Date/time value (string, number, or DateTime)  |
| `duration`  | Duration value (string, number, or object)     |

#### `after-future`

Check if a timestamp is after a duration in the future.

| Property    | Description                                    |
| ----------- | ---------------------------------------------- |
| `timestamp` | Date/time value (string, number, or DateTime)  |
| `duration`  | Duration value (string, number, or object)     |

Example:

```json
{
  "op": "before-past",
  "timestamp": "2024-06-15",
  "duration": "30 days"
}
```

### `to-duration`

Converts a value to a Duration object.

| Property | Description                             |
| -------- | --------------------------------------- |
| *(value)* | Value to convert to Duration (string or object) |

Example:

```json
{
  "op": "to-duration",
  "value": "2 weeks"
}
```
