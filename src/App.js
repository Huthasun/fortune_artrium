import React, { useEffect, useState } from 'react'
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
// import UpdatedBookings from './Components/UpdateBookings/UpadatedBookings';
import Newregiter from './Components/UpdateBookings/Newregiter';
import SubmitDetails from './Components/UpdateBookings/SubmitDetails';
import Footer1 from './Components/Footer1';
import MainLayout from './MainLayout/MainLayout';
import Searchbar from './Components/USerManagement/Searchbar';
import Usermanagement from './Components/USerManagement/Usermanagement';
import GuestRegistration from './Components/GuestRegistration';
import GuestRecords from './Components/UpdateBookings/GuestRecords';
import Primaryguestdbtable from './Components/Admin/Primaryguestdbtable';
import BookingDetailsTable from './Components/Admin/BookingGuestsdbtable';
import AdminLanding from './Components/Admin/AdminLanding';
import FindGuest from './Components/Cards/FindGuest';
import PrivateRoutes from './utils/PrivateRoutes';
import ExtendBooking from './Components/UpdateBookings/ExtendBooking';
import TabsOverview from '../src/Components/UpdateBookings/TabsOverview';



// import Footer from './Components/Footer';
const App = () => {
  // const isAdmin = window.localStorage.getItem('role') === 'admin';
  // console.log(isAdmin);
  const [isAdmin, setisAdmin] = useState(false)
  useEffect(()=>{
    window.localStorage.getItem('role') === 'admin' ? setisAdmin(true): setisAdmin(false)

  },[isAdmin])
  console.log(isAdmin);

  const PrivateRoutes = () => {


    const z = localStorage.getItem("username")

    let auth = { "token": z !== null || undefined ? true : false}
  return (
   auth.token ? <MainLayout/> : <Navigate to="/login"/>
  )
}

  

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
        {/* <Primaryguestdbtable/> */}
      
      
        
     
        <Router>
          <Routes>
          
          <Route exact path="/login"  element={<LoginForm/>}/>
          {/* <Route path="/app/adminlanding" element={<AdminLanding/>}/> */}
          {/* <Route path="/app/adminlanding" element={<AdminLanding />}> */}


          <Route
              path="/app/adminlanding" element={<AdminLanding />}
            >
          <Route path="pmy" element={<Primaryguestdbtable/>}/>
          <Route path="btd" element={<BookingDetailsTable/>}/>
        </Route>

        
          <Route exact path="/app" element={<PrivateRoutes/>}> 
           {/* <Route path="/register" element={<Register/>} />  */}
           <Route path="tabs" element={<TabsOverview/>} />

              <Route path="bookings" element={<Departure/>} />

              <Route path="register" element={<Newregiter/>}/>
              {/* <Route path="updatebooking" element={<UpdatedBookings/>} /> */}
              <Route path="guestdetails" element={<GuestRecords/>}/>
              <Route path="submitdetails" element={<SubmitDetails/>}/>
              <Route path="search" element={<Searchbar/>}/>
              <Route path="user" element={<Usermanagement/>}/>
              <Route path="guestregistration" element={<GuestRegistration/>}/>
              <Route path="findguest" element={<FindGuest/>}/>
              <Route path="extend" element={<ExtendBooking/>}/>
              

              

          
       


          </Route>

          {/* <Route exact path='/' element={ window.localStorage.getItem('username')!==undefined ? <Navigate
           to={'/app/bookings'}/>:<Navigate to='/login'/>}/>
            */}
 <Route exact path="/" element={
              window.localStorage.getItem("role") === "admin"
                ? (<Navigate to="/app/adminlanding"  />): ( <Navigate to="/login"  /> )
            } />
          
          
          </Routes>

         
        </Router>
         
        
        
        
      </MantineProvider>
      {/* <Footer1/> */}

     
    </div>
  )
}

export default App