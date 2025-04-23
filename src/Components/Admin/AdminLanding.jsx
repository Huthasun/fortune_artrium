// import { useState } from 'react';
// import {
//   AppShell,
//   Navbar,
//   Header,
//   Footer,
//   Text,
//   MediaQuery,
//   Burger,
//   useMantineTheme,
//   Container,
//   Drawer, // Import Container to center the content
// } from '@mantine/core';
// import { Image } from '@mantine/core';
// import Fortune from '../../assets/fj.jpg';
// import Primaryguestdbtable from '../Admin/Primaryguestdbtable';
// import BookingDetailsTable from '../Admin/BookingGuestsdbtable';

// export default function AdminLanding() {
//   const theme = useMantineTheme();
//   const [opened, setOpened] = useState(false);
//   const [activeComponent, setActiveComponent] = useState('Bookings');

//   // Function to handle component switch
//   const handleComponentSwitch = (component) => {
//     setActiveComponent(component);
//   };

//   // Render the active component
//   const renderActiveComponent = () => {
//     switch (activeComponent) {
//       case 'Bookings':
//         return <BookingDetailsTable />;
//       case 'Primary':
//         return <Primaryguestdbtable />;
//       default:
//         return <BookingDetailsTable />;
//     }
//   };

//   return (
//     <AppShell
//       styles={{
//         main: {
//           background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
//         },
//       }}
//       // navbarOffsetBreakpoint="sm"
//       // asideOffsetBreakpoint="sm"
//       // navbar={
//         // <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ base: 150, sm: 200, lg: 300 }}>
//         //   <Text
//         //     onClick={() => handleComponentSwitch('Bookings')}
//         //     style={{
//         //       cursor: 'pointer',
//         //       marginBottom: '10px',
//         //       padding: '10px',
//         //       borderRadius: '5px',
//         //       backgroundColor: activeComponent === 'Bookings' ? theme.colors.blue[6] : 'transparent',
//         //       color: activeComponent === 'Bookings' ? '#fff' : theme.colors.gray[7],
//         //       transition: 'background-color 0.2s ease, color 0.2s ease',
//         //     }}
//         //     onMouseEnter={(e) => {
//         //       if (activeComponent !== 'Bookings') {
//         //         e.currentTarget.style.backgroundColor = theme.colors.gray[2];
//         //         e.currentTarget.style.color = '#000';
//         //       }
//         //     }}
//         //     onMouseLeave={(e) => {
//         //       if (activeComponent !== 'Bookings') {
//         //         e.currentTarget.style.backgroundColor = 'transparent';
//         //         e.currentTarget.style.color = theme.colors.gray[7];
//         //       }
//         //     }}
//         //   >
//         //     Bookings
//         //   </Text>
//         //   <Text
//         //     onClick={() => handleComponentSwitch('Primary')}
//         //     style={{
//         //       cursor: 'pointer',
//         //       padding: '10px',
//         //       borderRadius: '5px',
//         //       backgroundColor: activeComponent === 'Primary' ? theme.colors.blue[6] : 'transparent',
//         //       color: activeComponent === 'Primary' ? '#fff' : theme.colors.gray[7],
//         //       transition: 'background-color 0.2s ease, color 0.2s ease',
//         //     }}
//         //     onMouseEnter={(e) => {
//         //       if (activeComponent !== 'Primary') {
//         //         e.currentTarget.style.backgroundColor = theme.colors.gray[2];
//         //         e.currentTarget.style.color = '#000';
//         //       }
//         //     }}
//         //     onMouseLeave={(e) => {
//         //       if (activeComponent !== 'Primary') {
//         //         e.currentTarget.style.backgroundColor = 'transparent';
//         //         e.currentTarget.style.color = theme.colors.gray[7];
//         //       }
//         //     }}
//         //   >
//         //     Primary
//         //   </Text>
//         // </Navbar>
//       // }
//       footer={
//         <Footer height={{ base: 70 }} p="md">
//           Application footer
//         </Footer>
//       }
//       header={
//         <Header height={{ base: 50, md: 70 }} p="md">
//          <Drawer
//         opened={opened}
//         onClose={close}
//         title="User Details"
//         overlayProps={{ opacity: 0.5, blur: 4 }}
//         size={opened ? '50%' : '30%'}
//         styles={{
//           drawer: {
//             padding: '10px',
//             height: 'calc(100vh - 150px)', // Drawer is shorter to reduce scroll length
//             overflowY: 'auto',
//             '@media (max-width: 768px)': {
//               width: '75%',
//             },
//             '@media (max-width: 576px)': {
//               width: '90%',
//             },
//           },
//         }}
//       >
//         {/* <Usermanagement /> */}
//       </Drawer>
    
