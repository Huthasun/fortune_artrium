import React from 'react'
import { BrowserRouter as Router, Routes,} from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import MainLayout from './MainLayout/MainLayout'
import Register from './Components/Register'
import Departure from './Components/Departure'
import { Route } from 'react-router-dom'
import HouseKepping from './Components/HouseKeeping/HouseKepping'
const App = () => {
  return (
    <div className='App'>
      <MantineProvider>
         <MainLayout/>

        {/* <Register/> */}
  
        {/* <Departure/> */}
        
        
      </MantineProvider>
     
    </div>
  )
}

export default App