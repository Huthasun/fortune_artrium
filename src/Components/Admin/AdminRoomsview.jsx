// import React, { useState, useEffect } from 'react';
// import { SimpleGrid, Button, Text, Modal } from '@mantine/core';
// // import Header from '../Header';
// import bookingData from '../databooking';
// import PendigCard from '../Cards/PendigCard';
// import { useNavigate } from 'react-router-dom';
// import Footer1 from '../Footer1';
// import { useRecoilState } from 'recoil';
// import { roomAtom } from '../../Store/Store';
// import client from '../../API/api';
// import axios from 'axios';
// import Housekeeping from '../HouseKeeping/HouseKepping';
// import { useSearchParams } from "react-router-dom";


// const AdminRoomsview = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [showPendingModal, setShowPendingModal] = useState(false);
//   const [showHousekeepingModal, setShowHousekeepingModal] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const navigate = useNavigate();
//   const [roomDetails, setRoomDetails] = useRecoilState(roomAtom);
//   const [rooms, setRooms] = useState([]);
//   const [roomPrice, setRoomPrice] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [greenBorderRooms, setGreenBorderRooms] = useState([]);
//   const [searchParams] = useSearchParams();
// const hotelIdParam = searchParams.get("hotelId");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const hotelId = hotelIdParam || localStorage.getItem('hotelId');

// if (hotelId) {
//   const response = await client.get(`/api/room-status?hotelId=${hotelId}`);
//   const filteredRooms = response.data.data.filter(
//     room => String(room.hotelId) === String(hotelId)
//   );
//   setRooms(filteredRooms);
// }
//       } catch (error) {
//         console.error('Error fetching room status:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const storedRoomNo = localStorage.getItem('roomNo');
//     if (storedRoomNo && rooms.length > 0) {
//       const room = rooms.find(room => String(room.roomNo) === String(storedRoomNo));
//       if (room) {
//         setRoomDetails(room);
//         setSelectedButton(storedRoomNo);
//       }
//     }
//   }, [rooms]);

//   const fetchRoomPrice = async (roomNo) => {
//     try {
//       const response = await client.get(`/rooms/${roomNo}/price`);
//       return response.data.price;
//     } catch (error) {
//       console.error('Error fetching room price:', error);
//       return null;
//     }
//   };

//   const refreshRoomStatus = async () => {
//     try {
//       const hotelId = localStorage.getItem('hotelId');
//       if (hotelId) {
//         const response = await client.get(`/api/room-status?hotelId=${hotelId}`);
//         const filteredRooms = response.data.data.filter(room => String(room.hotelId) === String(hotelId));
//         setRooms(filteredRooms);
//       }
//     } catch (error) {
//       console.error('Error refreshing room status:', error);
//     }
//   };

//   // Update green border rooms and store in localStorage
//   useEffect(() => {
//     if (rooms.length > 0) {
//       const updatedGreenRooms = rooms.filter((room) => {
//         if (room.roomStatus !== 'occupied') return false;
        
//         if (!room.checkOutDateTime) return false;
        
//         const checkOutDateTime = new Date(room.checkOutDateTime);
//         const twoHoursBeforeCheckOut = new Date(checkOutDateTime.getTime() - 2 * 60 * 60 * 1000);
        
//         return currentTime >= twoHoursBeforeCheckOut && currentTime <= checkOutDateTime;
//       });

//       setGreenBorderRooms(updatedGreenRooms);
//       localStorage.setItem("greenBorderRoomsCount", updatedGreenRooms.length.toString());
//       localStorage.setItem("greenBorderRooms", JSON.stringify(updatedGreenRooms.map(room => room.roomNo)));
//     }
//   }, [rooms, currentTime]);

//   const handleButtonClick = async (roomNo) => {
//     setSelectedButton(roomNo);
//     localStorage.setItem('roomNo', roomNo);

//     const room = rooms.find(room => String(room.roomNo) === String(roomNo));
//     if (room) {
//       setRoomDetails(room);
//       console.log('Selected Room:', room); 
//       if (room.roomStatus === 'occupied') {
//         setSelectedRoom(room);
//         setShowPendingModal(true);
//       } else if (room.roomStatus === 'vacant') {
//         const price = await fetchRoomPrice(roomNo);
//         if (price !== null) {
//           localStorage.setItem('roomPrice', price);
//         }
//         navigate('',
//              {
//           state: {
//             state: { roomDetails: room, roomPrice: price },
//           },
//         });
//       } else if (room.roomStatus === 'housekeeping') {
//         setSelectedRoom(room);
//         setShowHousekeepingModal(true);
//       }
//     }
//   };

