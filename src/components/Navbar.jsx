import { ReactElement, useEffect } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import { RiNotification3Fill } from "react-icons/ri"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { usestateContext } from "../context/ContextProvider"
import avatar from '../data/avatar.jpg'

interface NavButtonProps{
  title: string
  color: string,
  dotColor: string,
  icon: ReactElement
  customFunc: ()=>void,
}


const NavButton =({title, icon, customFunc, color, dotColor}:NavButtonProps)=>(
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" style={{color}} className="relative text-xl rounded-full hover:bg-light-gray" onClick={customFunc}>
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 -right-1 top-0"/>
      {icon}
   
    </button>
  </TooltipComponent>
)
const Navbar = () => {
  const {setActiveMenu} = usestateContext()

  const handleToggleMenu = () => {
    setActiveMenu(); 
  };
  return (
    <div className="flex items-center justify-between md:mx-6">
      <NavButton
       title={"Menu"}
        color={"blue"}
         dotColor={""}
          icon={<AiOutlineMenu/>}
           customFunc={handleToggleMenu}
           />
      <div className="flex items-center gap-5">
      <NavButton
       title={"Cart"}
        color={"blue"}
         dotColor={""}
          icon={<FiShoppingCart/>}
           customFunc={handleToggleMenu}
           />

    <NavButton
       title={"Cart"}
        color={"blue"}
         dotColor={"#03C9D7"}
          icon={<BsChatLeft/>}
           customFunc={handleToggleMenu}
           />


    <NavButton
       title={"Cart"}
        color={"blue"}
          dotColor={"#03C9D7"}
          icon={<RiNotification3Fill/>}
           customFunc={handleToggleMenu}
           />


          <TooltipComponent content='Profile' position="BottomCenter">
          <div className="flex items-center cursor-pointer p-3 hover:bg:light-gray rounded-lg" onClick={handleToggleMenu}>
              <img src={avatar} className="rounded-full w-8 h-8"/>
              <p>
                <span className="text-gray-400 text-14">Hi,</span> {'  '}
                <span className="text-gray-400 ml-1 text-14">Joseph</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 ml-1 text-14"/>
           </div>
          </TooltipComponent>
         
      </div>
    </div>
  )
}

export default Navbar