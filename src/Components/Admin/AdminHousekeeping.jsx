import React from 'react';
import { Modal, Button, Text, Card } from '@mantine/core';
import client from '../../API/api';
import { useNavigate } from 'react-router-dom';


const AdminHousekeeping = ({ selectedRoom, onClose ,refreshRoomStatus}) => {
  const navigate = useNavigate();

  const handleDoneClick = async () => {
    try {
      console.log('HouseKeeping hotelId:', selectedRoom.hotelId); // Debug log
      await client.put('/api/room-status/update-status', { roomNo: selectedRoom.roomNo, status: 'vacant' ,hotelId: selectedRoom.hotelId,});
      refreshRoomStatus(); 
      onClose();
    //   navigate('/app/tabs'); // Navigate to the bookings page
    } catch (error) {
      console.error('Error updating room status:', error);
      // Optionally show an error message
    }
  };

  return (
    <Modal
  opened={!!selectedRoom}
  onClose={onClose}
  centered
  size={380}
  withCloseButton={false}
  overlayProps={{
    blur: 4,
    opacity: 0.6,
    color: '#1a1b1e'
  }}
  styles={{
    content: {
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 12px 32px rgba(0,0,0,0.12)'
    }
  }}
>
  <div style={{
    background: '#ffffff',
    padding: '0'
  }}>
    {/* Header */}
    <div style={{
      background: 'linear-gradient(90deg, #0d9488 0%, #14b8a6 100%)',
      padding: '24px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.25)',
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)'
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white">
          <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
          <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
        </svg>
      </div>
      <div>
        <Text fz="xl" fw={700} style={{ letterSpacing: '0.5px' }}>Room {selectedRoom?.roomNo}</Text>
        <Text fz="sm" style={{ opacity: 0.9, fontWeight: 500 }}>Ready for Cleaning</Text>
      </div>
    </div>

    {/* Content */}
    <div style={{ padding: '24px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
        marginBottom: '24px',
        padding: '20px',
        background: '#f0fdfa',
        borderRadius: '12px',
        border: '1px solid #ccfbf1'
      }}>
        <div style={{
          background: '#14b8a6',
          width: '24px',
          height: '24px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: 'white'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <Text fz="sm" style={{ color: '#0f766e', lineHeight: '1.5' }}>
          Housekeeping team notified. Please confirm when cleaning is complete to make the room available for guests.
        </Text>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '16px'
      }}>
        <Button
          fullWidth
          variant="outline"
          color="gray"
          onClick={onClose}
          style={{
            border: '1px solid #e2e8f0',
            fontWeight: 500,
            color: '#64748b',
            borderRadius: '8px',
            height: '44px'
          }}
        >
          Remind Later
        </Button>
        <Button
          fullWidth
          variant="filled"
          color="teal"
          onClick={handleDoneClick}
          style={{
            fontWeight: 500,
            borderRadius: '8px',
            height: '44px',
            background: '#0d9488',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            ':hover': {
              background: '#0f766e',
              transform: 'translateY(-1px)'
            }
          }}
        >
          Confirm Cleaned
        </Button>
      </div>
    </div>
  </div>
</Modal>  );
};

export default AdminHousekeeping;
