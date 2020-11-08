import React, { useState } from 'react'
import{ Anchor, Tab, Tabs, TabBody, Fieldset, NumberField, Checkbox, Cutout, Radio } from 'react95'
import DraggableWindow from './DraggableWindow'
import RadioTabBody from './RadioTabBody'
import { MicroscopeNES, MicroscopeVGA, PCBAssm, PCBAssmHQ, OldComputer, ETASImg } from '../assets'

function WhatWeDo(props) {
  const [activeTab, setActiveTab] = useState(0)
  const { tabs, style } = props
  const [checkedValue, setCheckedValue] = useState('hardware')
  const [pcbimg, setPcbimg] = useState(PCBAssm)
  const listPad = '5px'

  function handleChange(e) {
    setCheckedValue(e.target.value)
  }

  const pcbsrc = `url(${pcbimg})`

  const options = [
    {
      label: '📟 Hardware',
      value: 'hardware',
      contents: 'We can take your idea from a paper napkin sketch to a full schematic, bill of materials, and PCB layout, and assembled prototype.',
      img: PCBAssm,
      imgHQ: PCBAssmHQ
    },
    {
      label: '💻 Firmware',
      value: 'firmware',
      contents: 'TinkerTech specializes in developing bare metal C/C++ firmware development for PIC and AVR microcontrollers, but we can work with other hardware if needed. With years of experience developing for realtime and Internet of Things applications, we can make sure your device is fast, responsive, optimized for battery life, and ready for FCC testing.',
      img: OldComputer,
      imgHQ: OldComputer
    },
    {
      label: '🤖 Mechanical',
      value: 'mechanical',
      contents: 'Need an enclosure for that widget of yours? We can help with that too. We can generate 3D solid models, detailed engineering drawings, and 3D printed rapid prototypes. We have experience in designing for injection molding, as well, so we\'ll be able to help you be ready to bring your product to scale.',
      img: ETASImg,
      imgHQ: ETASImg
    }
  ]

  return (
    <DraggableWindow title='What We Do' toolbar={null} contextName='what_we_do' style={{width: '900px', height: '525px'}}>
      <>
        <Tabs value={activeTab} onChange={value => setActiveTab(value)}>
          <Tab value={0}>Product Development</Tab>
          <Tab value={1}>Engineering</Tab>
          <Tab value={2}>Custom fabrication</Tab>
          <Tab value={3}>Web Development</Tab>
          <Tab value={4}>Graphic Design</Tab>
        </Tabs>
        <div style={{height: '400px'}}>
          {activeTab === 0 &&
          <TabBody>
          <div style={{display: 'flex'}}>
            <div style={{padding: '0px 15px 0px 15px'}}>
              We specialize in product design and implementation for embedded
              systems. If you have a device or an idea for a device that automates,
              blinks, moves, talks to other devices, logs data, or any other myriad
              of applications, we can help you turn that idea into a prototype or
              refine an existing prototype into a commercializable product.

              Examples of past projects we've worked on include:

              <ul style={{paddingLeft: '20px', paddingTop: '20px'}}>
                <li style={{paddingBottom: listPad}}>
                  &#8227;&nbsp;
                  <Anchor href="https://www.dynamicperception.com/Digital-NMX-timelapse-and-video-motion-controller-p/dp-nmx-pro.htm" target="_blank">
                    3-Axis Bluetooth connected stepper motor controller
                  </Anchor>
                </li>
                <li style={{paddingBottom: listPad}}>&#8227;&nbsp;CAN bus networked magnetic field sensors for three-dimensional position sensing</li>
                <li style={{paddingBottom: listPad}}>&#8227;&nbsp;Biometrically secured controlled substance dispenser</li>
                <li style={{paddingBottom: listPad}}>&#8227;&nbsp;Optical ground-to-air communications system </li>
                <li style={{paddingBottom: listPad}}>
                  &#8227;&nbsp;
                  <Anchor href="http://tinkertech.io/downloads/tinkerbot_V2.0.0_instructions.pdf" target="_blank">
                    Educational Robot Kits
                  </Anchor>
                </li>
              </ul>
            </div>
            <div>
              <Cutout style={{ width: '400px', height: '300px', backgroundSize: 'cover', backgroundImage: `url(${MicroscopeNES})` }}>
              </Cutout>
            </div>
          </div>
          </TabBody>
          }

          {activeTab === 1 && (
            <RadioTabBody options={options}/>
          )}
          {activeTab === 2 &&
            <TabBody>
            </TabBody>
          }
          {activeTab === 3 && <TabBody></TabBody>}
          {activeTab === 4 && <TabBody></TabBody>}
          {activeTab === 5 && <TabBody></TabBody>}
        </div>
      </>
    </DraggableWindow>
  )
}

export default WhatWeDo
