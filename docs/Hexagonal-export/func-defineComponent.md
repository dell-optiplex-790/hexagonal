# Hexagonal.js Documentation
This file is for `hexagonal.defineComponent`. This defines the components (the "building blocks" or something idk), and will be moved into the `HexagonalApp` object for portability's sake. Example:
```typescript
import hexagonal from 'hexagonal.js';
hexagonal.define
```
Intended output: literal nothing
Type signature:
```typescript
function defineComponent($construct: vDOM$ComponentConstructor): void
```