//         </Header>
//       }
//     >
//       <Container>
//         {renderActiveComponent()} {/* Render the active component here */}
//       </Container>
//     </AppShell>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import {
//   AppShell, Header, Footer, Burger, useMantineTheme,
//   Drawer, Group, Text, Button, Image, Card,
//   SimpleGrid, Progress, Badge, Center, Stack, Select
// } from '@mantine/core';
// import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// import { useMediaQuery } from '@mantine/hooks';
// import { IconCreditCard, IconCash, IconCurrencyRupee, IconRefresh } from '@tabler/icons-react';
// import Fortune from '../../assets/fj.jpg';
// import client from '../../API/api';

// const formatDate = (date) =>
//   new Date(date).toLocaleString('en-US', {
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: true,
//   });

// export default function AdminLanding() {
//   const theme = useMantineTheme();
//   const [opened, setOpened] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);
//   const [revenueData, setRevenueData] = useState(null);
//   const [lastUpdated, setLastUpdated] = useState('');
//   const [error, setError] = useState(null);
//   const isMobile = useMediaQuery('(max-width: 425px)');
//   const [user, setUser] = useState(null);
//   const [selectedHotel, setSelectedHotel] = useState('1');

//   useEffect(() => {
//     const username = localStorage.getItem('username');
//     if (username) setUser({ username, avatarUrl: 'default_avatar_url' });
//     fetchRevenueData();
//     const interval = setInterval(fetchRevenueData, 300000); // 5 min
//     return () => clearInterval(interval);
//   }, []);

//   const fetchRevenueData = () => {
//     setLoading(true);
//     setError(null);
//     client
//       .get('http://localhost:80/bookings/daily-revenue')
//       .then((response) => {
//         if (!response.data) {
//           throw new Error('No data received from server');
//         }
//         setRevenueData(response.data.revenueByHotel);
//         setLastUpdated(formatDate(new Date()));
//       })
//       .catch((error) => {
//         console.error('Error fetching revenue data:', error);
//         setError(error.message || 'Failed to load revenue data');
//         setRevenueData(null);
//       })
//       .finally(() => setLoading(false));
//   };

//   const handleLogout = () => {
//     client.get('logout').then(() => {
//       localStorage.clear();
//       navigate('/login');
//     });
//   };

//   const renderRevenueCard = (hotelId) => {
//     if (!revenueData || !revenueData[hotelId]) {
//       return (
//         <Card shadow="sm" padding="lg" radius="md" withBorder>
//           <Text align="center">No data available for Hotel {hotelId}</Text>
//           <Button
//             onClick={fetchRevenueData}
//             leftIcon={<IconRefresh size={16} />}
//             mt="md"
//           >
//             Refresh
//           </Button>
//         </Card>
//       );
//     }

//     const data = revenueData[hotelId];
//     const stats = data.room_stats || {
//       total_rooms: 0,
//       booked_rooms: 0,
//       housekeeping_rooms: 0,
//       available_rooms: 0,
//       occupancy_percentage: 0,
//     };

//     return (
//       <Card key={hotelId} shadow="sm" padding="lg" radius="md" withBorder>
//         <Text weight={600} size="lg" mb="sm">Hotel {hotelId} Dashboard</Text>

//         <Badge color="teal" variant="light" mb="md">
//           Last Updated: {lastUpdated}
//         </Badge>

