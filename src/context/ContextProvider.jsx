import {createContext, useContext,useState} from 'react'
interface dashboardState{
  userProfile: boolean,
  notifications: boolean,
  cart: boolean,
  chart: boolean,
  activeMenu: boolean,
  setActiveMenu: ()=> void;
}

interface clickedState{
  
}
const StateContext = createContext<dashboardState>({
  userProfile: false,
  notifications: false,
  cart: false,
  chart: false,
  activeMenu: true, 
  setActiveMenu: ()=>{}
})
const ContextProvider = ({children}:any) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [IsClicked,setIsclicked] = useState(StateContext)
  const toggleActiveMenu = () => setActiveMenu((prev) => !prev);

  const contextValue:dashboardState ={
    userProfile: false,
    notifications: false,
    cart: false,
    chart: false,
    activeMenu: activeMenu,
    setActiveMenu: toggleActiveMenu,
  }
  return (
  <StateContext.Provider value={contextValue}>
      {children}
  </StateContext.Provider>
  )
}
export const usestateContext =()=> useContext(StateContext)

export default ContextProvider
