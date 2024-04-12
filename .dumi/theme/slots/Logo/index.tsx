import * as React from 'react';
import { toUpper, get } from 'lodash'
import styles from './index.modules.less';
import { useSiteData } from 'dumi'

export default () => {
  const siteData = useSiteData();
  return (
    <div className={styles['my-foo']}>
      {toUpper(get(siteData, 'themeConfig.name', 'dumi'))}
    </div>
  )
}
