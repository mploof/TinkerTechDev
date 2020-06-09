import React, { useContext } from 'react';
import { List, Button } from 'react95';
import { SiteContext } from './SiteContext'

function Menu(props) {
  const { curMenu, setCurMenu } = useContext(SiteContext)
  const { title, children, src } = props

  function handleClick() {
    // If this menu is open, close it
    if(curMenu === title) {
      setCurMenu(null);
    } else {  // If no menu is open, or some other menu is oepn, switch it to this one
      setCurMenu(title)
    }
  }

  function handleClose() {
    setCurMenu(null);
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {(curMenu === title) && (
        <List horizontalAlign="left" verticalAlign="bottom" open={curMenu === title} onClick={handleClose}>
          {children}
        </List>
      )}
      <Button onClick={handleClick} active={curMenu === title} style={{ height: '35px', fontWeight: 'bold' }}>
        {src && <img src={src} height='25px' />}
        {title}
      </Button>
    </div>
  );
}

export default Menu
