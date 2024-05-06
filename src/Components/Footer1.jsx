import React from 'react'
import Regs from '../assets/Icon.jpg'
import Share from '../assets/Vector.jpg'
import Home from '../assets/icon1.jpg'
import { Link } from 'react-router-dom';
import { Image } from '@mantine/core';

const Footer1 = () => {
  return (
    <div  style={{height:'0px' ,padding:"32px", width:"100vw",position: "fixed",  left: 0, zIndex: 999 ,bottom:"0",backgroundColor:" white",borderTop:"#D3D3D3",paddingTop:"10px"}}>
      
       <div style={{display:"flex",justifyContent:"space-between" , alignItems:"center", width:"308px",}}>
        {/* <Avatar src={null} alt="no image here" color="indigo" /> */}
        <Link to="/register">
        <Image src={Regs} alt='register' style={{ height: '30px', width: 'auto' }} />
        </Link>
        <Link to="/departure">
        <Image src={Share} alt='departure' style={{ height: '30px', width: 'auto' }} />
        </Link>
        <Link to="/housekeeping">
        <Image src={Home} alt='housekeeping' style={{ height: '30px', width: 'auto' }} />
        </Link>
        </div>

        

    </div>
  )
}

export default Footer1
