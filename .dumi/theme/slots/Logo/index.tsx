import React, { type FC } from 'react';
import { Link, useSiteData } from 'dumi';
import 'dumi/theme-default/slots/Logo/index.less';

const Logo: FC = () => {
  const { themeConfig } = useSiteData();

  return (
    <Link className="dumi-default-logo" to={'/guide'}>
      {themeConfig.logo !== false && (
        <img
          src={themeConfig.logo || 'https://github.com/umijs.png?size=64'}
          alt={themeConfig.name}
        />
      )}
      {themeConfig.name}
    </Link>
  );
};

export default Logo;
