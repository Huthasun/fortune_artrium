
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, useMantineTheme } from '@mantine/core';
import Header from '../Components/Header';
import {Footer1} from '../Components/Footer1';
import '../Styling.css'; // Ensure you have the correct path to your CSS file

const MainLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding="md"
      header={<Header />}
      footer={<Footer1 />}
      styles={(theme) => ({
        main: {
          padding: 0,
          paddingTop: '70px', // Height of the fixed header
          paddingBottom: '50px', // Height of the footer
          overflowY: 'auto',
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
};

export default MainLayout;
