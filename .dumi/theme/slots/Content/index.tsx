import * as React from 'react';
import { useRouteMeta } from 'dumi';
import Content from 'dumi/theme-default/slots/Content';

const branchUrl =
  'https://github.com/Wxh16144/dumi-debug-app/edit/wuxh/feature-edit-this-page/';

const MyDocLayout: React.FC = (props) => {
  const { children, ...resetProps } = props;
  const meta = useRouteMeta();

  return (
    <Content {...resetProps}>
      <a href={`${branchUrl}${meta.frontmatter.filename}`} target="_blank">
        Edit this page
      </a>
      {children}
    </Content>
  );
};

export default MyDocLayout;
