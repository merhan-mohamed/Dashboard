import React from 'react';
import {MdOutlineCancel} from "react-icons/md";
import {BsCheck} from "react-icons/bs";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {themeColors} from "../data/dummy";
import { useStateContext } from '../contexts/ContextProvider';


const ThemeSettings = () => {
  const { setColor, setMode, CurrentMode, CurrentColor, setThemeSettings } = useStateContext();
  
  
  return (
    <div className='bg-half-transparent w-screen top-0 right-0 nav-item fixed'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark-[#484B52] w-400'>
      <div className='flex justify-between items-center p-4 ml-4'>
        <p className='font-semibold text-xl'>Settings</p>
        <button 
        type='button'
        style={{color: 'rgb(153, 171, 180)' , borderRadius:'50%'}}
        className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
        onClick={() => setThemeSettings(false)}
        >
          <MdOutlineCancel />
        </button>

      </div>
      <div className='flex-col border-t-1 border-color ml-4 p-4' >
        <p className='font-semibold text-lg'>
          Theme Options
        </p>
        <div>
          <input
          type='radio'
          id='light'
          name="theme"
          value='Light'
          onChange={setMode}
          checked={CurrentMode === 'Light'}
          className='ml-2 text-md cursor-pointer '
          />
          <label htmlFor="light">Light</label>
        </div>

        <div>
          <input
          type='radio'
          id='dark'
          name="theme"
          value='Dark'
          onChange={setMode}
          checked={CurrentMode === 'Dark'}
          className='cursor-pointer ml-2 text-md'
          />
          <label htmlFor="dark">Dark</label>
        </div>

      </div>

      <div className='flex-col border-t-1 border-color ml-4 p-4' >
      <p className='font-semibold text-lg'>
          Theme Colors
        </p>
      
        <div className='flex gap-3'>
          {themeColors.map((item, index) => (
            <TooltipComponent
            key={index}
            content={item.name}
            position='TopCenter'
            >
              <div className='relative flex items-center gap-5 cursor-pointer mt-2'>
                <button
                 type='button'
                 style={{backgroundColor:item.color}}
                 className='rounded-full w-10 h-10 cursor-pointer'
                 onClick={() => setColor(item.color)}
                
                 >
                  <BsCheck className={`ml-2 text-2xl text-white ${item.color === CurrentColor ? 'block' : 'hidden'}`}/>
                  

                </button>
              </div>


            </TooltipComponent>
          ))}

        </div>

      </div>
      </div>
    </div>
  )
}

export default ThemeSettings
