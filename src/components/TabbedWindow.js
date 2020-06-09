import React, { useState } from 'react'
import{ Tab, Tabs, TabBody, Fieldset, NumberField, Checkbox } from 'react95'
import DraggableWindow from './DraggableWindow'

function TabbedWindow(props) {
  const [activeTab, setActiveTab] = useState(0)
  const { tabs, style } = props

  return (
    <DraggableWindow {...props} style={{...style}}>
      <>
        <Tabs value={activeTab} onChange={value => setActiveTab(value)}>
          <Tab value={0}>Engineering</Tab>
          <Tab value={1}>Design </Tab>
          <Tab value={2}>Graphic Design</Tab>
        </Tabs>
        <div style={{ height: 300 }}>
          {activeTab === 0 && (
          <TabBody>
          <Fieldset label="Order:">
          <div style={{ padding: '0.5em 0 0.5em 0' }}>Amount:</div>
          <NumberField width={'100%'} min={0} value={0} onChange={() => null} />
          <Checkbox
            style={{ marginTop: '1rem' }}
            name="shipping"
            value="fast"
            label="Fast shipping"
            onChange={() => null}
            defaultChecked={true}
          />
          </Fieldset>
          </TabBody>
          )}
          {activeTab === 1 && <TabBody>Accesories stuff here</TabBody>}
          {activeTab === 2 && <TabBody>Clothing stuff here</TabBody>}
        </div>
      </>
    </DraggableWindow>
  )
}

export default TabbedWindow
