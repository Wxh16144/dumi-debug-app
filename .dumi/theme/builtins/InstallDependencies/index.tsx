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
  windows: {
    icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/windows8/windows8-original.svg`,
    label: 'Windows'
  },
  linux: {
    icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/linux/linux-original.svg`,
    label: 'Linux'
  },
}

const InstallDependencies: React.FC = (props) => {
  const items = Object.entries(props)
    .map(([key, value]: any) => {
      if (!value || !map[key]) return null;

      return {
        key,
        children: <SourceCode lang="bash">{value}</SourceCode>,
        label: (
          <div>
            <img src={map[key].icon} alt={map[key].label} style={{ width: 18, height: 18 }} />
            <span style={{ marginLeft: 8 }}>{map[key].label}</span>
          </div>
        ),
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
