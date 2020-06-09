import React, { useState, useEffect }from 'react'

const SiteContext = React.createContext()

function SiteContextProvider({children}) {
  const [curMenu, setCurMenu] = useState('')
  const [openWindows, setOpenWindows] = useState({})
  const [windowCount, setWindowCount] = useState(0)
  const [windowOrder, setWindowOrder] = useState([])

  function registerWindow(contextName) {
    setOpenWindows({[contextName]: false})
    setWindowCount(prevCount => prevCount + 1)
    setWindowOrder( (prevNames) => [...prevNames, contextName] )
  }

  function getZIndex(contextName) {
    return windowOrder.findIndex(name => name === contextName) + 100 // Start window indicies at 100 to make sure they're above the background
  }

  function setWindowOpen(contextName, visible) {
    setOpenWindows(prev => ({...prev, [contextName]: visible}))
    setActiveWindow(contextName)
  }

  function setActiveWindow(contextName) {
    let newOrder = windowOrder.filter(item => item !== contextName)
    newOrder.push(contextName)
    setWindowOrder(newOrder)
  }

  function isOpen(contextName) {
    return (
      openWindows[contextName]
    )
  }

  function setMenu(menuName) {
    console.log(menuName)
    setCurMenu(menuName)
  }


  useEffect(() => {
    console.log(openWindows)
  }, [openWindows])

  useEffect(() => {
    console.log(curMenu)
  }, [curMenu])


  return(
    <SiteContext.Provider value={{
        curMenu, setCurMenu,
        registerWindow, isOpen,
        openWindows, setWindowOpen,
        setActiveWindow, getZIndex,
        windowCount,
        setMenu
      }}>
      {children}
    </SiteContext.Provider>
  )
}

export {SiteContextProvider, SiteContext}