//         <Card.Section withBorder p="md" mb="md">
//           <Text weight={500} mb="xs">Total Revenue</Text>
//           <Group position="apart">
//             <Text size="xl" weight={700}>
//               ₹{(data.totalRevenue || 0).toLocaleString()}
//             </Text>
//             <IconCurrencyRupee size={24} />
//           </Group>
//         </Card.Section>

//         <SimpleGrid cols={2} spacing="sm" mb="md">
//           <Card withBorder p="sm">
//             <Group>
//               <IconCash size={18} />
//               <Text size="sm">Cash</Text>
//             </Group>
//             <Text weight={600}>₹{(data.totalCash || 0).toLocaleString()}</Text>
//           </Card>

//           <Card withBorder p="sm">
//             <Group>
//               <IconCreditCard size={18} />
//               <Text size="sm">Card</Text>
//             </Group>
//             <Text weight={600}>₹{(data.totalCard || 0).toLocaleString()}</Text>
//           </Card>

//           <Card withBorder p="sm">
//             <Text size="sm">UPI</Text>
//             <Text weight={600}>₹{(data.totalUPI || 0).toLocaleString()}</Text>
//           </Card>

//           <Card withBorder p="sm">
//             <Text size="sm">Check-ins (24h)</Text>
//             <Text weight={600}>{data.last24HoursCheckins || 0}</Text>
//           </Card>
//         </SimpleGrid>

//         <Card.Section withBorder p="md" mt="md">
//           <Text weight={500} mb="xs">Room Occupancy</Text>
//           <Progress
//             value={stats.occupancy_percentage}
//             label={`${Math.round(stats.occupancy_percentage)}%`}
//             size="lg"
//             radius="xl"
//             mb="sm"
//           />

//           <SimpleGrid cols={2} spacing="sm">
//             <div>
//               <Text size="sm" color="dimmed">Total Rooms</Text>
//               <Text weight={600}>{stats.total_rooms}</Text>
//             </div>
//             <div>
//               <Text size="sm" color="dimmed">Booked</Text>
//               <Text weight={600}>{stats.booked_rooms}</Text>
//             </div>
//             <div>
//               <Text size="sm" color="dimmed">Available</Text>
//               <Text weight={600}>{stats.available_rooms}</Text>
//             </div>
//             <div>
//               <Text size="sm" color="dimmed">Housekeeping</Text>
//               <Text weight={600}>{stats.housekeeping_rooms}</Text>
//             </div>
//           </SimpleGrid>
//         </Card.Section>
//       </Card>
//     );
//   };

//   const navLinks = [
//     { path: '/app/adminlanding', label: 'Dashboard' },
//     { path: '/app/adminlanding/pmy', label: 'Primary Details' },
//     { path: '/app/adminlanding/btd', label: 'Booking Details' },
//     // { path: '/app/bookings', label: 'Bookings' },
//     // { path: '/app/register', label: 'New Registration' },
//     // { path: '/app/updatebooking', label: 'Update Booking' },
//     // { path: '/app/guestdetails', label: 'Guest Records' },
//     // { path: '/app/user', label: 'User Management' },
//   ];

