import React, { useContext } from 'react'
import DraggableWindow from './DraggableWindow'
import { SiteContext } from './SiteContext'
import { Anchor, Button } from 'react95'


function Contact() {

  const { setWindowOpen } = useContext(SiteContext)
  const contextName = 'contact'
  function handleClick() {
    setWindowOpen(contextName, false)
  }

  return (
    <DraggableWindow title='Contact Us' contextName={contextName}
      style={{width: '350px', height: '180px', left: '50%', marginLeft: '-175px', top: '50%', marginTop: '-200px'}}
    >
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <ul>
          <li>Email: <Anchor href="mailto:consulting@tinkertech.io?subject=Info%20Request&body=Dear%20Tinkering%20Sir%20or%20Madam,%0D%0A%0D%0APlease%20find%20below%20the%20details%20of%20my%20thrilling%20idea.%20I%20am%20desirous%20of%20the%20following%20services,%20which%20will%20aid%20in%20bringing%20this%20marvel%20to%20the%20world%20forthwith:%0D%0A%0D%0A">consulting@tinkertech.io</Anchor></li><br/>
          <li>Phone: <Anchor href="tel:7347078019">(734) 707-8019</Anchor></li><br/>
        </ul>
      </div>
        <div>


        </div>
        <Button onClick={handleClick}>Close</Button>
      </div>
    </DraggableWindow>
  )
}

export default Contact
