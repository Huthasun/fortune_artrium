import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput, Paper, Container, Button, Image, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FaRegUserCircle } from "react-icons/fa";
import { CiUnlock } from "react-icons/ci";
import Fortune from '../assets/fj.jpg';
import '../../src/Styling.css';
import client from '../API/api'; // Assuming this is your configured Axios instance

const LoginForm = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate(); 

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) => (value === '' ? 'Enter username' : null),
      password: (value) => (value === '' ? 'Enter password' : null),
    },
  });

  // useEffect(() => {
  //   if (window.location.pathname === "/") {
  //     navigate('/login');
  //     window.localStorage.getItem('username') === null ? navigate('/login') : navigate('/bookings');
  //   }
  // }, [navigate]);

  
      // Add this line
      useEffect(() => {
        // If the user is already logged in, navigate based on their role
        const role = window.localStorage.getItem('role');
        if (role) {
          if (role === 'admin') {
            navigate('/app/adminlanding');
          } else if (role === 'user') {
            navigate('/app/bookings');
          }
        }
      }, [navigate]);
  const handleLogin = async (values) => {
    setLoader(true);
    try {
      const response = await client.post("/login/", {
        username: values.username,
        password: values.password,
      },{
        withCredentials: true 
      });

      if (response.data && response.data.status === "user validated") {
        console.log("Login successful: " + JSON.stringify(response.data));
        window.localStorage.setItem("username", response.data.username);
        window.localStorage.setItem("role", response.data.role); // Store the user's role
        // Redirect based on role
        if (response.data.role === 'admin') {
          navigate('/app/adminlanding');
        } else if (response.data.role === 'user') {
          navigate('/app/bookings');
        }
      } else {
        setLoader(false);
        
        const errormessage = response.data.message === "Invalid username or password" || response.data.message === "incorrect password" ? "Invalid Credentials":
        response.data.error ;

       
          
        form.setErrors({
          username: errormessage,
          password: errormessage,
        });
        

        // else if (response.data && response.data.error) {
        //   usernameError = response.data.error;
        //   passwordError = response.data.error;
        // } else {
        //   usernameError = "Login failed. Please try again later.";
        //   passwordError = "Login failed. Please try again later.";
        // }

      }
    } catch (error) {
      setLoader(false);
      console.error("Login error:", error);
      // Handle network errors or other exceptions here
      // form.setErrors({
      //   username: "Login failed. Please check your internet connection.",
      //   password: "Login failed. Please check your internet connection.",
      // });
      // If the API fails due to network error
  form.setErrors({
    username: "Network error. Please try again later.",
    password: "Network error. Please try again later.",
  });
    }
    

  };

  const handleForgotPassword = () => {
    console.log('Forgot Password?');
    // Implement your logic for handling forgot password
  };

  return (
    <Container size={350} mt={120}>
      <Paper withBorder shadow="xl" p={30} radius="md">
        <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src={Fortune} alt='logo' style={{ width: 200 }} />
          </div>
          <Text align="center" size="xl" mt="md">Login</Text>
          <TextInput
            label="Username"
            placeholder="Enter your username"
            icon={<FaRegUserCircle />}
            {...form.getInputProps('username')}
            mt="md"
            // error={form.fields.username.error}
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            icon={<CiUnlock />}
            {...form.getInputProps('password')}
            mt="md"
            // error={form.fields.password.error}
          />
          {/* <Button
            variant="link"
            style={{ display: "flex", justifyContent: "flex-end", color: "#54B4D3", lineHeight: '1.5' }}
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </Button> */}
          <Button
            fullWidth
            mt="xl"
            mb={20}
            type="submit"
            loading={loader}
            style={{ backgroundColor: "red" }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
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


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TextInput, Button, Image, PasswordInput } from '@mantine/core';
// import Fortune from '../assets/fj.jpg';
// import '../../src/Styling.css';
// import axios from 'axios';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [usernameError, setUsernameError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     setUsernameError(false);
//     setPasswordError(false);

//     axios.post("http://192.168.29.68:5000/hms/login", {
//       username: username,
//       password: password
//     }).then((response) => {
//       if (response.data.status === "user validated") {
//         console.log("Login: " + JSON.stringify(response.data));
//         loca
//         navigate('app/bookings');
//       } else if (response.data.status === "Invalid username or password") {
//         setErrorMessage("Invalid username or password");
//         setUsernameError(true);
//         setPasswordError(true);
//         console.log("Login: " + JSON.stringify(response.data));
//       } else if (response.data.status === "incorrect password") {
//         setErrorMessage("Incorrect password");
//         setPasswordError(true);
//         console.log("Login: " + JSON.stringify(response.data));
//       } else {
//         setErrorMessage("An unexpected error occurred. Please try again.");
//       }
//     }).catch((error) => {
//       setErrorMessage("An unexpected error occurred. Please try again.");
//       console.error(error);
//     });
//   };

//   const handleForgotPassword = () => {
//     // Handle forgot password logic here
//     console.log('Forgot Password?');
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', marginTop: 100 }}>
//       <div>
//         <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
//           <Image src={Fortune} alt='logo' style={{ width: 200 }} />
//         </div>
//         <h1 style={{ marginLeft: "20px" }}>Login</h1>
//       </div>
//       <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//         <TextInput
//           label="Username"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(event) => setUsername(event.currentTarget.value)}
//           style={{
//             width: '90%',
//             marginBottom: 15,
//             marginLeft: "20px",
//             borderColor: usernameError ? 'red' : '',
//             borderWidth: usernameError ? '2px' : '',
//           }}
//           error={usernameError}
//         />
//         <PasswordInput
//           label="Password"
//           description=""
//           placeholder="Enter your password"
//           value={password}
//           onChange={(event) => setPassword(event.currentTarget.value)}
//           style={{
//             width: '90%',
//             marginBottom: 15,
//             marginLeft: "20px",
//             borderColor: passwordError ? 'red' : '',
//             borderWidth: passwordError ? '2px' : '',
//           }}
//           error={passwordError}
//         />
//         {errorMessage && (
//           <div style={{ color: 'red', marginLeft: "20px", marginBottom: 15 }}>
//             {errorMessage}
//           </div>
//         )}
//         <Button
//           variant="link"
//           style={{ display: "flex", justifyContent: "flex-end", color: "#54B4D3", lineHeight: '5' }}
//           onClick={handleForgotPassword}
//         >
//           Forgot Password?
//         </Button>
//         <Button
//           variant="filled"
//           fullWidth
//           style={{ width: '90%', marginLeft: "20px", marginBottom: 15, backgroundColor: "red" }}
//           onClick={handleLogin}
//         >
//           Login
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
// import React, { useEffect, useState, } from 'react';

// import { useNavigate } from 'react-router-dom';
// import
// {
//     TextInput,
//     PasswordInput,
//     Paper,
//     Container,
//     Button,
//     Image,
//     Text,
// } from '@mantine/core';
// import client from '../API/API';
// import Logo from "../assets/A_favicon_io/apple-touch-icon.png"
// import { FaRegUserCircle } from "react-icons/fa";
// import { CiUnlock } from "react-icons/ci";
// import { useForm } from '@mantine/form';
// import MainLayout from '../Layout/MainLayout';


// const LoginForm = () =>
// {

//     const [loader, setLoader] = useState(null)
//     const [isLoggedIn, setIsLoggedIn] = useState(true)


//     const form = useForm({
//         initialValues: {
//             username: '',
//             password: '',
//         },
//         validate: {
//             username: (value) => (value === '' ? 'Enter username' : null),
//             password: (value) => (value === '' ? 'Enter password' : null),
//         },

//     })

//     const navigate = useNavigate();
//     useEffect(() =>
//     {
//         if (window.location.pathname === "/")
//         {
//             navigate('/login')
//             window.localStorage.getItem('username') === null ? navigate('/login') : navigate('/home/dashboard')
//         }
//     }, [navigate])


//     async function handleLogin(values)
//     {
//         setLoader(true)
//         // value.preventDefault();
//         try
//         {
//             await client.post('login/', {
//                 username: values.username,
//                 password: values.password
//             }).then((response) =>
//             {
//                 // {
//                 //     "status": "user_validated",
//                 //     "first_name": "user  first name",
//                 //     "user_id": 2,
//                 //     "Company_logo": "https://atomsstorage.s3.ap-south-1.amazonaws.com/Client+Logos/automac.png",
//                 //     "pages": [
//                 //         1,
//                 //         4
//                 //     ],
//                 //     "status_code": 200
//                 // }
//                 // console.log(response.data.status)
//                 if (response.data.status === 'user_validated')
//                 {

//                     console.log("Login : " + JSON.stringify(response.data));
//                     // window.localStorage.setItem("Authorization", response.data.generated_token)
//                     window.localStorage.setItem("username", response.data.first_name)
//                     window.localStorage.setItem("userid", response.data.user_id)
//                     window.localStorage.setItem("logourl", response.data.Company_logo)
//                     window.localStorage.setItem("pages", JSON.stringify(response.data.pages))
//                     navigate("/app/dashboard")
//                     // console.log("user : " + response.data.username)

//                 } else if (response.status !== 200)
//                 {
//                     setLoader(false)
//                     // setError(Got error while connecting with status ${response.status})
//                 }
//                 else
//                 {
//                     setLoader(false)
//                     // setError("Enter correct password or username ")
//                     const errormessage = response.data.status === "unauthorized_user" ? "Invalid Credentials" : response.data.error;
//                     form.setErrors({
//                         username: errormessage,
//                         password: errormessage
//                     })
//                 }

//             })
//         } catch (error)
//         {
//             console.log(error)
//         }

//         // .catch((response) =>
//         // {
//         //     console.log();
//         //     setLoader(false)
//         //     setError(Got error while connecting with server : ${response.message})
//         // });

//     }

//     return (
//         <div>
//             <Container size={350} mt={120} id='container_login' color='var(-color-bg)' >
//                 <Paper withBorder shadow="xl" p={30} radius="md" >
//                     <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
//                         <Paper display={'grid'} m={'auto'}>
//                             <Image src={Logo} width={'6rem'} height={'6rem'} m={'auto'} />
//                         </Paper>
//                         <TextInput
//                             label="Username"
//                             placeholder="Enter Username"
//                             radius={'1.25rem'}
//                             mt={50}
//                             icon={<FaRegUserCircle size={'1rem'} />}
//                             {...form.getInputProps('username')}
//                         />
//                         <PasswordInput
//                             label="Password"
//                             placeholder="Enter password"
//                             mt="md"
//                             radius={'1.25rem'}
//                             icon={<CiUnlock size={'1rem'} />}
//                             {...form.getInputProps('password')}
//                         />
//                         <Button fullWidth mt="xl" mb={20} type='submit' loading={loader} radius={'1.25rem'}>
//                             Login
//                         </Button>
//                     </form>


//                 </Paper>
//             </Container>

//         </div>
//     )
// }

// export default LoginForm