//   const getButtonText = (room) => {
//     switch (room.roomStatus) {
//       case 'occupied':
//         return 'Occupied';
//       case 'vacant':
//         return 'Vacant';
//       default:
//         return 'Housekeeping';
//     }
//   };

//   const getButtonColor = (room) => {
//     switch (room.roomStatus) {
//       case 'vacant':
//         return '#03C03C';
//       case 'occupied':
//         return '#FE0000';
//       default:
//         return '#E1C16E';
//     }
//   };

//   const handleCloseModal = () => {
//     setShowPendingModal(false);
//   };

//   const handleCloseHousekeepingModal = () => {
//     setShowHousekeepingModal(false);
//   };

//   const isRoomInGreenBorder = (roomNo) => {
//     return greenBorderRooms.some(room => room.roomNo === roomNo);
//   };

//   return (
//     <div>
//       {/* <Header /> */}
//       <div style={{ padding: "0px", paddingTop: "0px" }}>
//         <h1 style={{ display: "grid", placeItems: "center" }}>Availability</h1>
//       </div>
//       <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
//         {rooms.map((room) => {
//           const hasGreenBorder = isRoomInGreenBorder(room.roomNo);
          
//           return (
//             <div key={room.roomNo}>
//               <Button
//                 style={{
//                   backgroundColor: getButtonColor(room),
//                   width: '100%',
//                   height: 'auto',
//                   minWidth: '100px',
//                   minHeight: '45px',
//                   border: hasGreenBorder ? '3px solid #03C03C' : selectedButton === room.roomNo ? '2px solid gray' : 'none',
//                   boxShadow: hasGreenBorder ? '0px 0px 10px 2px #03C03C' : 'none',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   transition: 'border 0.3s ease-in-out',
//                 }}
//                 onClick={() => handleButtonClick(room.roomNo)}
//               >
//                 <Text fz="sm" style={{ margin: 0, fontSize: '1.5rem' }}>{room.roomNo}</Text>
//               </Button>
    
//               <div style={{ textAlign: 'center', marginTop: '5px' }}>{getButtonText(room)}</div>
//             </div>
//           );  
//         })}
//       </SimpleGrid>

//       {showPendingModal && (
//         <Modal
//           opened={true}
//           onClose={handleCloseModal}
//           centered
//           xOffset={-10}
//           size={350}
//         >
//           {selectedRoom && (
//             <PendigCard 
//               selectedRoom={selectedRoom} 
//               onClose={handleCloseModal}
//               refreshRoomStatus={refreshRoomStatus}
//             />
//           )}
//         </Modal>
//       )}
//       {showHousekeepingModal && (
//         <Housekeeping
//           selectedRoom={selectedRoom}
//           onClose={handleCloseHousekeepingModal}
//           refreshRoomStatus={refreshRoomStatus}
//         />
//       )}
//     </div>
//   );
// };

// export default AdminRoomsview;
import React, { useState, useEffect } from 'react';
import { SimpleGrid, Button, Text, Modal } from '@mantine/core';
// import Header from '../Header';
import bookingData from '../databooking';
import PendigCard from '../Admin/AdminPending';
import { useNavigate } from 'react-router-dom';
import Footer1 from '../Footer1';
import { useRecoilState } from 'recoil';
import { roomAtom } from '../../Store/Store';
import { roomStatusTrigger } from '../../Store/Store';
import client from '../../API/api';
import axios from 'axios';
import Housekeeping from '../Admin/AdminHousekeeping';
import { useSearchParams } from "react-router-dom";

const AdminRoomsview = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [showHousekeepingModal, setShowHousekeepingModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useRecoilState(roomAtom);
  const [rooms, setRooms] = useState([]);
  const [roomPrice, setRoomPrice] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greenBorderRooms, setGreenBorderRooms] = useState([]);
  const [searchParams] = useSearchParams();
  const hotelIdParam = searchParams.get("hotelId");

  // --- Service (long-press) state ---
  const [pressTimer, setPressTimer] = useState(null);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [serviceRoom, setServiceRoom] = useState(null);
  const [serviceBusy, setServiceBusy] = useState(false); // disable multiple clicks while API runs
  const [refreshKey, setRefreshKey] = useState(0);