//   return (
//     <AppShell
//       styles={{
//         main: {
//           background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
//           overflowY: isMobile ? 'hidden' : 'auto',
//         },
//       }}
//       footer={
//         <Footer height={60} p="md">
//           <Text size="sm" color="dimmed" align="center">
//             © {new Date().getFullYear()} Fortune Hotels
//           </Text>
//         </Footer>
//       }
//       header={
//         <Header height={70} p="md">
//           <Group position="apart" style={{ height: '100%' }}>
//             <Group>
//               <Burger opened={opened} onClick={() => setOpened(true)} size="sm" color={theme.colors.gray[6]} />
//               <Text>Admin Dashboard</Text>
//             </Group>
//             <Image maw={60} radius="md" src={Fortune} alt="Logo" />
//           </Group>
//         </Header>
//       }
//     >
//       <Drawer
//         opened={opened}
//         onClose={() => setOpened(false)}
//         title={
//           <div style={{
//             textAlign: 'center',
//             boxShadow: '0px 4px 2px -2px gray',
//             borderBottom: '1px solid lightgray',
//             paddingBottom: '10px',
//             fontSize: '20px',
//             fontWeight: 'bold'
//           }}>
//             Admin Menu
//           </div>
//         }
//         padding="xl"
//         size="50%"
//         styles={{ drawer: { padding: '10px', height: 'calc(100vh - 150px)', overflowY: 'auto' } }}
//       >
//         <Stack spacing="md">
//           {navLinks.map((link) => (
//             <div
//               key={link.path}
//               style={{
//                 cursor: 'pointer',
//                 padding: '10px',
//                 color: location.pathname === link.path ? 'red' : 'black',
//                 borderRadius: '4px',
//               }}
//               onClick={() => {
//                 navigate(link.path);
//                 setOpened(false);
//               }}
//               onMouseOver={(e) => e.currentTarget.style.color = 'red'}
//               onMouseOut={(e) =>
//                 e.currentTarget.style.color = location.pathname === link.path ? 'red' : 'black'
//               }
//             >
//               {link.label}
//             </div>
//           ))}
//           <Button variant="outline" color="red" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Stack>
//       </Drawer>

//       {location.pathname === '/app/adminlanding' ? (
//         <Stack p="md">
//           {loading ? (
//             <Center style={{ height: '200px' }}>
//               <Text>Loading revenue data...</Text>
//             </Center>
//           ) : error ? (
//             <Card shadow="sm" padding="lg" radius="md" withBorder>
//               <Text color="red" weight={500}>{error}</Text>
//               <Button
//                 onClick={fetchRevenueData}
//                 leftIcon={<IconRefresh size={16} />}
//                 mt="md"
//               >
//                 Retry
//               </Button>
//             </Card>
//           ) : (
//             <>
//               <Select
//                 label="Select Hotel"
//                 value={selectedHotel}
//                 onChange={setSelectedHotel}
//                 data={[
//                   { value: '1', label: 'Hotel 1' },
//                   { value: '2', label: 'Hotel 2' },
//                 ]}
//                 style={{ width: 200, marginBottom: 20 }}
//               />
//               {renderRevenueCard(selectedHotel)}
//             </>
//           )}
//         </Stack>
//       ) : (
//         <Outlet />
//       )}
//     </AppShell>
//   );
// }

import React, { useState, useEffect } from 'react';
import {
  AppShell, Header, Footer, Burger, useMantineTheme,
  Drawer, Group, Text, Button, Image, Card,
  SimpleGrid, Progress, Badge, Center, Stack, Select, Paper
} from '@mantine/core';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { IconCreditCard, IconCash, IconCurrencyRupee, IconRefresh } from '@tabler/icons-react';
import Fortune from '../../assets/fj.jpg';
import client from '../../API/api';



const formatDate = (date) =>
  new Date(date).toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

