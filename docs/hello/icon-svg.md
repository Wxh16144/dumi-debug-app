---
toc: content
---

https://github.com/umijs/dumi/issues/1904

## 验证一个 bug

```tsx
import React from 'react';
import { AccountBookOutlined } from '@ant-design/icons-svg';

export default () => {
  React.useEffect(() => {
    console.log('hello', { AccountBookOutlined });
  }, []);

  return <input type="text" />;
};
```
