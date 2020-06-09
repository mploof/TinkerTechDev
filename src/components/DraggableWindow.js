import React, { useContext, useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import { Window, WindowHeader, Button, WindowContent, Toolbar } from 'react95'
import { SiteContext } from './SiteContext'

function DraggableWindow(props) {

  const { title, toolbar, children, contextName, style } = props;
  const { registerWindow, isOpen, setWindowOpen, getZIndex, setActiveWindow} = useContext(SiteContext)
  let visible = isOpen(contextName) === true ? true : false
  const [thisZ, setThisZ] = useState(0)

  // Register this window with the global context and start hidden
  useEffect(() => {
    registerWindow(contextName)
  }, [])

  function handleClick() {
    setWindowOpen(contextName, false)
  }

  function handleFocus() {
    setActiveWindow(contextName)
  }

  return (
    <Draggable onStart={handleFocus}>
      <Window style={{zIndex: getZIndex(contextName), position: 'fixed', ...style, visibility: visible ? 'visible' : 'hidden'}}>
        <WindowHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>{title}</span>
          <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square onClick={handleClick}>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
          </Button>
        </WindowHeader>
        <Toolbar>
          {toolbar}
        </Toolbar>
        <WindowContent>
          {children}
        </WindowContent>
      </Window>
    </Draggable>
  )
}

export default DraggableWindow
