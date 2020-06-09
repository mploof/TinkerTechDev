import React, { useContext } from 'react'
import { Anchor, Button } from 'react95';
import DraggableWindow from './DraggableWindow'
import { SiteContext } from './SiteContext'

function About() {

  const { setWindowOpen } = useContext(SiteContext)
  const contextName = 'about'
  function handleClick() {
    setWindowOpen(contextName, false)
  }
  return (
    <DraggableWindow title='About' contextName={contextName}
      style={{width: '350px', height: '450px', left: '50%', marginLeft: '-175px', top: '50%', marginTop: '-200px'}}
    >
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <ul>
            <li>Name: TinkerTech</li><br/>
            <li>Version: 3.0</li><br/>
            <li style={{paddingBottom: '10px'}}>Change History:</li>
            <li><ul>
              <li>3.0 - TinkerTech's makerspace feature was deprecated, but it now has better design capabilities than ever before, along with the same enhanced fabrication capacity. Please see What We Do for more information about these capabilities.</li><br/>
              <li>2.0 - In 2018 TinkerTech's feature set was expanded to include a <Anchor href='http://bit.ly/tinkertech-biz' target='_blank'>makerspace</Anchor> and enchanced fabrication capabilities.</li><br/>
              <li>1.0 - TinkerTech was initially released in 2015 as an independent consulting business.</li><br/>
            </ul></li>
          </ul>
        </div>
        <Button onClick={handleClick}>Close</Button>
      </div>
    </DraggableWindow>
  )
}

export default About
