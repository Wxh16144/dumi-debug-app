import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  themeConfig: {
    name: 'hello-dumi',
  },
});
