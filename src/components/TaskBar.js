import React, { useState, useContext, useEffect} from 'react';
import { TTLogo, DoubleArrow, Phone, FolderYellow, FolderBlue, Computer, NyanCat} from '../assets'
import { reset, themes, List, ListItem, Divider, Window, Button, Toolbar, WindowHeader, WindowContent,
          AppBar, TextField, LogoIcon, Cutout, Anchor} from 'react95';
import Menu from './Menu'

import { SiteContext } from './SiteContext'

function TaskBar(props) {

  const { setWindowOpen, setCurMenu } = useContext(SiteContext)

  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  let time
  if(hour > 12) {
    time = (hour - 12) + ':' + (minute < 10 ? '0' : '') +  minute + " PM"
  } else {
    time = hour + ':' + (minute < 10 ? '0' : '') + minute + " AM"
  }


  return (
    <AppBar style={{zIndex: 10000000, height: '50px'}}>
      <Toolbar className='SiteNav' style={{height: '35px'}}>
      <div className='Toolbar-Buttons'>
        <Menu src={TTLogo}>
          <ListItem onClick={() => {setWindowOpen('about', true)}}><span role='img' aria-label='Nerd emoji'>🤓</span> About</ListItem>
          <ListItem onClick={() => {setWindowOpen('what_we_do', true)}}><span role='img' aria-label='floppy disk'>💾</span> What We Do</ListItem>
        </Menu>
        <div style={{width: '5px'}}/>
        <Menu title='Projects'>
          <h3 style={{marginTop: '10px', marginBottom: '10px'}}>Active Projects</h3>
          <ListItem onClick={() => window.open('https://ideabank.tinkertech.dev')}><span role='img' aria-label='lightbulb'>💡</span> Idea Bank</ListItem>
          <Divider />
          <h3 style={{marginTop: '10px', marginBottom: '10px'}}>Coming Soon</h3>
          <ListItem disabled><span role='img' aria-label='Earth'>🌎</span> Environmental Monitor</ListItem>
          <ListItem disabled><span role='img' aria-label='Graduation Cap'>🎓</span> Embedded Systems Tutorials</ListItem>
        </Menu>
      </div>
      <div style={{padding: '1px'}}>
        <Cutout style={{padding: '9px 10px 9px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img className='ToolbarIcon' src={DoubleArrow} />
        <img className='ToolbarIcon' src={NyanCat} />
        <img className='ToolbarIcon' src={Computer} />
        <img className='ToolbarIcon' src={Phone} />
        <div style={{width: '5px'}} />
        <h2>{time}</h2>
        </Cutout>
      </div>
      </Toolbar>
    </AppBar>
  )
}

export default TaskBar
