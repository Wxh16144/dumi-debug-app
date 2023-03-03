import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    { id: 'zh-CN', name: '中文', base: 'zh-CN' },
    { id: 'en-US', name: 'English', base: '/' }
  ],
  themeConfig: {
    name: 'hello-wxh',
  },
});
