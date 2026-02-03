# Hexagonal.js documentation
This file is for the function `HexagonalApp.init`, which sets the application's main component and initializes it.
Example:
```typescript
import hexagonal from 'hexagonal.js';
import componentName /* type: string */ from './components/hello.ts';
// refer to: ../Hexagonal-export/func-App.md
const app = hexagonal.App();

app.init(componentName);
```

Type signature:
```typescript
function init(rootComponent: string, waitForDOM = true): void
```