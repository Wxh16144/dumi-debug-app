import { defineConfig } from 'dumi';

const base = process.env.MY_SITE_BASE ?? '/website/';

export default defineConfig({
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  themeConfig: {
    name: 'hello-dumi',
  },
  base,
  publicPath: base,
  changeFavicon: 'https://gitee.com/favicon.ico',
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components' },
    ]
  },
  mock: {
    exclude: ['mock']
  },
  extraRemarkPlugins: [
    'remark-emoji',
  ],
  mfsu: false,
});
