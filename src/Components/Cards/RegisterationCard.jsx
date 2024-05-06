import React from 'react'
import { Card, TextInput, Select, Textarea } from '@mantine/core';

const RegisterationCard = () => {
  return (
    <div>
      <Card shadow="sm">
      <TextInput
        label="Guest Name"
        placeholder="Enter guest name"
        required
        variant="filled"
        style={{ marginBottom: 15 }}
      />
      <TextInput
        label="Phone Number"
        placeholder="Enter phone number"
        type="tel"
        required
        variant="filled"
        style={{ marginBottom: 15 }}
      />
      <Select
        label="Identity Proof"
        placeholder="Select identity proof"
        data={[
          { label: 'Driver\'s License', value: 'drivers_license' },
          { label: 'Passport', value: 'passport' },
          { label: 'National ID', value: 'national_id' },
        ]}
        style={{ marginBottom: 15 }}
      />
      <TextInput
        label="ID Number"
        placeholder="Enter ID number"
        required
        variant="filled"
        style={{ marginBottom: 15 }}
      />
      <Textarea
        label="Address"
        placeholder="Enter guest address"
        required
        variant="filled"
        style={{ marginBottom: 15 }}
      />
    </Card>
    </div>
  )
}

export default RegisterationCard
