import React, { useState, useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes, List, ListItem, Divider, Window, Button, Toolbar, WindowHeader, WindowContent,
          AppBar, TextField, LogoIcon, Cutout} from 'react95';
import Menu from './components/Menu'
import { SiteContext } from './components/SiteContext'
import DraggableWindow from './components/DraggableWindow'
import TabbedWindow from './components/TabbedWindow'

import { TTLogo } from './assets'

import './App.css'

const ResetStyles = createGlobalStyle`
  ${reset}
`;



function App() {

  const { setWindowOpen } = useContext(SiteContext)

  return (
    <>
    <ResetStyles />
    <div className="App" style={{overflow: 'hidden'}}>
      <ThemeProvider theme={themes.default}>


        <div
        style={{
          padding: '5rem',
          background: 'teal',
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          zIndex: 10000
        }}
        >

          <TabbedWindow style={{width: '900px'}} title='What We Do' toolbar={null} contextName='what_we_do'>
            <p>
              TinkerTech isn't like most design and consulting companies. We do weird shit that no one else does. How weird? Look at this fucking site!
            </p>
          </TabbedWindow>

          <DraggableWindow title='About' contextName='about' style={{position: 'relative', top: '5px', right: '10px'}}>
            <p>
              TinkerTech Consulting was formed in 2015...
            </p>
          </DraggableWindow>

          <AppBar style={{zIndex: 10000000}}>
            <Toolbar className='SiteNav'>
            <div className='Toolbar-Buttons'>
              <Menu title='Projects'>
                <ListItem><span role='img' aria-label='lightbulb'>💡</span> Idea Bank</ListItem>
                <ListItem><span role='img' aria-label='Folder'>📁</span> My account</ListItem>
                <Divider />
                <ListItem disabled><span role='img' aria-label='Back Icon'>🔙</span> Logout</ListItem>
              </Menu>
              <Menu title='Windows'>
                <ListItem onClick={() => {setWindowOpen('about', true)}}><span role='img' aria-label='Nerd emoji'>🤓</span> About</ListItem>
                <ListItem onClick={() => {setWindowOpen('what_we_do', true)}}><span role='img' aria-label='floppy disk'>💾</span> What We Do</ListItem>
                <Divider />
                <ListItem disabled><span role='img' aria-label='lightbulb'>😴</span> Sleep</ListItem>
              </Menu>
            </div>
            <div>
              <img className='TTLogo' src={TTLogo} alt='TinkerTech Logo' />
            </div>

            </Toolbar>

          </AppBar>



        </div>
      </ThemeProvider>
    </div>
    </>
  );
}

export default App;
