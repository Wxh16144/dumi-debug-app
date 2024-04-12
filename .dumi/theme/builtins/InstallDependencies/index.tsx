import React from 'react';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import SourceCode from 'dumi/theme-default/builtins/SourceCode';

const map: any = {
  android: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/android/android-original.svg',
    label: 'Android'
  },
  ios: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/apple/apple-original.svg',
    label: 'iOS'
  },
  macos: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/apple/apple-original.svg',
    label: 'macOS'
  },
  windows: {
    icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/windows8/windows8-original.svg`,
    label: 'Windows'
  },
  linux: {
    icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linux/linux-original.svg`,
    label: 'Linux'
  },
  unbuntu: {
    icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/ubuntu/ubuntu-original.svg`,
    label: 'Ubuntu'
  },
  centos: {
    icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/centos/centos-original.svg`,
    label: 'CentOS'
  },
  npm: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/npm/npm-original-wordmark.svg',
    label: 'npm'
  },
  pnpm: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/pnpm/pnpm-original-wordmark.svg',
    label: 'pnpm'
  },
  yarn: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/yarn/yarn-original-wordmark.svg',
    label: 'yarn'
  },
  // brew: {
  //   icon: 'https://brew.sh/assets/img/homebrew-256x256.png',
  //   label: 'Homebrew'
  // },
}

const InstallDependencies: React.FC = (props) => {

  const keys = Object.keys(props);
  const notSupportKeys = keys.filter(key => !map[key]);
  if (notSupportKeys.length) {
    console.warn(`
    %c[dumi-theme-bulitins] %c<InstallDependencies />%c: key "${notSupportKeys.join(', ')}" is not supported, supported keys are: ${Object.keys(map).join(', ')}`,
      'color: red;',
      'color: #087ea4;font-weight:bold',
      'color: inherit',
    );
  }

  const items = Object.entries(props)
    .map(([key, value]: any) => {
      if (!value || !map[key]) return null;

      return {
        key,
        children: <SourceCode lang="bash">{value}</SourceCode>,
        icon: <img src={map[key].icon} alt={map[key].label} style={{ width: 18, height: 18 }} />,
        label: map[key].label
      };
    })
    .filter(Boolean) as TabsProps['items'];

  return (
    <Tabs
      className="antd-site-snippet"
      // defaultActiveKey="npm"
      items={items}
    />
  );
};

export default InstallDependencies;
