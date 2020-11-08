import React, { useEffect, useState} from 'react'
import { Cutout, Fieldset, Radio, TabBody } from 'react95'

function RadioTabBody(props) {

  const { options } = props
  const [curImg, setCurImg] = useState({})
  const [checkedValue, setCheckedValue] = useState('')

  useEffect(() => {
    // On mount, set the current image for each item to the low-res version
    options.map(option => {
      setCurImg(prev => ({
          ...prev,
          [option.value]: option.img
      }))
    })
    // Set the first radio button active
    setCheckedValue(options[0].value)
  }, [])

  function mouseEnter(option) {
    setCurImg(prev => ({
        ...prev,
        [option.value]: option.imgHQ
    }))
  }

  function mouseLeave(option) {
    setCurImg(prev => ({
        ...prev,
        [option.value]: option.img
    }))
  }

  const buttons = options.map(option => (
    <>
      <Radio
      checked={checkedValue === option.value}
      onChange={handleChange}
      value={option.value}
      label={option.label}
      name="options"
      />
      <br />
    </>
  ))

  const activeOption = options.find(option => checkedValue === option.value)
  console.log(activeOption)
  function handleChange(e) {
    setCheckedValue(e.target.value)
  }

  return (
    <TabBody style={{display: 'flex'}}>

    <div>
      <Fieldset label="Areas" style={{width: '150px'}}>
        {buttons}
      </Fieldset>
    </div>

    {activeOption !== undefined &&
      <div style={{marginLeft: '30px'}}>
        <Fieldset label={activeOption.label}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{paddingRight: '10px'}}>
            <p>
              {activeOption.contents}
            </p>
          </div>
          <div style={{height: '300px', width: '300px'}}>
          <Cutout
            className='ImgCutout'
            onMouseEnter={() => mouseEnter(activeOption)}
            onMouseLeave={() => mouseLeave(activeOption)}
            style={{ width: 'inherit', height: 'inherit', backgroundSize: 'cover', backgroundImage: `url(${curImg[activeOption.value]})` }}
          />
          </div>
        </div>
        </Fieldset>
      </div>
    }

    </TabBody>
  )
}

export default RadioTabBody
