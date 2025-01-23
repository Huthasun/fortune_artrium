// import React, { useEffect, useState } from 'react';
// import { Table, Pagination, Button } from '@mantine/core';
// import { IconDownload } from '@tabler/icons-react';
// import client from '../../API/api';
// import { saveAs } from 'file-saver';

// const BookingDetailsTable = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchData = async (page) => {
//     try {
//       const response = await client.get('/bookings/get_all_bookings', {
//         params: {
//           page,
//           limit: 15,
//         },
//       });
//       if (response.data && response.data.data) {
//         setData(response.data.data);
//         setTotalPages(response.data.totalPages);
//       } else {
//         setData([]);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   // Download CSV logic
//   const downloadCSV = () => {
//     const csvData = data.map(item => ({
//       BookingID: item.bookingId,
//       BookingType: item.bookingType,
//       NoOfGuests: item.noOfGuests,
//       NoOfAdults: item.noOfAdults,
//       NoOfKids: item.noOfKids,
//       PrimaryGuestName: item.guestDetails[0]?.name || '',
//       PrimaryGuestPhone: item.guestDetails[0]?.phoneNumber || '',
//       PrimaryGuestID: item.guestDetails[0]?.guestIdNumber || '',
//       CheckIn: new Date(item.checkInDateTime).toLocaleString(),
//       CheckOut: new Date(item.checkOutDateTime).toLocaleString(),
//       // RoomID: item.roomId,
//       // HotelID: item.hotelId,
//       Duration: item.duration,
//       ModeOfPayment: item.modeOfPayment,
//       PaidAmount: item.paidAmount,
//       Balance: item.balance,
//       TotalAmount: item.totalAmount,
//       Status: item.bookingStatus,
//     }));

//     const csvContent = [
//       [
//         'Booking ID',
//         'Booking Type',
//         'No Of Guests',
//         'No Of Adults',
//         'No Of Kids',
//         'Primary Guest Name',
//         'Primary Guest Phone',
//         'Primary Guest ID',
//         'Check In',
//         'Check Out',
//         'Room ID',
//         'Hotel ID',
//         'Duration',
//         'Mode Of Payment',
//         'Paid Amount',
//         'Balance',
//         'Total Amount',
//         'Status',
//       ],
//       ...csvData.map(row => Object.values(row)),
//     ]
//       .map(row => row.join(','))
//       .join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'booking_details.csv');
//   };

//   return (
//     <div>
//       {/* Download Button */}
//       <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: "red", marginBottom: '20px' }}>
//         Download
//       </Button>

//       {/* Table Section */}
//       <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%', margin: '0 auto' }}>
//         <thead>
//           <tr>
//             <th>Booking ID</th>
//             <th>Booking Type</th>
//             <th>No Of Guests</th>
//             <th>No Of Adults</th>
//             <th>No Of Kids</th>
//             <th>Primary Guest Name</th>
//             <th>Primary Guest Phone</th>
//             <th>Primary Guest ID</th>
//             <th>Check In</th>
//             <th>Check Out</th>
//             {/* <th>Room ID</th> */}
//             {/* <th>Hotel ID</th> */}
//             <th>Duration</th>
//             <th>Mode Of Payment</th>
//             <th>Paid Amount</th>
//             <th>Balance</th>
//             <th>Total Amount</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.bookingId}</td>
//                 <td>{item.bookingType}</td>
//                 <td>{item.noOfGuests}</td>
//                 <td>{item.noOfAdults}</td>
//                 <td>{item.noOfKids}</td>
//                 <td>{item.guestDetails[0]?.name || '-'}</td>
//                 <td>{item.guestDetails[0]?.phoneNumber || '-'}</td>
//                 <td>{item.guestDetails[0]?.guestIdNumber || '-'}</td>
//                 <td>{new Date(item.checkInDateTime).toLocaleString()}</td>
//                 <td>{new Date(item.checkOutDateTime).toLocaleString()}</td>
//                 <td>{item.roomId}</td>
//                 <td>{item.hotelId}</td>
//                 <td>{item.duration}</td>
//                 <td>{item.modeOfPayment}</td>
//                 <td>{item.paidAmount}</td>
//                 <td>{item.balance}</td>
//                 <td>{item.totalAmount}</td>
//                 <td>{item.bookingStatus}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="17">No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>

//       {/* Pagination Section */}
//       <Pagination
//         page={page}
//         onChange={setPage}
//         total={totalPages}
//         size="lg"
//         style={{ marginTop: '20px', justifyContent: 'center' }}
//       />
//     </div>
//   );
// };

// export default BookingDetailsTable;
// import React, { useEffect, useState } from 'react';
// import { Table, Pagination, TextInput, MultiSelect, Button } from '@mantine/core';
// import { IconSearch, IconDownload,IconTrash } from '@tabler/icons-react';
// import client from '../../API/api';
// import { saveAs } from 'file-saver';

// const columnOptions = [
//   { value: 'all', label: 'All' },
//   // { value: 'bookingId', label: 'Booking ID' },
//   { value: 'roomNo', label: 'Room No' },
//   { value: 'bookingType', label: 'Booking Type' },
//   { value: 'noOfGuests', label: 'No. Of Guests' },
//   { value: 'noOfAdults', label: 'No. Of Adults' },
//   { value: 'noOfKids', label: 'No. Of Kids' },
//   { value: 'primaryGuestName', label: 'Primary Guest Name' },
//   { value: 'primaryGuestPhoneNumber', label: 'Primary Guest Phone' },
//   { value: 'primaryGuestIdNumber', label: 'Primary Guest ID' },
//   { value: 'guestDetails', label: 'Guest Details' },
//   { value: 'checkInDateTime', label: 'Check In' },
//   { value: 'checkOutDateTime', label: 'Check Out' },
//   { value: 'numOfDays', label: 'NumOfDays' },
//   { value: 'modeOfPayment', label: 'Mode Of Payment' },
//   { value: 'paidAmount', label: 'Paid Amount' },
//   { value: 'balance', label: 'Balance' },
//   { value: 'totalAmount', label: 'Total Amount' },
//   // { value: 'bookingStatus', label: 'Status' },

//   { value: 'total', label: 'Total' },
//   { value: 'action', label: 'Action' },
// ];

// const BookingDetailsTable = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [search, setSearch] = useState('');
//   const [visibleColumns, setVisibleColumns] = useState(columnOptions.map(option => option.value));

//   const fetchData = async (page) => {
//     try {
//       const response = await client.get('/bookings/get_all_bookings', {
//         params: {
//           page,
//           limit: 15,
//         },
//       });

//       if (response.data && response.data.data) {
//         const sortedData = response.data.data.sort((a, b) => {
//           // Sorting by checkInDateTime (or createdAt) in descending order so that the most recent booking is first
//           const dateA = new Date(a.checkInDateTime).getTime();
//           const dateB = new Date(b.checkInDateTime).getTime();
//           return dateB - dateA; // descending order
//         });

//         setData(sortedData);
//         setTotalPages(response.data.totalPages);
//       } else {
//         setData([]);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   const filteredData = data.filter((item) => {
//     const matchesSearch =
//       search === '' ||
//       Object.values(item).some(value => 
//         value && typeof value === 'string' 
//           ? value.toLowerCase().includes(search.toLowerCase()) 
//           : value && typeof value === 'number' 
//             ? value.toString().toLowerCase().includes(search.toLowerCase())
//             : false
//       ) ||
//       item.guestDetails?.some(g => 
//         g.name && g.name.toLowerCase().includes(search.toLowerCase())
//       );
  
