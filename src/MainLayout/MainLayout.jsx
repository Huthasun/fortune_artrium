import React from 'react'
import { useState } from 'react';
// import Fortune from'./assets/pp.png'
import Fortune from '../assets/pp.png'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes,} from "react-router-dom";
import HouseKepping from '../Components/HouseKeeping/HouseKepping';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Image,
    Group,
  } from '@mantine/core';
import Register from '../Components/Register';
import '../../src/Styling.css'
import Departure from '../Components/Departure';

const MainLayout = () => {

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

  return (
    <div>
      <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="lg" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} className='nav-bar'>
          <Navbar.Section>Register</Navbar.Section>
          <Navbar.Section>HouseKepping</Navbar.Section>
          <Navbar.Section>Departure</Navbar.Section>
        </Navbar>
      }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent:"space-between" }}>
            {/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}> */}
             
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
              {/* <Image  src={Fortune} alt='logo'/> */}
              <Group  >
              <Image src={Fortune} alt='logo' maw={100} />
              </Group>
            {/* </MediaQuery> */}

            {/* <Text>Fortune Atrium</Text> */}
          </div>
        </Header>
      }
    >
      {/* <Text><Departure/></Text> */}
      <Router>
          <Routes>
            <Route path='/'element={<Register/>}/>
            <Route path='/departure'element={<Departure/>}/>
            <Route path='/housekeeping' element={<HouseKepping/>}/>
          </Routes>
        </Router>
    </AppShell>
    </div>
  )
}

export default MainLayout
