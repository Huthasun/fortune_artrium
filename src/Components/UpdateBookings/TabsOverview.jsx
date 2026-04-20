
import React, { useState } from 'react';
import { Tabs } from '@mantine/core';
import Bookings from '../Modifications/Bookings';
import Accomidation from '../Modifications/Accomidation';
import Depart from '../Modifications/Depart';
import Departure from '../Departure';
import Calenderview from '../Cards/Calenderview';

const TabsOverview = () => {
  const [selectedOption, setSelectedOption] = useState('Bookings'); 

  return (
    <div style={{ marginTop: 0 }}> {/* Reduced the gap here */}
      <Tabs defaultValue="bookings" color="red">
        <Tabs.List grow>
          <Tabs.Tab
            value="accommodation"
            onClick={() => setSelectedOption('Accommodation')}
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'Arial',
              color: selectedOption === 'Accommodation' ? 'red' : '#555',
              borderBottom: selectedOption === 'Accommodation' ? '3px solid red' : '3px solid transparent',
              transition: 'all 0.3s ease',
              padding: '0.5rem 1rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: selectedOption === 'Accommodation' ? '0 2px 8px rgba(255, 0, 0, 0.2)' : 'none'
            }}
          >
            Over View
          </Tabs.Tab>

          <Tabs.Tab
            value="bookings"
            onClick={() => setSelectedOption('Bookings')}
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'Arial',
              color: selectedOption === 'Bookings' ? 'red' : '#555',
              borderBottom: selectedOption === 'Bookings' ? '3px solid red' : '3px solid transparent',
              transition: 'all 0.3s ease',
              padding: '1rem 1rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: selectedOption === 'Bookings' ? '0 2px 8px rgba(255, 0, 0, 0.2)' : 'none'
            }}
          >
            Rooms View
          </Tabs.Tab>

              <Tabs.Tab
            value="calenderview"
            onClick={() => setSelectedOption('Calender')}
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'Arial',
              color: selectedOption === 'Calender' ? 'red' : '#555',
              borderBottom: selectedOption === 'Calender' ? '3px solid red' : '3px solid transparent',
              transition: 'all 0.3s ease',
              padding: '1rem 1rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: selectedOption === 'Calender' ? '0 2px 8px rgba(255, 0, 0, 0.2)' : 'none'
            }}
          >
            Calender View
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="accommodation" pt="xs">
          <Accomidation />
        </Tabs.Panel>

        <Tabs.Panel value="bookings" pt="xs">
          <Departure />
        </Tabs.Panel>
        <Tabs.Panel value="calenderview" pt="xs">
          <Calenderview/>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TabsOverview;