//     return matchesSearch;
//   });
//   // Download CSV logic
//   const downloadCSV = () => {
//     const csvData = filteredData.map(item => ({
//       // BookingID: item.bookingId?.toString() || '',  
//       RoomNo: item.roomNo || '',
//       BookingType: item.bookingType || '',
//       NoOfGuests: item.noOfGuests?.toString() || '',
//       NoOfAdults: item.noOfAdults?.toString() || '',
//       NoOfKids: item.noOfKids?.toString() || '',
//       PrimaryGuestName: item.primaryGuestName || '',
//       PrimaryGuestPhone: item.primaryGuestPhoneNumber || '',
//       PrimaryGuestID: item.primaryGuestIdNumber || '',
//       GuestDetails: item.guestDetails?.map(g => `${g.name || '-'}: (${g.gender || '-'}) (${g.guestIdType || '-'}: ${g.guestIdNumber || '-'})`).join('; '),
//       CheckIn: item.checkInDateTime ? new Date(item.checkInDateTime).toLocaleString() : '',
//       CheckOut: item.checkOutDateTime ? new Date(item.checkOutDateTime).toLocaleString() : '',
//       Duration: item.numOfDays?.toString() || '',
//       ModeOfPayment: item.modeOfPayment || '',
//       PaidAmount: item.paidAmount?.toString() || '',
//       Balance: item.balance?.toString() || '',
//       TotalAmount: item.totalAmount?.toString() || '',
//       // total: item.pmytotalAmount?.toString()||'',
//       // Status: item.bookingStatus || '',
//     }));

//     const csvContent = [
//       [
//         'RoomNo',
//         // 'Booking ID',
//         'Booking Type',
//         'No Of Guests',
//         'No Of Adults', 
//         'No Of Kids',
//         'Primary Guest Name',
//         'Primary Guest Phone',
//         'Primary Guest ID',
//         'Guest Details',
//         'Check In',
//         'Check Out',
//         'Duration',
//         'Mode Of Payment',
//         'Paid Amount',
//         'Balance',
//         'Tarrif',
//         'TotalAmount',


//         // 'Status',
//       ],
//       ...csvData.map(row => Object.values(row)),
//     ]
//       .map(row => row.join(','))
//       .join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'booking_details.csv');
//   };

//   // Handle column selection
//   const handleColumnChange = (value) => {
//     if (value.includes('all')) {
//       setVisibleColumns(columnOptions.slice(1).map(option => option.value));
//     } else {
//       setVisibleColumns(value);
//       if (visibleColumns.includes('all')) {
//         setVisibleColumns(value.filter(val => val !== 'all'));
//       }
//     }
//   };
//   const removeBooking = async (bookingId) => {
//     try {
//         const response = await client.delete(`/bookings/deleteGuest/${bookingId}`); // Updated endpoint
//         if (response.status === 200) {
//             setData(data.filter(item => item.bookingId !== bookingId)); // Filter out the deleted guest
//         }
//     } catch (error) {
//         console.error('Error deleting guest:', error);
//     }
// };
 
//   return (
//     <div>
//       {/* Search and Filter Inputs */}
//       <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', marginTop: '0.75%' }}>
//         <TextInput
//           icon={<IconSearch />}
//           placeholder="Search all fields"
//           value={search}
//           onChange={(event) => setSearch(event.currentTarget.value)}
//           style={{ marginLeft: "2.5%" }}
//         />

//         {/* MultiSelect for Column Visibility */}
//         <MultiSelect
//           data={columnOptions}
//           value={visibleColumns}
//           onChange={handleColumnChange}
//           placeholder="Toggle columns"
//         />

//         {/* Download Button */}
//         <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: "red" }}>
//           Download
//         </Button>
//       </div>

//       {/* Table Section */}
//       <div style={{ marginTop: '20px', overflowX: 'visible' }}>
//         <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%', marginLeft: "auto", marginRight: 'auto' }}>
//           <thead>
//             <tr>
//               {/* {visibleColumns.includes('bookingId') && <th>Booking ID</th>} */}
//               {visibleColumns.includes('roomNo') && <th>Room No</th>}
//               {visibleColumns.includes('bookingType') && <th>Booking Type</th>}
//               {visibleColumns.includes('noOfGuests') && <th>No. Of Guests</th>}
//               {visibleColumns.includes('noOfAdults') && <th>No. Of Adults</th>}
//               {visibleColumns.includes('noOfKids') && <th>No. Of Kids</th>}
//               {visibleColumns.includes('primaryGuestName') && <th>Primary Guest Name</th>}
//               {visibleColumns.includes('primaryGuestPhoneNumber') && <th>Primary Guest Phone</th>}
//               {visibleColumns.includes('primaryGuestIdNumber') && <th>Primary Guest ID</th>}
//               {visibleColumns.includes('guestDetails') && <th>Guest Details</th>}
//               {visibleColumns.includes('checkInDateTime') && <th>Check In</th>}
//               {visibleColumns.includes('checkOutDateTime') && <th>Check Out</th>}
//               {visibleColumns.includes('numOfDays') && <th>No.of days</th>}
//               {visibleColumns.includes('modeOfPayment') && <th>Mode Of Payment</th>}
//               {visibleColumns.includes('total') && <th>Total Amount</th>}
           
//               {visibleColumns.includes('paidAmount') && <th>Paid Amount</th>}
//               {visibleColumns.includes('balance') && <th>Balance</th>}
//               {visibleColumns.includes('totalAmount') && <th>Tarrif</th>}
             
//               {visibleColumns.includes('action') && <th>Action</th>}
//               {/* {visibleColumns.includes('bookingStatus') && <th>Status</th>} */}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.length > 0 ? (
//               filteredData.map((item, index) => (
//                 <tr key={index}>
//                   {/* {visibleColumns.includes('bookingId') && <td>{item.bookingId?.toString() || '-'}</td>} */}
//                   {visibleColumns.includes('roomNo') && <td>{item.roomNo || '-'}</td>}
//                   {visibleColumns.includes('bookingType') && <td>{item.bookingType || '-'}</td>}
//                   {visibleColumns.includes('noOfGuests') && <td>{item.noOfGuests || '-'}</td>}
//                   {visibleColumns.includes('noOfAdults') && <td>{item.noOfAdults || '-'}</td>}
//                   {visibleColumns.includes('noOfKids') && <td>{item.noOfKids || 0}</td>}
//                   {visibleColumns.includes('primaryGuestName') && <td>{item.primaryGuestName || '-'}</td>}
//                   {visibleColumns.includes('primaryGuestPhoneNumber') && <td>{item.primaryGuestPhoneNumber || '-'}</td>}
//                   {visibleColumns.includes('primaryGuestIdNumber') && <td>{item.primaryGuestIdNumber || '-'}</td>}
//                   {visibleColumns.includes('guestDetails') && (
//                     <td>{item.guestDetails?.map(g => `${g.name || '-'}: (${g.gender || '-'}) (${g.guestIdType || '-'}: ${g.guestIdNumber || '-'})`).join('; ') || '-'}</td>
//                   )}
//                   {visibleColumns.includes('checkInDateTime') && <td>{new Date(item.checkInDateTime).toLocaleString() || '-'}</td>}
//                   {visibleColumns.includes('checkOutDateTime') && <td>{new Date(item.checkOutDateTime).toLocaleString() || '-'}</td>}
//                   {visibleColumns.includes('numOfDays') && <td>{item.numOfDays || '-'}</td>}
//                   {visibleColumns.includes('modeOfPayment') && <td>{item.modeOfPayment || '-'}</td>}
//                   {visibleColumns.includes('total') && <td>{item.totalAmount*item.numOfDays || '-'}</td>}
                 
//                   {visibleColumns.includes('paidAmount') && <td>{item.paidAmount || 0}</td>}
//                   {visibleColumns.includes('balance') && <td>{item.balance || 0}</td>}
//                   {visibleColumns.includes('totalAmount') && <td>{item.totalAmount || 0}</td>}
                
//                   {visibleColumns.includes('action') && (
//                             <td>
//                               <Button size="xs"
//                                 variant="light"
//                                 color="red"
//                                 onClick={() => removeBooking(item.bookingId)}
//                                 title="Remove"
//                               >
//                                 <IconTrash size={16}/>
//                               </Button>
//                             </td>
//                                 )}
                  
//                   {/* {visibleColumns.includes('bookingStatus') && <td>{item.bookingStatus || '-'}</td>} */}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={visibleColumns.length} style={{ textAlign: 'center' }}>No records found</td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </div>

