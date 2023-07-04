---
title: 'my-Foo'
---

## Case 1

```tsx
import { Foo } from '.';

export default () => <Foo>Case1</Foo>;
```

## Case2

```tsx
import { Foo } from '@/components/Foo';
export default () => <Foo>Case2</Foo>;
```

## Case3

```tsx
import { Foo } from '@/components';
export default () => <Foo>Case3</Foo>;
```

## Case4

<code src="./Demos/case4.tsx"></code>
