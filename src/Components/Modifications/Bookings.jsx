import React from 'react';
import { useForm } from '@mantine/form';
import { Card, Text, TextInput, SimpleGrid, Button } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import { roomAtom } from '../../Store/Store';

const Bookings = () => {
  const roomDetails = useRecoilValue(roomAtom);
 
  const form = useForm({
    initialValues: {
      checkInDate: '',
      checkInTime: '',
      duration: '',
      amount: '',
    },
    validate: {
      checkInDate: (value) => (value ? null : 'Check-in Date is required'),
      checkInTime: (value) => (value ? null : 'Check-in Time is required'),
      duration: (value) => (value ? null : 'Duration is required'),
      amount: (value) => (value ? null : 'Amount is required'),
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Further processing logic here
  };

  return (
    <div>
      <div style={{ display: 'flex', margin: '20px', borderRadius: '5px', justifyContent: 'space-between', height: '34px', border: '3px solid #FE000099' }}>
        <p style={{ marginTop: '6px', marginLeft: '8px' }}>Room.No-{roomDetails.roomNo}</p>
        <p style={{ marginTop: '6px', marginRight: '8px' }}>{roomDetails.status}</p>
      </div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <Text style={{ fontWeight: '500', marginLeft: '25px', fontSize: '0.875rem' }}>Revised Check-out Date & Time</Text>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '6px' }}>
            <DatePickerInput
              label=""
              placeholder="YYYY-MM-DD"
              {...form.getInputProps('checkInDate')}
              style={{ width: '40%', appearance: 'none' }}
              required
            />
            <TimeInput
              label=""
              placeholder="HH:MM"
              {...form.getInputProps('checkInTime')}
              withAsterisk
              style={{ width: '40%' }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '10px' }}>
          <TextInput
            label="Total No.of Days"
            placeholder="number of days"
            type="number"
            min={1}
            {...form.getInputProps('duration')}
            style={{ width: '40%' }}
          />
          <TextInput
            label="Tariff"
            type="number"
            placeholder="Amount"
            {...form.getInputProps('amount')}
            style={{ width: '40%' }}
          />
        </div>
        <TextInput
          label="Total Amount"
          type="number"
          placeholder="Amount"
          {...form.getInputProps('amount')}
          style={{ width: '85%', marginLeft: '7%' }}
        />
        <div style={{ paddingTop: '18px' }}>
          <label style={{ fontWeight: '500', marginLeft: '25px' }}>Payment details</label>
          <Card>
            <SimpleGrid cols={2}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginLeft: '10px', height: '120px' }}>
                <Text size="md" weight={500} style={{ marginBottom: 10 }}>Name</Text>
                <Text size="md" weight={500} style={{ marginBottom: 10 }}>Dept Date</Text>
                <Text size="md" weight={500} style={{ marginBottom: 10 }}>Total Amount</Text>
                <Text size="md" weight={500} style={{ marginBottom: 10 }}>Pending Amount</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', marginLeft: '12%', top: '0' }}>
                <Text size="md" weight={500} style={{ marginBottom: 10 }}>{roomDetails.name}</Text>
                <Text size="md" weight={500} style={{ marginBottom: 10 }}>{roomDetails.deptDate}</Text>
                <Text size="md" weight={500} style={{ marginBottom: 10 }}>{roomDetails.totalAmount}</Text>
                <Text size="md" weight={500} style={{ marginBottom: 10 }}>{roomDetails.pendingAmount}</Text>
              </div>
            </SimpleGrid>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
              <Button type="submit" style={{ width: '105px', height: '34px', backgroundColor: '#FE0000', marginTop: '0px' }}>Submit</Button>
            </div>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default Bookings;
