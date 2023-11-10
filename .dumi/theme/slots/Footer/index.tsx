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
export { default } from 'dumi/theme-default/slots/Footer' /** dumi builtin themes */
