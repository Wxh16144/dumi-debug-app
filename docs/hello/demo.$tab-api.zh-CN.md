---
toc: content
---

# Demo 配置 Tabs

Demo 的配置用于控制 demo 渲染。

对于代码块 demo 来说，仅有 FrontMatter 一种配置方式：

<pre>
```jsx
/**
 * title: demo 标题
 */
import React from 'react';

export default () => <>Hello world!</>;
```
</pre>

## a

```tsx | inline
export default () => Array.from({ length: 100 }, (v, i) => <br key={i} />);
```

## b

```tsx | inline
export default () => Array.from({ length: 100 }, (v, i) => <br key={i} />);
```
