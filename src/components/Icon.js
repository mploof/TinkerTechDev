import React from 'react'

function Icon(props) {
  const { className, src, text, onClick } = props
  const fullClassName = className + ' Icon'
  return (
    <div className={fullClassName} onClick={onClick}>
      <div style={{height: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={src} height='100%' />
      </div>
      <div style={{height: '10%'}}/>
      <div style={{height: '15%', textAlign: 'center'}}>
        {text}
      </div>
    </div>
  )
}

export default Icon
