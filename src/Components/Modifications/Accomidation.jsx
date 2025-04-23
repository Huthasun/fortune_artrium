// import React from 'react'

// const Accomidation = () => {
//   return (
//     <div>
//     <h2>Accommodation</h2>
//     <p>Accommodation tab content goes here.</p>
//   </div>
//   )
// }

// export default Accomidation


import React, { useState, useEffect } from 'react';
import { Card, SimpleGrid, Text, Title, Badge, Group, useMantineTheme } from '@mantine/core';
import { IconCalendar, IconDoorExit, IconCash } from '@tabler/icons-react';
import client from '../../API/api';

const Accommodation = () => {
  const theme = useMantineTheme();
  const [stats, setStats] = useState({
    checkins: 0,
    checkouts: 0,
    revenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotelId = localStorage.getItem('hotelId') || '1';
        const response = await client.get('bookings/daily-revenue', {
          params: { hotelIds: hotelId }
        });
        
        const data = response.data.revenueByHotel[hotelId];
        setStats({
          checkins: data.last24HoursCheckins,
          checkouts: data.room_stats.booked_rooms, // Assuming these are expected checkouts
          revenue: data.totalRevenue
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Text align="center" py="xl">Loading dashboard...</Text>;
  if (error) return <Text color="red" align="center" py="xl">Error: {error}</Text>;

  const cards = [
    {
      title: "Last 24hrs Check-in's",
      value: stats.checkins,
      icon: <IconCalendar size={24} />,
      color: 'blue',
      // trend: '+12%'
    },
    {
      title: "Expected Checkouts",
      value: window.localStorage.getItem('greenBorderRoomsCount'),
      icon: <IconDoorExit size={24} />,
      color: 'orange',
      // trend: '+5%'
    },
    {
      title: "Last 24hrs Revenue",
      value: `₹${stats.revenue.toLocaleString()}`,
      icon: <IconCash size={24} />,
      color: 'green',
      // trend: '+18%'
    }
  ];

  return (
    <div style={{ padding: theme.spacing.md }}>
      <Title order={2} mb="xl" style={{ color: theme.colors.gray[8] }}>
        Overview
      </Title>
      
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {cards.map((card, index) => (
          <Card 
            key={index}
            shadow="sm"
            p="lg"
            radius="md"
            style={{
              borderLeft: `4px solid ${theme.colors[card.color][6]}`,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme.shadows.md
              }
            }}
          >
            <Group position="apart" mb="xs">
              <Text size="sm" color="dimmed" weight={500}>
                {card.title}
              </Text>
              <Badge 
                color={card.color}
                variant="light"
                radius="sm"
                leftSection={card.icon}
              >
                {card.trend}
              </Badge>
            </Group>
            
            <Title order={2} style={{ color: theme.colors[card.color][7] }}>
              {card.value}
            </Title>
            
            <Text size="xs" color="dimmed" mt="sm">
              Compared to previous day
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Accommodation;