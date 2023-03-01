import React from 'react'

const App = () => {

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


// export default App
export { default } from 'dumi/theme-default/slots/Footer'