// Custom Progress Bar Component for Payment Methods
const PaymentMethodBar = ({ cash, upi, card }) => {
  const total = cash + upi + card;
  const cashPercent = total > 0 ? (cash / total) * 100 : 0;
  const upiPercent = total > 0 ? (upi / total) * 100 : 0;
  const cardPercent = total > 0 ? (card / total) * 100 : 0;

  return (
    <div style={{ width: '100%', height: '24px', display: 'flex', borderRadius: '12px', overflow: 'hidden' }}>
      <div style={{
        width: `${cashPercent}%`,
        backgroundColor: '#4CAF50',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {cashPercent > 10 && `Cash ${Math.round(cashPercent)}%`}
      </div>
      <div style={{
        width: `${upiPercent}%`,
        backgroundColor: '#2196F3',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {upiPercent > 10 && `UPI ${Math.round(upiPercent)}%`}
      </div>
      <div style={{
        width: `${cardPercent}%`,
        backgroundColor: '#FF9800',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {cardPercent > 10 && `Card ${Math.round(cardPercent)}%`}
      </div>
    </div>
  );
};

export default function AdminLanding() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [revenueData, setRevenueData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('');
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery('(max-width: 425px)');
  const [user, setUser] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState('1');
  const [activeComponent, setActiveComponent] = useState('Dashboard'); // Track active component

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) setUser({ username, avatarUrl: 'default_avatar_url' });
    fetchRevenueData();
    const interval = setInterval(fetchRevenueData, 300000); // 5 min
    return () => clearInterval(interval);
  }, []);

  const fetchRevenueData = () => {
    setLoading(true);
    setError(null);
    client
      .get('bookings/daily-revenue')
      .then((response) => {
        if (!response.data) {
          throw new Error('No data received from server');
        }
        setRevenueData(response.data.revenueByHotel);
        setLastUpdated(formatDate(new Date()));
      })
      .catch((error) => {
        console.error('Error fetching revenue data:', error);
        setError(error.message || 'Failed to load revenue data');
        setRevenueData(null);
      })
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    client.get('logout').then(() => {
      localStorage.clear();
      navigate('/login');
    });
  };

  const RoomStatsCard = ({ title, value, color }) => (
    <Paper 
      p="md" 
      shadow="sm" 
      style={{ 
        backgroundColor: color,
        color: 'white',
        borderRadius: '8px',
        textAlign: 'center'
      }}
    >
      <Text size="sm" weight={500}>{title}</Text>
      <Text size="xl" weight={700}>{value}</Text>
    </Paper>
  );

  const renderRevenueCard = (hotelId) => {
    if (!revenueData || !revenueData[hotelId]) {
      return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text align="center">No data available for Hotel {hotelId}</Text>
          <Button
            onClick={fetchRevenueData}
            leftIcon={<IconRefresh size={16} />}
            mt="md"
          >
            Refresh
          </Button>
        </Card>
      );
    }

    const data = revenueData[hotelId];
    const stats = data.room_stats || {
      total_rooms: 0,
      booked_rooms: 0,
      housekeeping_rooms: 0,
      available_rooms: 0,
      occupancy_percentage: 0,
    };

    return (
      <Card key={hotelId} shadow="sm" padding="lg" radius="md" withBorder>
        <Text weight={600} size="lg" mb="sm">Hotel {hotelId} Dashboard</Text>

        <Badge color="teal" variant="light" mb="md">
          Last Updated: {lastUpdated}
        </Badge>

        <Card.Section withBorder p="md" mb="md">
          <Text weight={500} mb="xs">Total Revenue</Text>
          <Group position="apart">
            <Text size="xl" weight={700}>
              ₹{(data.totalRevenue || 0).toLocaleString()}
            </Text>
            <IconCurrencyRupee size={24} />
          </Group>
        </Card.Section>

        <Card.Section p="md" mb="md">
          <Text weight={500} mb="xs">Payment Method Distribution</Text>
          <PaymentMethodBar 
            cash={data.totalCash || 0} 
            upi={data.totalUPI || 0} 
            card={data.totalCard || 0} 
          />
          <Group position="apart" mt="sm">
            <Text size="sm" color="dimmed" style={{fontWeight:"700"}}>Cash: ₹{(data.totalCash || 0).toLocaleString()}</Text>
            <Text size="sm" color="dimmed" style={{fontWeight:"700"}}>UPI: ₹{(data.totalUPI || 0).toLocaleString()}</Text>
            <Text size="sm" color="dimmed" style={{fontWeight:"700"}}>Card: ₹{(data.totalCard || 0).toLocaleString()}</Text>
          </Group>
        </Card.Section>

        <Card.Section p="md" mb="md">
          <Text weight={500} mb="xs">Check-ins (24h)</Text>
          <Text size="xl" weight={700}>{data.last24HoursCheckins || 0}</Text>
        </Card.Section>

        <Card.Section withBorder p="md" mb="md">
          <Text weight={500} mb="xs">Room Occupancy</Text>
          <Progress
            value={stats.occupancy_percentage}
            label={`${Math.round(stats.occupancy_percentage)}%`}
            size="lg"
            radius="xl"
            mb="sm"
            color={stats.occupancy_percentage > 75 ? 'green' : stats.occupancy_percentage > 50 ? 'yellow' : 'red'}
          />
        </Card.Section>

        <Card.Section p="md">
          <Text weight={500} mb="xs">Room Statistics</Text>
          <SimpleGrid cols={2} spacing="md">
            <RoomStatsCard 
              title="Total Rooms" 
              value={stats.total_rooms} 
              color="#3f51b5" 
            />
            <RoomStatsCard 
              title="Booked Rooms" 
              value={stats.booked_rooms} 
              color="#f44336" 
            />
            <RoomStatsCard 
              title="Available Rooms" 
              value={stats.available_rooms} 
              color="#4caf50" 
            />
            <RoomStatsCard 
              title="Housekeeping" 
              value={stats.housekeeping_rooms} 
              color="#ff9800" 
            />
          </SimpleGrid>
        </Card.Section>
      </Card>
    );
  };

  const navLinks = [
    { path: '/app/adminlanding', label: 'Dashboard' },
    { path: '/app/adminlanding/pmy', label: 'Primary Details' },
    { path: '/app/adminlanding/btd', label: 'Booking Details' },
  ];

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          overflowY: isMobile ? 'hidden' : 'auto',
        },
      }}
      footer={
        <Footer height={60} p="md">
          <Text size="sm" color="dimmed" align="center">
            © {new Date().getFullYear()} Fortune Artrium Groups 
          </Text>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <Group position="apart" style={{ height: '100%' }}>
            <Group>
              <Burger opened={opened} onClick={() => setOpened(true)} size="sm" color={theme.colors.gray[6]} />
              <Text>{activeComponent}</Text>
            </Group>
            <Image maw={60} radius="md" src={Fortune} alt="Logo" />
          </Group>
        </Header>
      }
    >
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <div style={{
            textAlign: 'center',
            boxShadow: '0px 4px 2px -2px gray',
            borderBottom: '1px solid lightgray',
            paddingBottom: '10px',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            Admin Menu
          </div>
        }
        padding="xl"
        size="50%"
        styles={{ drawer: { padding: '10px', height: 'calc(100vh - 150px)', overflowY: 'auto' } }}
      >
        <Stack spacing="md">
          {navLinks.map((link) => (
            <div
              key={link.path}
              style={{
                cursor: 'pointer',
                padding: '10px',
                color: location.pathname === link.path ? 'red' : 'black',
                borderRadius: '4px',
              }}
              onClick={() => {
                navigate(link.path);
                setOpened(false);
                setActiveComponent(link.label);
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'red'}
              onMouseOut={(e) =>
                e.currentTarget.style.color = location.pathname === link.path ? 'red' : 'black'
              }
            >
              {link.label}
            </div>
          ))}
          <Button variant="outline" color="red" onClick={handleLogout} style={{width:"50%"}}>
            Logout
          </Button>
        </Stack>
      </Drawer>

      {location.pathname === '/app/adminlanding' ? (
        <Stack p="md">
          {loading ? (
            <Center style={{ height: '200px' }}>
              <Text>Loading revenue data...</Text>
            </Center>
          ) : error ? (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Text color="red" weight={500}>{error}</Text>
              <Button
                onClick={fetchRevenueData}
                leftIcon={<IconRefresh size={16} />}
                mt="md"
              >
                Retry
              </Button>
            </Card>
          ) : (
            <>
              <Select
                label="Select Hotel"
                value={selectedHotel}
                onChange={setSelectedHotel}
                data={[
                  { value: '1', label: 'Hotel 1' },
                  { value: '2', label: 'Hotel 2' },
                ]}
                style={{ width: 200, marginBottom: 20 }}
              />
              {renderRevenueCard(selectedHotel)}
            </>
          )}
        </Stack>
      ) : (
        <Outlet />
      )}
    </AppShell>
  );
}