import React from 'react'
import { BrowserRouter as Router, Route,Routes,Navigate} from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import Register from './Components/Register'
import Departure from './Components/Departure'
// import { Route } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm';
import HouseKepping from './Components/HouseKeeping/HouseKepping';
import RegisterationCard from './Components/Cards/RegisterationCard';
import PendigCard from './Components/Cards/PendigCard';
import CompletedCard from './Components/Cards/CompletedCard';
import Header from './Components/Header';
import UpdatedBookings from './Components/UpdateBookings/UpadatedBookings';
import Newregiter from './Components/UpdateBookings/Newregiter';
import SubmitDetails from './Components/UpdateBookings/SubmitDetails';
import Footer1 from './Components/Footer1';
import MainLayout from './MainLayout/MainLayout';
import Searchbar from './Components/USerManagement/Searchbar';
import Usermanagement from './Components/USerManagement/Usermanagement';
import GuestRegistration from './Components/GuestRegistration';
import PrivateRoutes from './utils/PrivateRoutes';


// import Footer from './Components/Footer';
const App = () => {

  return (
    <div className='App'>
      <MantineProvider>
         {/* <MainLayout/> */}
         {/* <LoginForm/> */}

        {/* <Register/> */}
        {/* <Footer/>          */}
        {/* <Departure/> */}
        {/* <HouseKepping/> */}
        {/* <RegisterationCard/> */}
        {/* <PendigCard/> */}
        {/* <CompletedCard/> */}
        {/* <Header/> */}
        {/* <UpdatedBookings/> */}
        {/* <Newregiter/> */}
        {/* <SubmitDetails/> */}
        
        
        <Router>
          <Routes>
          
          <Route exact path="/login"  element={ 
           <LoginForm/>}/>
          <Route exact path="/app" element={<PrivateRoutes/>}>
          {/* <Route path="/register" element={<Register/>} /> */}
          <Route path="bookings" element={<Departure/>} />
          <Route path="updatebooking" element={<UpdatedBookings/>} />
          <Route path="guestdetails" element={<RegisterationCard/>}/>
          <Route path="register" element={<Newregiter/>}/>
          <Route path="submitdetails" element={<SubmitDetails/>}/>
          <Route path="search" element={<Searchbar/>}/>
          <Route path="user" element={<Usermanagement/>}/>
          <Route path="guestregistration" element={<GuestRegistration/>}/>
       


          </Route>

          <Route exact path='/' element={ window.localStorage.getItem('username')!==undefined ? <Navigate
           to={'/app/bookings'}/>:<Navigate to='/login'/>}/>

          
          
          </Routes>

         
        </Router>
        
        
        
        
      </MantineProvider>
      {/* <Footer1/> */}

     
    </div>
  )
}

export default App