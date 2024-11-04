// import React from 'react'

// import Fortune from '../assets/fj.jpg';
// import Icon from '../assets/Ellipse 7.jpg'
// import { TextInput, Select, Button,Image ,Avatar,Footer,Flex,Badge,Text,Card,Group,} from '@mantine/core';


// const Header = () => {
//   return (
    
//     // <div style={{ backgroundColor: '#fff', width: "375px", height: "70px", top: "44px", display: "flex", justifyContent: "space-between" , boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',}}>
//     //     {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
//     //       <Image src={Fortune} alt='logo' style={{ height: '70px ', width: "14%", marginLeft: "10px", padding:"10px" }} />
//     //       {/* <Avatar color="orange" radius="xl" size={60}   style={{ marginRight: "10px", padding:"10px"}}>F</Avatar> */}
//     //     {/* </div> */}
//     //   </div>
//   <div
//      style={{
//         backgroundColor: '#fff',
//         width: '100%',
//         height: '70px',
//         position: 'fixed',
//         top: 0,
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',
//         zIndex: 1000,
//       }}
//     >
//       <Image src={Fortune} alt="logo" style={{ height: 'auto', width: '15%', marginLeft: '10px' }} />

//   </div>
    
//   )
// }

// export default Header
import React from 'react';
import Fortune from '../assets/fj.jpg';
import { Image } from '@mantine/core';

const Header = () => {
  return (
    <header style={styles.header}>
      <Image
        src={Fortune}
        alt="logo"
        style={styles.logo}
      />
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#fff',
    width: '100%',
    height: '70px', // Default header height
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    padding: '0 20px',
  },
  logo: {
    height: 'auto',
    width: '15%', // Default for large screens
    maxWidth: '80px', // Maximum size for large screens
    minWidth: '60px',  // Minimum size for smaller screens
  },
};

// Inject media query styles for responsiveness
const mediaQueryStyles = `
  @media (max-width: 1200px) {
    header {
      height: 60px; /* Adjust header height for medium-sized screens */
    }
    img {
      width: 13%; /* Slightly reduce image size */
      max-width: 100px;
    }
  }
  
  @media (max-width: 992px) {
    header {
      height: 50px; /* Adjust header height for tablets */
    }
    img {
      width: 12%;
      max-width: 90px;
    }
  }

  @media (max-width: 768px) {
    header {
      height: 45px; /* Adjust header height for small tablets */
    }
    img {
      width: 10%;
      max-width: 80px;
    }
  }

  @media (max-width: 576px) {
    header {
      height: 40px; /* Adjust header height for mobile devices */
    }
    img {
      width: 20%; /* Increase image size for visibility */
      max-width: 70px;
    }
  }

  @media (max-width: 400px) {
    header {
      height: 35px; /* Adjust header height for very small screens */
    }
    img {
      width: 30%; /* Increase image size */
      max-width: 60px;
    }
  }
`;

// Dynamically inject media queries into the page
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default Header;