//       {/* Pagination Section */}
//       <Pagination
//         total={totalPages}
//         page={page}
//         onChange={setPage}
//         style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
//       />
//     </div>
//   );
// };

// export default BookingDetailsTable;
// import React, { useEffect, useState } from 'react';
// import { Table, Button, MultiSelect, TextInput, Modal } from '@mantine/core';
// import { IconDownload, IconTrash } from '@tabler/icons-react';
// import client from '../../API/api';
// import { IconSearch } from '@tabler/icons-react';
// import { saveAs } from 'file-saver';

// const BookingDetailsTable = () => {
//   const [data, setData] = useState([]);
//   const [visibleColumns, setVisibleColumns] = useState([]);
//   const [search, setSearch] = useState('');
//   const [openModal, setOpenModal] = useState(false); 
//   const [deleteId, setDeleteId] = useState(null);
//   const columnOptions = [
//     { value: 'roomNo', label: 'Room No' },
//     { value: 'bookingType', label: 'Booking Type' },
//     { value: 'noOfGuests', label: 'No. Of Guests' },
//     { value: 'noOfAdults', label: 'No. Of Adults' },
//     { value: 'noOfKids', label: 'No. Of Kids' },
//     { value: 'primaryGuestName', label: 'Primary Guest Name' },
//     { value: 'primaryGuestPhoneNumber', label: 'Primary Guest Phone' },
//     { value: 'primaryGuestIdNumber', label: 'Primary Guest ID' },
//     { value: 'guestDetails', label: 'Guest Details' },
//     { value: 'checkInDateTime', label: 'Check In' },
//     { value: 'checkOutDateTime', label: 'Check Out' },
//     { value: 'numOfDays', label: 'No. of Days' },
//     { value: 'modeOfPayment', label: 'Mode Of Payment' },
//     { value: 'totalAmount', label: 'Tarrif' },
//     { value: 'paidAmount', label: 'Paid Amount' },
//     { value: 'balance', label: 'Balance' },
//     { value: 'pmytotalAmount', label: 'Total Amount' },
//     { value: 'action', label: 'Action' },
//   ];

//   useEffect(() => {
//     setVisibleColumns(columnOptions.map((opt) => opt.value)); // Initialize all columns as visible
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await client.get('/bookings/get_all_bookings');
//       if (response.data && response.data.data) {
//         const sortedData = response.data.data.sort((a, b) => {
//           const dateA = new Date(a.checkInDateTime || a.createdAt).getTime();
//           const dateB = new Date(b.checkInDateTime || b.createdAt).getTime();
//           return dateB - dateA; // descending order
//         });
//         setData(sortedData);
//       } else {
//         setData([]);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const filteredData = data.filter((item) => {
//     const matchesSearch =
//       search === '' ||
//       Object.values(item).some(value =>
//         value && typeof value === 'string'
//           ? value.toLowerCase().includes(search.toLowerCase())
//           : value && typeof value === 'number'
//             ? value.toString().toLowerCase().includes(search.toLowerCase())
//             : false
//       ) ||
//       item.guestDetails?.some(g =>
//         g.name && g.name.toLowerCase().includes(search.toLowerCase())
//       );

//     return matchesSearch;
//   });

//   const downloadCSV = () => {
//     const csvData = data.map((item) => ({
//       RoomNo: item.roomNo || '',
//       BookingType: item.bookingType || '',
//       NoOfGuests: item.noOfGuests?.toString() || '',
//       NoOfAdults: item.noOfAdults?.toString() || '',
//       NoOfKids: item.noOfKids?.toString() || '',
//       PrimaryGuestName: item.primaryGuestName || '',
//       PrimaryGuestPhone: item.primaryGuestPhoneNumber || '',
//       PrimaryGuestID: item.primaryGuestIdNumber || '',
//       GuestDetails: item.guestDetails
//         ?.map((g) => `${g.name || '-'} (${g.gender || '-'}) (${g.guestIdType || '-'}: ${g.guestIdNumber || '-'})`)
//         .join('; '),
//       CheckIn: item.checkInDateTime ? new Date(item.checkInDateTime).toLocaleString() : '',
//       CheckOut: item.checkOutDateTime ? new Date(item.checkOutDateTime).toLocaleString() : '',
//       Duration: item.numOfDays?.toString() || '',
//       ModeOfPayment: item.modeOfPayment || '',
//       PaidAmount: item.paidAmount?.toString() || '',
//       Balance: item.balance?.toString() || '',
//       TotalAmount: item.totalAmount?.toString() || '',
//       pmytotalAmount:item.pmytotalAmount?.toString() || '',
//     }));

//     const csvContent = [
//       Object.keys(csvData[0]),
//       ...csvData.map((row) => Object.values(row)),
//     ]
//       .map((row) => row.join(','))
//       .join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'booking_details.csv');
//   };

//   const removeBooking = async (deleteId) => {
//     try {
//       const response = await client.delete(`/bookings/deleteGuest/${deleteId}`);
//       if (response.status === 200) {
//         setData(data.filter((item) => item.bookingId !== deleteId)); // Filter out the deleted record
//         setOpenModal(false); // Close the modal after deletion
//         setDeleteId(null); // Reset deleteId to null
//       }
//     } catch (error) {
//       console.error('Error deleting guest:', error);
//     }
//   };

//   return (
//     <div>
//       <MultiSelect
//         data={columnOptions}
//         value={visibleColumns}
//         onChange={setVisibleColumns}
//         placeholder="Select visible columns"
//         clearable
//         style={{ marginBottom: '20px', width: '100%' }}
//       />
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <TextInput
//           icon={<IconSearch />}
//           placeholder="Search all fields"
//           value={search}
//           onChange={(event) => setSearch(event.currentTarget.value)}
//           style={{ width: '88%' }}
//         />
//         <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: 'red' }}>
//           Download
//         </Button>
//       </div>