const [roomStatusTriggerVal, setRoomStatusTriggerVal] = useRecoilState(roomStatusTrigger);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotelId = hotelIdParam || localStorage.getItem('hotelId');
        if (hotelId) {
          const response = await client.get(`/api/room-status?hotelId=${hotelId}`);
          const filteredRooms = response.data.data.filter(
            room => String(room.hotelId) === String(hotelId)
          );
          setRooms(filteredRooms);
        }
      } catch (error) {
        console.error('Error fetching room status:', error);
      }
    };
    fetchData();
  }, [hotelIdParam]);

  useEffect(() => {
    const storedRoomNo = localStorage.getItem('roomNo');
    if (storedRoomNo && rooms.length > 0) {
      const room = rooms.find(room => String(room.roomNo) === String(storedRoomNo));
      if (room) {
        setRoomDetails(room);
        setSelectedButton(storedRoomNo);
      }
    }
  }, [rooms, setRoomDetails]);

  const fetchRoomPrice = async (roomNo) => {
    try {
      const response = await client.get(`/rooms/${roomNo}/price`);
      return response.data.price;
    } catch (error) {
      console.error('Error fetching room price:', error);
      return null;
    }
  };

  const refreshRoomStatus = async () => {
    try {
      const hotelId = localStorage.getItem('hotelId');
      if (hotelId) {
        const response = await client.get(`/api/room-status?hotelId=${hotelId}`);
        const filteredRooms = response.data.data.filter(room => String(room.hotelId) === String(hotelId));
        setRooms(filteredRooms);
      }
    } catch (error) {
      console.error('Error refreshing room status:', error);
    }
  };

  // Update green border rooms and store in localStorage
  useEffect(() => {
    if (rooms.length > 0) {
      const updatedGreenRooms = rooms.filter((room) => {
        if (room.roomStatus !== 'occupied') return false;
        if (!room.checkOutDateTime) return false;
        const checkOutDateTime = new Date(room.checkOutDateTime);
        const twoHoursBeforeCheckOut = new Date(checkOutDateTime.getTime() - 2 * 60 * 60 * 1000);
        return currentTime >= twoHoursBeforeCheckOut && currentTime <= checkOutDateTime;
      });

      setGreenBorderRooms(updatedGreenRooms);
      localStorage.setItem("greenBorderRoomsCount", updatedGreenRooms.length.toString());
      localStorage.setItem("greenBorderRooms", JSON.stringify(updatedGreenRooms.map(room => room.roomNo)));
    }
  }, [rooms, currentTime]);

  const handleButtonClick = async (roomNo) => {
    setSelectedButton(roomNo);
    localStorage.setItem('roomNo', roomNo);

    const room = rooms.find(room => String(room.roomNo) === String(roomNo));
    if (room) {
      setRoomDetails(room);
      if (room.roomStatus === 'occupied') {
        setSelectedRoom(room);
        setShowPendingModal(true);
      } else if (room.roomStatus === 'vacant') {
        const price = await fetchRoomPrice(roomNo);
        if (price !== null) {
          localStorage.setItem('roomPrice', price);
        }
        navigate('',
          {
            state: {
              state: { roomDetails: room, roomPrice: price },
            },
          });
      } else if (room.roomStatus === 'housekeeping') {
        setSelectedRoom(room);
        setShowHousekeepingModal(true);
      }
    }
  };

  const getButtonText = (room) => {
    switch (room.roomStatus) {
      case 'occupied':
        return 'Occupied';
      case 'vacant':
        return 'Vacant';
      case 'service':
        return 'Manintenance';
      default:
        return 'Housekeeping';
    }
  };

  const getButtonColor = (room) => {
    switch (room.roomStatus) {
      case 'vacant':
        return '#03C03C';
      case 'occupied':
        return '#FE0000';
      case 'service':
        return '#CFCFCF';
      default:
        return '#E1C16E';
    }
  };

  const handleCloseModal = () => {
    setShowPendingModal(false);
  };

  const handleCloseHousekeepingModal = () => {
    setShowHousekeepingModal(false);
  };

  const isRoomInGreenBorder = (roomNo) => {
    return greenBorderRooms.some(room => room.roomNo === roomNo);
  };

  // --- Long press handlers (mouse + touch) ---
  const handleLongPressStart = (room) => {
    // Only allow service toggle for rooms that are currently "vacant" or "service"
    if (!room) return;
    if (!(room.roomStatus === 'vacant' || room.roomStatus === 'service')) return;

    const timer = setTimeout(() => {
      setServiceRoom(room);
      setShowServiceModal(true);
    }, 700);

    setPressTimer(timer);
  };

  const handleLongPressEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

 const applyServiceChange = async () => {
  if (!serviceRoom) return;
  if (serviceBusy) return;
  setServiceBusy(true);

  try {
    const newStatus = serviceRoom.roomStatus === "service" ? "vacant" : "service";
    const hotelId = serviceRoom.hotelId || localStorage.getItem("hotelId");

    await client.put("/api/room-status/update-status", {
      hotelId,
      roomNo: serviceRoom.roomNo,
      status: newStatus
    });

    // 🔥 CLOSE modal immediately
    setShowServiceModal(false);

    // 🔥 Update UI instantly (without reload)
    setRooms(prev =>
      prev.map(r =>
        r.roomNo === serviceRoom.roomNo
          ? { ...r, roomStatus: newStatus }
          : r
      )
    );
    // 🔥 Notify ALL Components → Departure, Dashboard, Reception page refresh instantly
    setRoomStatusTriggerVal(prev => prev + 1);

  } catch (err) {
    console.error("Failed to update service status:", err);
  } finally {
    setServiceBusy(false);
    setServiceRoom(null);
  }
};


  return (
    <div>
      {/* <Header /> */}
      <div style={{ padding: "0px", paddingTop: "0px" }}>
        <h1 style={{ display: "grid", placeItems: "center" }}>Availability</h1>
      </div>

      <SimpleGrid  key={refreshKey} cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
        {rooms.map((room) => {
          const hasGreenBorder = isRoomInGreenBorder(room.roomNo);

          return (
            <div key={room.roomNo}>
              <Button
                style={{
                  backgroundColor: getButtonColor(room),
                  width: '100%',
                  height: 'auto',
                  minWidth: '100px',
                  minHeight: '45px',
                  border: hasGreenBorder ? '3px solid #03C03C' : selectedButton === room.roomNo ? '2px solid gray' : 'none',
                  boxShadow: hasGreenBorder ? '0px 0px 10px 2px #03C03C' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border 0.3s ease-in-out',
                }}

                onClick={() => handleButtonClick(room.roomNo)}
                onMouseDown={() => handleLongPressStart(room)}
                onMouseUp={handleLongPressEnd}
                onMouseLeave={handleLongPressEnd}
                onTouchStart={() => handleLongPressStart(room)}
                onTouchEnd={handleLongPressEnd}
              >
                <Text fz="sm" style={{ margin: 0, fontSize: '1.5rem' }}>{room.roomNo}</Text>
              </Button>

              <div style={{ textAlign: 'center', marginTop: '5px' }}>{getButtonText(room)}</div>
            </div>
          );
        })}
      </SimpleGrid>

      {showPendingModal && (
        <Modal
          opened={true}
          onClose={handleCloseModal}
          centered
          xOffset={-10}
          size={350}
        >
          {selectedRoom && (
            <PendigCard
              selectedRoom={selectedRoom}
              onClose={handleCloseModal}
              refreshRoomStatus={refreshRoomStatus}
            />
          )}
        </Modal>
      )}

      {showHousekeepingModal && (
        <Housekeeping
          selectedRoom={selectedRoom}
          onClose={handleCloseHousekeepingModal}
          refreshRoomStatus={refreshRoomStatus}
        />
      )}

      {/* Service confirmation modal */}
      <Modal
        opened={showServiceModal}
        onClose={() => { setShowServiceModal(false); setServiceRoom(null); }}
        centered
        size={360}
         closeOnClickOutside={false}  // 🔒 Outside click blocked
             closeOnEscape={false}        // 🔒 ESC key blocked
           withCloseButton={true} 
      >
        <div style={{ padding: 12 }}>
          <Text fz="lg" fw={700} mb={8}>
            {serviceRoom?.roomStatus === 'service' ? 'Mark room as Vacant?' : 'Send room to Manintenance?'}
          </Text>
          <Text fz="sm" color="dimmed" mb={16}>
            {serviceRoom?.roomStatus === 'service'
              ? `This will make Room ${serviceRoom?.roomNo} vacant again.`
              : `This will mark Room ${serviceRoom?.roomNo} as under manintenance (clears booking data).`}
          </Text>

          <div style={{ display: 'flex', gap: 10 }}>
            <Button
              fullWidth
              variant="outline"
              color="gray"
              onClick={() => { setShowServiceModal(false); setServiceRoom(null); }}
            >
              Cancel
            </Button>

            <Button fullWidth onClick={applyServiceChange} loading={serviceBusy}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminRoomsview;
