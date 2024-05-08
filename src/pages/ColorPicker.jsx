import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change = (args) => {
  return (
  document.getElementById('preview').style.backgroundColor = 
  args.currentValue.hex
  )
}

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header title="Color Picker" category="App"/>

    <div className="text-center">
    <div id='preview'/>
    <div className="flex justify-center algin-items-center gap-20 flex-wrap"> 
    <div>
      <p className="text-2xl font-semibold mt-2 mb-4">
        Inline Pallete
      </p>
      <ColorPickerComponent
          id="inline-pallete"
          mode='Palette'
          modeSwitcher={false}
          showButtons={false}
          inline
          change={change}
      />
      
    </div>
    <div>
      <p className="text-2xl font-semibold mt-2 mb-4">
        Inline Picker
      </p>
      <ColorPickerComponent
          id="Picker"
          mode='Picker'
          modeSwitcher={false}
          showButtons={false}
          inline
          change={change}
      />
      
    </div>

    </div>
    </div>
    </div>
  )
}

export default ColorPicker