//       <div style={{ marginTop: '20px', overflowX: 'visible' }}>
//         <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%', margin: '0 auto' }}>
//           <thead>
//             <tr>
//               {visibleColumns.includes('roomNo') && <th>Room No</th>}
//               {visibleColumns.includes('bookingType') && <th>Booking Type</th>}
//               {visibleColumns.includes('noOfGuests') && <th>No. Of Guests</th>}
//               {visibleColumns.includes('noOfAdults') && <th>No. Of Adults</th>}
//               {visibleColumns.includes('noOfKids') && <th>No. Of Kids</th>}
//               {visibleColumns.includes('primaryGuestName') && <th>Primary Guest Name</th>}
//               {visibleColumns.includes('primaryGuestPhoneNumber') && <th>Primary Guest Phone</th>}
//               {visibleColumns.includes('primaryGuestIdNumber') && <th>Primary Guest ID</th>}
//               {visibleColumns.includes('guestDetails') && <th>Guest Details</th>}
//               {visibleColumns.includes('checkInDateTime') && <th>Check In</th>}
//               {visibleColumns.includes('checkOutDateTime') && <th>Check Out</th>}
//               {visibleColumns.includes('numOfDays') && <th>No. of Days</th>}
//               {visibleColumns.includes('modeOfPayment') && <th>Mode Of Payment</th>}
//               {visibleColumns.includes('totalAmount') && <th>Tarrif</th>}
//               {visibleColumns.includes('paidAmount') && <th>Paid Amount</th>}
//               {visibleColumns.includes('balance') && <th>Balance</th>}
//               {visibleColumns.includes('pmytotalAmount') && <th>Total Amount</th>}
//               {visibleColumns.includes('action') && <th>Action</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.length > 0 ? (
//               filteredData.map((item, index) => (
//                 <tr key={index}>
//                   {visibleColumns.includes('roomNo') && <td>{item.roomNo || '-'}</td>}
//                   {visibleColumns.includes('bookingType') && <td>{item.bookingType || '-'}</td>}
//                   {visibleColumns.includes('noOfGuests') && <td>{item.noOfGuests || '-'}</td>}
//                   {visibleColumns.includes('noOfAdults') && <td>{item.noOfAdults || '-'}</td>}
//                   {visibleColumns.includes('noOfKids') && <td>{item.noOfKids || '-'}</td>}
//                   {visibleColumns.includes('primaryGuestName') && <td>{item.primaryGuestName || '-'}</td>}
//                   {visibleColumns.includes('primaryGuestPhoneNumber') && <td>{item.primaryGuestPhoneNumber || '-'}</td>}
//                   {visibleColumns.includes('primaryGuestIdNumber') && <td>{item.primaryGuestIdNumber || '-'}</td>}
//                   {visibleColumns.includes('guestDetails') && (
//                     <td>
//                       {item.guestDetails
//                         ?.map((g) => `${g.name || '-'} (${g.gender || '-'}) (${g.guestIdType || '-'} ${g.guestIdNumber || '-'})`)
//                         .join(', ') || '-'}
//                     </td>
//                   )}
//                   {visibleColumns.includes('checkInDateTime') && <td>{item.checkInDateTime || '-'}</td>}
//                   {visibleColumns.includes('checkOutDateTime') && <td>{item.checkOutDateTime || '-'}</td>}
//                   {visibleColumns.includes('numOfDays') && <td>{item.numOfDays || '-'}</td>}
//                   {visibleColumns.includes('modeOfPayment') && <td>{item.modeOfPayment || '-'}</td>}
//                   {visibleColumns.includes('totalAmount') && <td>{item.totalAmount || '-'}</td>}
//                   {visibleColumns.includes('paidAmount') && <td>{item.paidAmount || '-'}</td>}
//                   {visibleColumns.includes('balance') && <td>{item.balance || '-'}</td>}
//                   {visibleColumns.includes('pmytotalAmount') && <td>{item.pmytotalAmount || '-'}</td>}
//                   {visibleColumns.includes('action') && (
//                     <td>
//                        <Button
//                         size="xs"
//                         variant="light"
//                         color="red"
//                         // onClick={() => removeBooking(item.bookingId)}
//                         onClick={() => {
//                           setDeleteId(item.bookingId); // Set the ID of the guest to be deleted
//                           setOpenModal(true); // Open the modal
//                         }}
//                         title="Remove"
//                       >
//                         <IconTrash size={16} />
//                       </Button>
//                     </td>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={visibleColumns.length}>No data available</td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//         <Modal
//   opened={openModal}
//   onClose={() => setOpenModal(false)}
//   title="Confirm Deletion"
// >
//   <p>Are you sure you want to delete this guest record?</p>
//   <Button onClick={() => setOpenModal(false)}>Cancel</Button>
//   <Button
//     color="red"
//     onClick={() => removeBooking(deleteId)} // Pass deleteId to the function
//     style={{ marginLeft: '1rem' }}
//   >
//     Confirm Delete
//   </Button>
// </Modal>
//       </div>
//     </div>
//   );
// };

// export default BookingDetailsTable;

import React, { useEffect, useState } from 'react';
import { Table, Button, MultiSelect, TextInput, Modal, Textarea,Pagination, Group, ActionIcon, Select } from '@mantine/core';
import { IconDownload, IconTrash, IconEdit } from '@tabler/icons-react';
import { IoMdCalendar } from 'react-icons/io';
import client from '../../API/api';
import { IconSearch } from '@tabler/icons-react';
import { saveAs } from 'file-saver';
import { DatePicker } from '@mantine/dates';
import { format } from 'date-fns';


