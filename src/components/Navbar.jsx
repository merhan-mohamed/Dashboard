import React, { useEffect } from 'react';
import {useStateContext} from "../contexts/ContextProvider";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { BsChatLeft } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from '.';



const NavButton = ({title, customFun, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BootomCenter">
    <button className='relative rounded-full p-3 hover:bg-light-gray text-xl'
    style={{color}} onClick={customFun}>
      <span className='inline-flex w-2 h-2 absolute right-2 top-2 rounded-full text-xs' style={{ background: dotColor}}></span>
        {icon}
    </button>
  </TooltipComponent>


)

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, handleClick, setScreenSize, ScreenSize, CurrentColor} = useStateContext();

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleSize)
    handleSize();
    return () => window.removeEventListener("resize, handleSize")

  },[]);

  useEffect(()=> {
    if(ScreenSize <= 900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }

  },[ScreenSize]);

  
  return (
    <div className='flex justify-between p-2 relative md:mx-6'>
      <NavButton title= "menu" color={CurrentColor} icon={<AiOutlineMenu/>} customFun={()=> setActiveMenu(!activeMenu)}/>

      <div className='flex'>
      <NavButton title= "Cart" color={CurrentColor} icon={<FiShoppingCart />} customFun={()=> handleClick("cart")}/>

      <NavButton title="Chat" dotColor="#03C9D7"  color={CurrentColor} icon={<BsChatLeft />} customFun=
      {()=> handleClick("chat")}/>

        <NavButton title="Notification" dotColor="#03C9D7"  color={CurrentColor}  icon={<RiNotification3Line />} customFun=
        {()=> handleClick("notification")} />
      </div>

      <TooltipComponent content="Profile" position="BottomCenter">
      <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
      onClick={()=> handleClick("userProfile")}>
        <img src={avatar}  className="rounded-full w-8 h-8"/>
        <p>
          <span className="text-gray-400 text-14">Hi,</span> {' '}
          <span lassName="text-gray-400 font-bold ml-1 text-14">Michael</span>
        </p>
        <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>
      </TooltipComponent>
      
      {isClicked.cart && (<Cart />)}
      {isClicked.chat && (<Chat />)}
      {isClicked.userProfile && (<UserProfile />)}
      {isClicked.notification && (<Notification />)}
    </div>
  )
}

export default Navbar
