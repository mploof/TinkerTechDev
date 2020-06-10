import React, { useState, useContext, useEffect} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes, List, ListItem, Divider, Window, Button, Toolbar, WindowHeader, WindowContent,
          AppBar, TextField, LogoIcon, Cutout, Anchor} from 'react95';

import { SiteContext } from './components/SiteContext'
import DraggableWindow from './components/DraggableWindow'
import WhatWeDo from './components/WhatWeDo'
import TaskBar from './components/TaskBar'
import About from './components/About'
import Icon from './components/Icon'
import Contact from './components/Contact'

import { TTLogo, DoubleArrow, Phone, FolderYellow, FolderBlue, Computer, NyanCat} from './assets'

import './App.css'

const ResetStyles = createGlobalStyle`
  ${reset}
`;



function App() {

  const { setWindowOpen, setMenu } = useContext(SiteContext)

  let skipClear = false;

  function clearMenu() {
    if(skipClear)
      skipClear = false
    else
      setMenu(null)
  }

  return (
    <>
    <ResetStyles />
    <div className="App" style={{overflow: 'hidden'}}>
      <ThemeProvider theme={themes.default}>

      <TaskBar />

        <div
        style={{
          background: 'teal',
          height: '100vh',
          width: '100vw',
          marginTop: '50px',
          position: 'absolute',
          overflow: 'hidden',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={clearMenu}
        >
          <div className='IconGrid'>
            <Icon src={Computer} text={'What We Do'} onClick={() => setWindowOpen('what_we_do', true)}/>
            <Icon src={FolderYellow} text={'Projects'} onClick={() => {skipClear = true; setMenu('Projects')}}/>
            <Icon src={Phone} text={'Contact Us'} onClick={() => setWindowOpen('contact', true)}/>
            <Icon src={NyanCat} text={'About'} onClick={() => setWindowOpen('about', true)}/>
          </div>
          <div className='DesktopDivider'/>
          <div className='SplashLogo'>
            <img src={TTLogo} width='100%'/>
          </div>
          <Contact />
          <WhatWeDo />
          <About />




        </div>
      </ThemeProvider>
    </div>
    </>
  );
}

export default App;
