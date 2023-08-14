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
