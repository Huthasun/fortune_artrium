import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button, Image ,PasswordInput} from '@mantine/core';
import Fortune from '../assets/fj.jpg'
import '../../src/Styling.css'


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in with username:', username, 'and password:', password);

    navigate('/bookings')
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot Password?');
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', marginTop: 100 }}>
      <div style={{ }} >
        <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
        <Image src={Fortune} alt='logo' style={{width:200}}/>


        </div>

        <h1 style={{ marginLeft: "20px" }}>Login</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextInput
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          style={{ width: '90%', marginBottom: 15, marginLeft: "20px" }} // Set width to 100% and add margin bottom
        />
        {/* <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          style={{ width: '90%', marginBottom: 15, marginLeft: '20px' }} // Set width to 100% and add margin bottom
        /> */}
        <PasswordInput error="Invalid password" style={{width:"90%",marginBottom:15,marginLeft:"20px"}}
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button
          variant="link"
          style={{display:"flex",justifyContent:"flex-end", color: "#54B4D3" , lineHeight: '5'}}
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </Button>
        <Button
          variant="filled"
          // color="#d0021b"
          fullWidth
          style={{ width: '90%', marginLeft: "20px", marginBottom: 15,backgroundColor:"red" }} // Set width to 100%
          onClick={handleLogin}
        >
          Login
        </Button>
        
      </div>
    </div>
  );
};

export default LoginForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TextInput, Button, Image, PasswordInput } from '@mantine/core';
// import Fortune from '../assets/fj.jpg';
// import axios from 'axios';
// import '../../src/Styling.css';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     axios.post('http://192.168.29.68:5000/api/userLogin', { username, password })
//       .then(response => {
//         if ( response.data.message==="login succesfull") {
//           navigate('/bookings');
//         }
//         // console.log('Login successful:', response.data);
//         else{
//           navigate('/');
//         }
//       })
//       .catch(error => {
//         console.error('Login failed:', error);
//         setError('Incorrect username or password'); // Set error message for incorrect credentials
//       });
//   };

//   const handleForgotPassword = () => {
//     console.log('Forgot Password?');
//   };

// //   return (
// //     <div style={{ maxWidth: 400, margin: 'auto', marginTop: 100 }}>
// //       <div style={{ textAlign: 'start' }}>
// //         <div id='logo'>
// //           <Image src={Fortune} alt='logo' style={{ height: '100' }} />
// //         </div>
// //         <h1 style={{ marginLeft: "20px" }}>Login</h1>
// //       </div>
// //       <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
// //         <TextInput
// //           label="Username"
// //           placeholder="Enter your username"
// //           value={username}
// //           onChange={(event) => setUsername(event.currentTarget.value)}
// //           style={{ width: '90%', marginBottom: 15, marginLeft: "20px" }}
// //         />
// //         <PasswordInput
// //           style={{ width: "90%", marginBottom: 15, marginLeft: "20px" }}
// //           label="Password"
// //           // type="password"
// //           placeholder="Enter your password"
// //           value={password}
// //           onChange={(event) => setPassword(event.currentTarget.value)}
// //         />
// //         {error && <div style={{ color: 'red', marginBottom: 15, marginLeft: "20px" }}>{error}</div>}
// //         <Button
// //           variant="link"
// //           style={{ display: "flex", justifyContent: "flex-end", color: "#54B4D3", lineHeight: '5', marginLeft: "20px" }}
// //           onClick={handleForgotPassword}
// //         >
// //           Forgot Password?
// //         </Button>
// //         <Button
// //           variant="filled"
// //           fullWidth
// //           style={{ width: '90%', marginLeft: "20px", marginBottom: 15, backgroundColor: "red" }}
// //           onClick={handleLogin}
// //         >
// //           Login
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginForm;