// theme docs: https://d.umijs.org/theme
import React from 'react'

const LocalFooter = () => {
  return (
    <div style={{
      width: '100%',
      height: 0,
      position: 'fixed',
      left: 0,
      bottom: 0,
      zIndex: 12,
      background: 'red'
    }}></div>
  )
}

// export default LocalFooter
// export { default } from 'dumi/theme-default/slots/Footer' /** dumi builtin themes */

import Footer from 'dumi/theme-original/slots/Footer' /** three parties themes */
export default () => (
  <div>
    <p style={{ fontSize: 24, color: 'blue' }}>下面是主题包的 Footer</p>
    <Footer />
  </div>
)

/**
 * 总结
 * dumi/theme-original/{layouts,builtins,slots}/xx 为三方主题包
 * dumi/theme-default/{layouts,builtins,slots}/xx 为 dumi 内置主题包
 * dumi/theme/{layouts,builtins,slots}/xx 为当前项目 .dumi/theme/xx 里的文件主题
 */