const BookingDetailsTable = () => {
  const [data, setData] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([]);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false); 
  const [openEditModal, setOpenEditModal] = useState(false); // Edit modal state
  const [deleteId, setDeleteId] = useState(null);
  // const [editBooking, setEditBooking] = useState(null); // To store the booking data being edited
  const [activePage, setActivePage] = useState(1); // Current page state
  const itemsPerPage = 10; // Number of items per page
  const [value, setValue] = useState([]);
  const [opened, setOpened] = useState(false);
  const [openedcalender, setOpenedcalender] = useState(false);
  const columnOptions = [
    { value: 'roomNo', label: 'Room No' },
    { value: 'bookingType', label: 'Booking Type' },
    { value: 'noOfGuests', label: 'No. Of Guests' },
    { value: 'noOfAdults', label: 'No. Of Adults' },
    { value: 'noOfKids', label: 'No. Of Kids' },
    { value: 'primaryGuestName', label: 'Primary Guest Name' },
    { value: 'primaryGuestPhoneNumber', label: 'Primary Guest Phone' },
    { value: 'primaryGuestIdNumber', label: 'Primary Guest ID' },
    { value: 'guestDetails', label: 'Guest Details' },
    { value: 'checkInDateTime', label: 'Check In' },
    { value: 'checkOutDateTime', label: 'Check Out' },
    { value: 'numOfDays', label: 'No. of Days' },
    { value: 'modeOfPayment', label: 'Mode Of Payment' },
    { value: 'totalAmount', label: 'Tarrif' },
    { value: 'paidAmount', label: 'Paid Amount' },
    { value: 'balance', label: 'Balance' },
    { value: 'pmytotalAmount', label: 'Total Amount' },
    { value: 'paymentDetails', label: 'Payment Details' },
    { value: 'staffName', label: 'Staff Name' },
    { value: 'action', label: 'Action' },
  ];
  const [editBooking, setEditBooking] = useState({
    guestDetails: [
      // Example structure
      {
        name: '',
        gender: '',
        guestIdType: '',
        guestIdNumber: '',
      },
    ],
    paymentDetails: [
      { modeOfPayment: '', paidAmount: 0, _id: '' },
    ],
  });

  const [guestIdProof, setGuestIdProof] = useState('');
  const getMaxLength = (guestIdProof) => {
    switch (guestIdProof) {
      case 'drivers_license':
        return 16;
      case 'passport':
        return 8;
      case 'addhar_id':
        return 12;
      default:
        return null; // Default length or value can be adjusted
    }
  };
  const formatAadhaarNumber = (value) => {
    if (guestIdProof !== 'addhar_id') return value; // Only format for Aadhaar ID
    const cleaned = value.replace(/\D/g, ''); // Remove non-digit characters
    const match = cleaned.match(/^(\d{4})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return cleaned; // Return cleaned value if not fully matched
  };

  useEffect(() => {
    setVisibleColumns(columnOptions.map((opt) => opt.value)); // Initialize all columns as visible
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await client.get('/bookings/get_all_bookings');
      if (response.data && response.data.data) {
        const sortedData = response.data.data.sort((a, b) => {
          const dateA = new Date(a.checkInDateTime || a.createdAt).getTime();
          const dateB = new Date(b.checkInDateTime || b.createdAt).getTime();
          return dateB - dateA; // descending order
        });
        setData(sortedData);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredData = data.filter((item) => {
    const matchesSearch =
      search === '' ||
      Object.values(item).some(value =>
        value && typeof value === 'string'
          ? value.toLowerCase().includes(search.toLowerCase())
          : value && typeof value === 'number'
            ? value.toString().toLowerCase().includes(search.toLowerCase())
            : false
      ) ||
      item.guestDetails?.some(g =>
        g.name && g.name.toLowerCase().includes(search.toLowerCase())
      ) ||
      item.paymentDetails?.some(p =>
        p.modeOfPayment?.toLowerCase().includes(search.toLowerCase()) ||
        p.paidAmount?.toString().toLowerCase().includes(search.toLowerCase())
      );

    return matchesSearch;
  });
  const downloadCSV = () => {
    const csvData = data.map((item) => ({
      RoomNo: item.roomNo || '',
      BookingType: item.bookingType || '', // Assuming this field exists in your data
      NoOfGuests: item.noOfGuests?.toString() || '',
      NoOfAdults: item.noOfAdults?.toString() || '',
      NoOfKids: item.noOfKids?.toString() || '',
      PrimaryGuestName: item.primaryGuestName || '',
      PrimaryGuestPhone: item.primaryGuestPhoneNumber || '',
      PrimaryGuestID: item.primaryGuestIdNumber || '',
      GuestDetails: item.guestDetails
        ?.map((g) => `${g.name || '-'} (${g.gender || '-'}) (${g.guestIdType || '-'}: ${g.guestIdNumber || '-'}: ${g.phoneNumber || '-'}) `)
        .join('; '),
      CheckInDate: item.checkInDateTime ? format(new Date(item.checkInDateTime), 'MM/dd/yyyy') : '',
      CheckInTime: item.checkInDateTime ? format(new Date(item.checkInDateTime), 'HH:mm') : '',
      CheckOutDate: item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'MM/dd/yyyy') : '',
      CheckOutTime: item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'HH:mm') : '',
      ModeOfPayment: item.modeOfPayment || '',
      PaidAmount: item.paidAmount?.toString() || '',
      Balance: item.balance?.toString() || '',
      Tarrif: item.tarrif?.toString() || '',
      PaymentDetails: item.paymentDetails
      ?.map((payment) => `${payment.modeOfPayment || '-'}: ₹${payment.paidAmount || '0'} (ID: ${payment._id || '-'})`)
      .join('; '), // Format payment details into a single string
  
      StaffName: item.username || '',
      TotalAmount: item.pmytotalAmount?.toString() || '',
    }));

    // Create CSV content
    const csvContent = [
      Object.keys(csvData[0]), // Use keys from the first object for column headers
      ...csvData.map((row) => Object.values(row)),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'booking_details.csv');
  };

  
  const removeBooking = async (deleteId) => {
    try {
      const response = await client.delete(`/bookings/deleteGuest/${deleteId}`);
      if (response.status === 200) {
        setData(data.filter((item) => item.bookingId !== deleteId)); // Filter out the deleted record
        setOpenModal(false); // Close the modal after deletion
        setDeleteId(null); // Reset deleteId to null
      }
    } catch (error) {
      console.error('Error deleting guest:', error);
    }
  };

  const handleEdit = (item) => {
    setEditBooking(item); // Set the booking details in editBooking state
    setOpenEditModal(true); // Open the edit modal
  };

  const handleSaveEdit = async () => {
    if (!editBooking) return;
    try {
      const response = await client.put(`/bookings/updateBooking/${editBooking.bookingId}`, editBooking);
      if (response.status === 200) {
        setData(data.map((item) => (item.bookingId === editBooking.bookingId ? editBooking : item)));
        setOpenEditModal(false); // Close the edit modal
        setEditBooking(null); // Clear the edit state
      }
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  // Pagination Logic
  const paginatedData = filteredData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <div>
      <MultiSelect
        data={columnOptions}
        value={visibleColumns}
        onChange={setVisibleColumns}
        placeholder="Select visible columns"
        clearable
        style={{ marginBottom: '20px', width: '100%' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextInput
          icon={<IconSearch />}
          placeholder="Search all fields"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          style={{ width: '84%' }}
        />
     <Group position="center">
        <ActionIcon
          variant="light"
          onClick={() => setOpened(true)} // Open modal on click
          aria-label="Open calendar"
        >
          <IoMdCalendar size={40} />
        </ActionIcon>
      </Group>

      {/* Modal to show DatePicker */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)} // Close modal on close action
        title="Select Date Range"
        centered // Center the modal
        size="xs" // Use predefined size (e.g., xs for smaller modal)
        sx={{
          maxWidth: 300, // You can use this to further control the max width
          width: '90%', // Make it 90% of the screen width, or adjust as needed
          paddingLeft:"2vw"
        }}
        
      >
        <DatePicker
          type="range" // Enables range selection
          value={value}
          onChange={setValue}
        />
      </Modal>
        <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: 'red' }}>
          Download
        </Button>
      </div>

      <div style={{ marginTop: '20px', overflowX: 'visible' }}>
        <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%', margin: '0 auto' }}>
          <thead>
            
            <tr>
              {visibleColumns.includes('roomNo') && <th>Room No</th>}
              {visibleColumns.includes('bookingType') && <th>Booking Type</th>}
              {visibleColumns.includes('noOfGuests') && <th>No. Of Guests</th>}
              {visibleColumns.includes('noOfAdults') && <th>No. Of Adults</th>}
              {visibleColumns.includes('noOfKids') && <th>No. Of Kids</th>}
              {visibleColumns.includes('primaryGuestName') && <th>Primary Guest Name</th>}
              {visibleColumns.includes('primaryGuestPhoneNumber') && <th>Primary Guest Phone</th>}
              {visibleColumns.includes('primaryGuestIdNumber') && <th>Primary Guest ID</th>}
              {visibleColumns.includes('guestDetails') && <th>Guest Details</th>}
              {visibleColumns.includes('checkInDateTime') && <th>Check In</th>}
              {visibleColumns.includes('checkOutDateTime') && <th>Check Out</th>}
              {visibleColumns.includes('numOfDays') && <th>No. of Days</th>}
              {visibleColumns.includes('modeOfPayment') && <th>Mode Of Payment</th>}

              {visibleColumns.includes('totalAmount') && <th>Tarrif</th>}
              {visibleColumns.includes('paidAmount') && <th>Paid Amount</th>}
              {visibleColumns.includes('balance') && <th>Balance</th>}
              {visibleColumns.includes('pmytotalAmount') && <th>Total Amount</th>}
              {visibleColumns.includes('paymentDetails') && <th>Payment Details</th>} {/* New Payment Details Column */}
              {visibleColumns.includes('staffName') && <th>Staff Name</th>} {/* Add this line */}
              {visibleColumns.includes('action') && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
          {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <tr key={item.bookingId}>
                  {visibleColumns.includes('roomNo') && <td>{item.roomNo}</td>}
                  {visibleColumns.includes('bookingType') && <td>{item.bookingType}</td>}
                  {visibleColumns.includes('noOfGuests') && <td>{item.noOfGuests}</td>}
                  {visibleColumns.includes('noOfAdults') && <td>{item.noOfAdults}</td>}
                  {visibleColumns.includes('noOfKids') && <td>{item.noOfKids}</td>}
                  {visibleColumns.includes('primaryGuestName') && <td>
                    {item.primaryGuestName}</td>}
                  {visibleColumns.includes('primaryGuestPhoneNumber') && <td>{item.primaryGuestPhoneNumber}</td>}
                  {visibleColumns.includes('primaryGuestIdNumber') && <td>
                    <span > {item.primaryGuestIdNumber}</span>
                    
                    </td>}
                  {visibleColumns.includes('guestDetails') && (
                    <td>
                      {item.guestDetails
                        ?.map((g) => `${g.name || '-'} (${g.gender || '-'}) (${g.guestIdType || '-'} ${g.guestIdNumber || '-'} ${g.phoneNumber || '-'})`)
                        .join(', ') || '-'}
                    </td>
                  )}
              {visibleColumns.includes('checkInDateTime') && (
            <td>
              <span style={{ display: 'block', textAlign: 'center', fontSize: '14px' }}>
                <div
                  style={{
                    padding: '5px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                  }}
                >
                  <ul
                    style={{
                      listStyleType: 'none', // Removes list dots
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    <li>
                      <span style={{  }}>
                        {item.checkInDateTime ? format(new Date(item.checkInDateTime), 'MM/dd/yyyy') : '-'}
                      </span>
                    </li>
                    <li>
                      <span style={{  }}>
                        {item.checkInDateTime ? format(new Date(item.checkInDateTime), 'HH:mm') : '-'}
                      </span>
                    </li>
                  </ul>
                </div>
              </span>
            </td>
          )}
          {visibleColumns.includes('checkOutDateTime') && (
            <td>
              <span style={{ display: 'block', textAlign: 'center', fontSize: '14px' }}>
                <div
                  style={{
                    padding: '5px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                  }}
                >
                  <ul
                    style={{
                      listStyleType: 'none', // Removes list dots
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    <li>
                      <span style={{}}>
                        {item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'MM/dd/yyyy') : '-'}
                      </span>
                    </li>
                    <li>
                      <span style={{ }}>
                        {item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'HH:mm') : '-'}
                      </span>
                    </li>
                  </ul>
                </div>
              </span>
            </td>
          )}
                  {visibleColumns.includes('numOfDays') && <td>{item.numOfDays}</td>}
                  {visibleColumns.includes('modeOfPayment') && <td>{item.modeOfPayment}</td>}
                  {visibleColumns.includes('totalAmount') && <td>{item.tarrif}</td>}
                  {visibleColumns.includes('paidAmount') && <td>{item.paidAmount}</td>}
                  {visibleColumns.includes('balance') && <td>{item.balance}</td>}
                  {visibleColumns.includes('pmytotalAmount') && <td>{item.pmytotalAmount}</td>}
                  <td>
              {item.paymentDetails && item.paymentDetails.length > 0 ? (
                <ul style={{ margin: 0, padding: '0 10px', listStyle: 'none' }}>
                  {item.paymentDetails.map((payment, index) => (
                    <li key={index} style={{ padding: '2px 0' }}>
                      <strong style={{fontWeight:"normal"}}>Amount:</strong> ₹{payment.amount}, 
                      <strong style={{fontWeight:"normal"}}> Mode:</strong> {payment.modeOfPayment}
                      {payment.date && (
                        <>
                          , <strong style={{fontWeight:"normal"}}>Date:</strong> {format(new Date(payment.date), 'MM/dd/yyyy')}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                '-'
              )}
            </td>
          
                  {visibleColumns.includes('staffName') && <td>{item.username}</td>} {/* Display staffName here */}
                  {visibleColumns.includes('action') && (
                    <td>
                      <Button  size="xs" leftIcon={<IconEdit style={{fontSize:"12px"}} />} color="gray" onClick={() => handleEdit(item)}>
                        Edit
                      </Button>
                      <Button
                        size="xl"
                        variant="light"
                        color="red"
                        // onClick={() => removeBooking(item.bookingId)}
                        onClick={() => {
                          setDeleteId(item.bookingId); // Set the ID of the guest to be deleted
                          setOpenModal(true); // Open the modal
                        }}
                        title="Remove"
                      >
                        <IconTrash size={20} />
                      </Button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={visibleColumns.length}>No bookings found</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Pagination
        total={Math.ceil(filteredData.length / itemsPerPage)}
        page={activePage}
        onChange={setActivePage}
        siblings={1}
        style={{ marginTop: '20px', justifyContent: 'center', display: 'flex' }}
      />
        <Modal
  opened={openModal}
  onClose={() => setOpenModal(false)}
  title="Confirm Deletion"
>
  <p>Are you sure you want to delete this guest record?</p>
  <Button onClick={() => setOpenModal(false)}>Cancel</Button>
  <Button
    color="red"
    onClick={() => removeBooking(deleteId)} // Pass deleteId to the function
    style={{ marginLeft: '1rem' }}
  >
    Confirm Delete
  </Button>
</Modal>
      </div>

      {/* Modal for Edit */}
      <Modal opened={openEditModal} onClose={() => setOpenEditModal(false)} title="Extend Booking Details">
        <TextInput
          label="Room No"
          value={editBooking?.roomNo || ''}
          onChange={(e) => setEditBooking({ ...editBooking, roomNo: e.target.value })}
        />
        <TextInput
          label="Booking Type"
          value={editBooking?.bookingType || ''}
          onChange={(e) => setEditBooking({ ...editBooking, bookingType: e.target.value })}
        />
        <TextInput
          label="No. Of Guests"
          value={editBooking?.noOfGuests || ''}
          onChange={(e) => setEditBooking({ ...editBooking, noOfGuests: e.target.value })}
        />
        <TextInput
          label="No. Of Adults"
          value={editBooking?.noOfAdults || ''}
          onChange={(e) => setEditBooking({ ...editBooking, noOfAdults: e.target.value })}
        />
        <TextInput
          label="No. Of Kids"
          value={editBooking?.noOfKids || ''}
          onChange={(e) => setEditBooking({ ...editBooking, noOfKids: e.target.value })}
        /> 
         <TextInput
        label="PrimaryGuestName"
        value={editBooking?.primaryGuestName || ''}
        onChange={(e) => setEditBooking({ ...editBooking, primaryGuestName: e.target.value })}
      />
        <TextInput
        label="PrimaryGuestPhoneNumber"
        value={editBooking?.primaryGuestPhoneNumber || ''}
        onChange={(e) => setEditBooking({ ...editBooking, primaryGuestPhoneNumber: e.target.value })}
      />
      {/* <TextInput
        label="PrimaryGuestIdNumber"
        value={editBooking?.primaryGuestIdNumber || ''}
        onChange={(e) => setEditBooking({ ...editBooking, primaryGuestIdNumber: e.target.value })}
      /> */}
       <TextInput
        label="PrimaryGuestIdNumber"
        value={editBooking?.primaryGuestIdNumber || ''}
        onChange={(e) => setEditBooking({ ...editBooking, primaryGuestIdNumber: e.target.value })}
      />
       {/* Guest Details Inputs */}
  {editBooking?.guestDetails?.map((guest, index) => (
    <div key={index} style={{ marginBottom: '10px' }}>
      <TextInput
        label={`Guest ${index + 1} Name`}
        value={guest.name || ''}
        onChange={(e) => {
          const updatedGuests = [...editBooking.guestDetails];
          updatedGuests[index].name = e.target.value;
          setEditBooking({ ...editBooking, guestDetails: updatedGuests });
        }}
      />
      <TextInput
        label={`Guest ${index + 1} Gender`}
        value={guest.gender || ''}
        onChange={(e) => {
          const updatedGuests = [...editBooking.guestDetails];
          updatedGuests[index].gender = e.target.value;
          setEditBooking({ ...editBooking, guestDetails: updatedGuests });
        }}
      />
      <Select
            label="Guest ID Proof"
            placeholder="Select identity proof"
            data={[
              { label: 'Aadhaar ID', value: 'addhar_id' },
              { label: "Driver's License", value: 'drivers_license' },
              { label: 'Passport', value: 'passport' },
              { label: 'Voter ID', value:'voter_id'}
            ]}
            value={guest.guestIdType || ''}
            onChange={(value) => {
              const updatedGuests = [...editBooking.guestDetails];
              updatedGuests[index].guestIdType = value;
              setGuestIdProof(value);
              setEditBooking({ ...editBooking, guestDetails: updatedGuests });
            }}
            style={{ marginBottom: 15 }}
          />

          {/* Guest ID Number Input */}
          <TextInput
            label={`Guest ${index + 1} ID Number`}
            placeholder="Enter ID number"
            maxLength={getMaxLength(guest.guestIdType)} // Set max length based on ID type
            value={formatAadhaarNumber(guest.guestIdNumber || '')} // Format the ID number if Aadhaar ID
            onChange={(e) => {
              const updatedGuests = [...editBooking.guestDetails];
              updatedGuests[index].guestIdNumber = formatAadhaarNumber(e.target.value); // Update guest ID number
              setEditBooking({ ...editBooking, guestDetails: updatedGuests });
            }}
            style={{ marginBottom: 15 }}
          />
    </div>
  ))}
  <TextInput
  label="CheckInDate"
  value={
    editBooking?.checkInDateTime
      ? format(new Date(editBooking.checkInDateTime), 'MM/dd/yyyy')
      : ''
  }
  onChange={(e) => {
    const date = new Date(editBooking?.checkInDateTime || new Date());
    const [month, day, year] = e.target.value.split('/');
    date.setMonth(parseInt(month) - 1);
    date.setDate(parseInt(day));
    date.setFullYear(parseInt(year));
    setEditBooking({ ...editBooking, checkInDateTime: date.toISOString() });
  }}
/>
<TextInput
  label="CheckInTime"
  value={
    editBooking?.checkInDateTime
      ? format(new Date(editBooking.checkInDateTime), 'HH:mm')
      : ''
  }
  onChange={(e) => {
    const date = new Date(editBooking?.checkInDateTime || new Date());
    const [hours, minutes] = e.target.value.split(':');
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    setEditBooking({ ...editBooking, checkInDateTime: date.toISOString() });
  }}
/>
<TextInput
  label="CheckOutDate"
  value={
    editBooking?.checkOutDateTime
      ? format(new Date(editBooking.checkOutDateTime), 'MM/dd/yyyy')
      : ''
  }
  onChange={(e) => {
    const date = new Date(editBooking?.checkOutDateTime || new Date());
    const [month, day, year] = e.target.value.split('/');
    date.setMonth(parseInt(month) - 1);
    date.setDate(parseInt(day));
    date.setFullYear(parseInt(year));
    setEditBooking({ ...editBooking, checkOutDateTime: date.toISOString() });
  }}
/>
<TextInput
  label="CheckOutTime"
  value={
    editBooking?.checkOutDateTime
      ? format(new Date(editBooking.checkOutDateTime), 'HH:mm')
      : ''
  }
  onChange={(e) => {
    const date = new Date(editBooking?.checkOutDateTime || new Date());
    const [hours, minutes] = e.target.value.split(':');
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    setEditBooking({ ...editBooking, checkOutDateTime: date.toISOString() });
  }}
/>
       {/* <TextInput
        label="CheckOutDateTime"
        value={editBooking?.checkOutDateTime || ''}
        onChange={(e) => setEditBooking({ ...editBooking, checkOutDateTime: e.target.value })}
      /> */}
      <TextInput
        label="No Of Days"
        value={editBooking?.numOfDays || ''}
        onChange={(e) => setEditBooking({ ...editBooking, numOfDays: e.target.value })}
      />
      <Select
  label="Mode of Payment"
  value={editBooking?.modeOfPayment || ''}
  onChange={(value) => setEditBooking({ ...editBooking, modeOfPayment: value })}
  data={[
    { value: 'Credit Card', label: 'Credit Card' },
    { value: 'Cash', label: 'Cash' },
    { value: 'UPI', label: 'UPI' },
  ]}
/>
      <TextInput
        label="Tarrif"
        value={editBooking?.tarrif || ''}
        onChange={(e) => setEditBooking({ ...editBooking, totalAmount: e.target.value })}
      />
       <TextInput
        label="PaidAmount"
        value={editBooking?.paidAmount || ''}
        onChange={(e) => setEditBooking({ ...editBooking, paidAmount: e.target.value })}
      />
       <TextInput
        label="Balance Amount"
        value={editBooking?.balance || ''}
        onChange={(e) => setEditBooking({ ...editBooking, balance: e.target.value })}
      />
       <TextInput
        label="Total Amount"
        value={editBooking?.pmytotalAmount || ''}
        onChange={(e) => setEditBooking({ ...editBooking, pmytotalAmount: e.target.value })}
      />
      {editBooking.paymentDetails?.map((payment, index) => (
  <div key={index}>
    <label>Mode of Payment</label>
    <input
      value={payment.modeOfPayment}
      onChange={(e) => {
        const updatedPayments = [...editBooking.paymentDetails];
        updatedPayments[index].modeOfPayment = e.target.value;
        setEditBooking({ ...editBooking, paymentDetails: updatedPayments });
      }}
    />
    <label>Paid Amount</label>
    <input
      type="number"
      value={payment.paidAmount}
      onChange={(e) => {
        const updatedPayments = [...editBooking.paymentDetails];
        updatedPayments[index].paidAmount = e.target.value;
        setEditBooking({ ...editBooking, paymentDetails: updatedPayments });
      }}
    />
  </div>
))}
      {/* <TextInput
        label="pmytotalAmount"
        value={editBooking?.pmytotalAmount || ''}
        onChange={(e) => setEditBooking({ ...editBooking, pmytotalAmount: e.target.value })}
      /> */}        
        <div style={{marginTop:"11px"}}>
        <Button onClick={handleSaveEdit} style={{backgroundColor:"red"}}>Save Changes</Button>
        </div>
      
      </Modal>
    </div>
  );
};

export default BookingDetailsTable;

// import React, { useEffect, useState } from 'react';
// import { Table, Button, MultiSelect, TextInput, Modal, Textarea, Pagination, Group, ActionIcon } from '@mantine/core';
// import { IconDownload, IconTrash, IconEdit } from '@tabler/icons-react';
// import { IoMdCalendar } from 'react-icons/io';
// import client from '../../API/api';
// import { IconSearch } from '@tabler/icons-react';
// import { saveAs } from 'file-saver';
// import { DatePicker } from '@mantine/dates';

// const BookingDetailsTable = () => {
//   const [data, setData] = useState([]);
//   const [visibleColumns, setVisibleColumns] = useState([]);
//   const [search, setSearch] = useState('');
//   const [openModal, setOpenModal] = useState(false); 
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   const [editBooking, setEditBooking] = useState(null); 
//   const [activePage, setActivePage] = useState(1);
//   const itemsPerPage = 10;
//   const [value, setValue] = useState([]);
//   const [opened, setOpened] = useState(false);
//   const [openedcalender, setOpenedcalender] = useState(false);

//   const columnOptions = [
//     { value: 'roomNo', label: 'Room No' },
//     { value: 'bookingType', label: 'Booking Type' },
//     { value: 'noOfGuests', label: 'No. Of Guests' },
//     { value: 'noOfAdults', label: 'No. Of Adults' },
//     { value: 'noOfKids', label: 'No. Of Kids' },
//     { value: 'primaryGuestName', label: 'Primary Guest Name' },
//     { value: 'primaryGuestPhoneNumber', label: 'Primary Guest Phone' },
//     { value: 'primaryGuestIdNumber', label: 'Primary Guest ID' },
//     { value: 'guestDetails', label: 'Guest Details' },
//     { value: 'checkInDateTime', label: 'Check In' },
//     { value: 'checkOutDateTime', label: 'Check Out' },
//     { value: 'numOfDays', label: 'No. of Days' },
//     { value: 'modeOfPayment', label: 'Mode Of Payment' },
//     { value: 'totalAmount', label: 'Tarrif' },
//     { value: 'paidAmount', label: 'Paid Amount' },
//     { value: 'balance', label: 'Balance' },
//     { value: 'pmytotalAmount', label: 'Total Amount' },
//     { value: 'action', label: 'Action' },
//   ];

//   useEffect(() => {
//     setVisibleColumns(columnOptions.map((opt) => opt.value)); 
//     fetchData();
//   }, []);

//   const fetchData = async (startDate, endDate) => {
//     try {
//       const response = await client.get('/bookings/get_all_bookings', {
//         params: { startDate, endDate },
//       });
//       if (response.data && response.data.data) {
//         const sortedData = response.data.data.sort((a, b) => {
//           const dateA = new Date(a.checkInDateTime || a.createdAt).getTime();
//           const dateB = new Date(b.checkInDateTime || b.createdAt).getTime();
//           return dateB - dateA; 
//         });
//         setData(sortedData);
//       } else {
//         setData([]);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const filteredData = data.filter((item) => {
//     const matchesSearch =
//       search === '' ||
//       Object.values(item).some(value =>
//         value && typeof value === 'string'
//           ? value.toLowerCase().includes(search.toLowerCase())
//           : value && typeof value === 'number'
//             ? value.toString().toLowerCase().includes(search.toLowerCase())
//             : false
//       ) ||
//       item.guestDetails?.some(g =>
//         g.name && g.name.toLowerCase().includes(search.toLowerCase())
//       );

//     return matchesSearch;
//   });

//   const handleDateFilter = () => {
//     const startDate = value[0];
//     const endDate = value[1];
//     fetchData(startDate, endDate);
//     setOpened(false);
//   };

//   const downloadCSV = () => {
//     const csvData = data.map((item) => ({
//       RoomNo: item.roomNo || '',
//       BookingType: item.bookingType || '',
//       NoOfGuests: item.noOfGuests?.toString() || '',
//       NoOfAdults: item.noOfAdults?.toString() || '',
//       NoOfKids: item.noOfKids?.toString() || '',
//       PrimaryGuestName: item.primaryGuestName || '',
//       PrimaryGuestPhone: item.primaryGuestPhoneNumber || '',
//       PrimaryGuestID: item.primaryGuestIdNumber || '',
//       GuestDetails: item.guestDetails
//         ?.map((g) => `${g.name || '-'} (${g.gender || '-'}) (${g.guestIdType || '-'}: ${g.guestIdNumber || '-'})`)
//         .join('; '),
//       CheckIn: item.checkInDateTime ? new Date(item.checkInDateTime).toLocaleString() : '',
//       CheckOut: item.checkOutDateTime ? new Date(item.checkOutDateTime).toLocaleString() : '',
//       Duration: item.numOfDays?.toString() || '',
//       ModeOfPayment: item.modeOfPayment || '',
//       PaidAmount: item.paidAmount?.toString() || '',
//       Balance: item.balance?.toString() || '',
//       TotalAmount: item.totalAmount?.toString() || '',
//       pmytotalAmount:item.pmytotalAmount?.toString() || '',
//     }));

//     const csvContent = [
//       Object.keys(csvData[0]),
//       ...csvData.map((row) => Object.values(row)),
//     ]
//       .map((row) => row.join(','))
//       .join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'booking_details.csv');
//   };

//   const removeBooking = async (deleteId) => {
//     try {
//       const response = await client.delete(`/bookings/deleteGuest/${deleteId}`);
//       if (response.status === 200) {
//         setData(data.filter((item) => item.bookingId !== deleteId)); 
//         setOpenModal(false);
//         setDeleteId(null); 
//       }
//     } catch (error) {
//       console.error('Error deleting guest:', error);
//     }
//   };

//   const handleEdit = (item) => {
//     setEditBooking(item);
//     setOpenEditModal(true); 
//   };

//   const handleSaveEdit = async () => {
//     if (!editBooking) return;
//     try {
//       const response = await client.put(`/bookings/updateBooking/${editBooking.bookingId}`, editBooking);
//       if (response.status === 200) {
//         setData(data.map((item) => (item.bookingId === editBooking.bookingId ? editBooking : item)));
//         setOpenEditModal(false); 
//         setEditBooking(null); 
//       }
//     } catch (error) {
//       console.error('Error updating booking:', error);
//     }
//   };

//   const paginatedData = filteredData.slice(
//     (activePage - 1) * itemsPerPage,
//     activePage * itemsPerPage
//   );

//   return (
//     <div>
//       <MultiSelect
//         data={columnOptions}
//         value={visibleColumns}
//         onChange={setVisibleColumns}
//         placeholder="Select visible columns"
//         clearable
//         style={{ marginBottom: '20px', width: '100%' }}
//       />
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <TextInput
//           icon={<IconSearch />}
//           placeholder="Search all fields"
//           value={search}
//           onChange={(event) => setSearch(event.currentTarget.value)}
//           style={{ width: '84%' }}
//         />
//         <Group position="center">
//           <ActionIcon
//             variant="light"
//             onClick={() => setOpened(true)} 
//             aria-label="Open calendar"
//           >
//             <IoMdCalendar size={40} />
//           </ActionIcon>
//         </Group>

//         {/* Modal to show DatePicker */}
//         <Modal
//           opened={opened}
//           onClose={() => setOpened(false)} 
//           title="Select Date Range"
//           centered
//           size="xs"
//           sx={{
//             maxWidth: 300,
//             width: '90%',
//             paddingLeft:"2vw"
//           }}
//         >
//           <DatePicker
//             type="range"
//             value={value}
//             onChange={setValue}
//           />
//           <Button onClick={handleDateFilter} style={{ marginTop: 10 }}>Done</Button>
//         </Modal>
//         <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: 'red' }}>
//           Download
//         </Button>
//       </div>

//       <div style={{ marginTop: '20px', overflowX: 'visible' }}>
//         <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%', margin: '0 auto' }}>
//           <thead>
//             <tr>
//               {visibleColumns.includes('roomNo') && <th>Room No</th>}
//               {visibleColumns.includes('bookingType') && <th>Booking Type</th>}
//               {visibleColumns.includes('noOfGuests') && <th>No. Of Guests</th>}
//               {visibleColumns.includes('noOfAdults') && <th>No. Of Adults</th>}
//               {visibleColumns.includes('noOfKids') && <th>No. Of Kids</th>}
//               {visibleColumns.includes('primaryGuestName') && <th>Primary Guest</th>}
//               {visibleColumns.includes('primaryGuestPhoneNumber') && <th>Phone No.</th>}
//               {visibleColumns.includes('primaryGuestIdNumber') && <th>Guest ID No.</th>}
//               {visibleColumns.includes('guestDetails') && <th>Guest Details</th>}
//               {visibleColumns.includes('checkInDateTime') && <th>Check-in</th>}
//               {visibleColumns.includes('checkOutDateTime') && <th>Check-out</th>}
//               {visibleColumns.includes('numOfDays') && <th>No. of Days</th>}
//               {visibleColumns.includes('modeOfPayment') && <th>Mode of Payment</th>}
//               {visibleColumns.includes('totalAmount') && <th>Total Amount</th>}
//               {visibleColumns.includes('paidAmount') && <th>Paid Amount</th>}
//               {visibleColumns.includes('balance') && <th>Balance</th>}
//               {visibleColumns.includes('action') && <th>Actions</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.length === 0 ? (
//               <tr>
//                 <td colSpan={visibleColumns.length}>No data available</td>
//               </tr>
//             ) : (
//               paginatedData.map((item) => (
//                 <tr key={item.bookingId}>
//                   {visibleColumns.includes('roomNo') && <td>{item.roomNo}</td>}
//                   {visibleColumns.includes('bookingType') && <td>{item.bookingType}</td>}
//                   {visibleColumns.includes('noOfGuests') && <td>{item.noOfGuests}</td>}
//                   {visibleColumns.includes('noOfAdults') && <td>{item.noOfAdults}</td>}
//                   {visibleColumns.includes('noOfKids') && <td>{item.noOfKids}</td>}
//                   {visibleColumns.includes('primaryGuestName') && <td>{item.primaryGuestName}</td>}
//                   {visibleColumns.includes('primaryGuestPhoneNumber') && <td>{item.primaryGuestPhoneNumber}</td>}
//                   {visibleColumns.includes('primaryGuestIdNumber') && <td>{item.primaryGuestIdNumber}</td>}
//                   {visibleColumns.includes('guestDetails') && (
//                     <td>
//                       {item.guestDetails?.map((g, idx) => (
//                         <div key={idx}>
//                           {g.name} - {g.guestIdNumber}
//                         </div>
//                       ))}
//                     </td>
//                   )}
//                   {visibleColumns.includes('checkInDateTime') && <td>{item.checkInDateTime}</td>}
//                   {visibleColumns.includes('checkOutDateTime') && <td>{item.checkOutDateTime}</td>}
//                   {visibleColumns.includes('numOfDays') && <td>{item.numOfDays}</td>}
//                   {visibleColumns.includes('modeOfPayment') && <td>{item.modeOfPayment}</td>}
//                   {visibleColumns.includes('totalAmount') && <td>{item.totalAmount}</td>}
//                   {visibleColumns.includes('paidAmount') && <td>{item.paidAmount}</td>}
//                   {visibleColumns.includes('balance') && <td>{item.balance}</td>}
//                   {visibleColumns.includes('action') && (
//                     <td>
//                       <Button color="red" onClick={() => { setDeleteId(item.bookingId); setOpenModal(true); }}>
//                         <IconTrash size={18} />
//                       </Button>
//                       <Button onClick={() => handleEdit(item)}>
//                         <IconEdit size={18} />
//                       </Button>
//                     </td>
//                   )}
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </Table>

//         <Pagination
//           page={activePage}
//           onChange={setActivePage}
//           total={Math.ceil(filteredData.length / itemsPerPage)}
//           style={{ marginTop: '20px' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default BookingDetailsTable;
