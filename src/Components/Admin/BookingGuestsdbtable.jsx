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
import React, { useEffect, useState } from 'react';
import { Table, Pagination, TextInput, MultiSelect, Button } from '@mantine/core';
import { IconSearch, IconDownload } from '@tabler/icons-react';
import client from '../../API/api';
import { saveAs } from 'file-saver';

const columnOptions = [
  { value: 'all', label: 'All' },
  // { value: 'bookingId', label: 'Booking ID' },
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
  { value: 'numOfDays', label: 'NumOfDays' },
  { value: 'modeOfPayment', label: 'Mode Of Payment' },
  { value: 'paidAmount', label: 'Paid Amount' },
  { value: 'balance', label: 'Balance' },
  { value: 'totalAmount', label: 'Total Amount' },
  // { value: 'bookingStatus', label: 'Status' },
];

const BookingDetailsTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [visibleColumns, setVisibleColumns] = useState(columnOptions.map(option => option.value));

  const fetchData = async (page) => {
    try {
      const response = await client.get('/bookings/get_all_bookings', {
        params: {
          page,
          limit: 15,
        },
      });

      if (response.data && response.data.data) {
        setData(response.data.data);
        setTotalPages(response.data.totalPages);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

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
      );
  
    return matchesSearch;
  });
  // Download CSV logic
  const downloadCSV = () => {
    const csvData = filteredData.map(item => ({
      // BookingID: item.bookingId?.toString() || '',  
      BookingType: item.bookingType || '',
      NoOfGuests: item.noOfGuests?.toString() || '',
      NoOfAdults: item.noOfAdults?.toString() || '',
      NoOfKids: item.noOfKids?.toString() || '',
      PrimaryGuestName: item.primaryGuestName || '',
      PrimaryGuestPhone: item.primaryGuestPhoneNumber || '',
      PrimaryGuestID: item.primaryGuestIdNumber || '',
      GuestDetails: item.guestDetails?.map(g => `${g.name || '-'}: (${g.gender || '-'}) (${g.guestIdType || '-'}: ${g.guestIdNumber || '-'})`).join('; '),
      CheckIn: item.checkInDateTime ? new Date(item.checkInDateTime).toLocaleString() : '',
      CheckOut: item.checkOutDateTime ? new Date(item.checkOutDateTime).toLocaleString() : '',
      Duration: item.numOfDays?.toString() || '',
      ModeOfPayment: item.modeOfPayment || '',
      PaidAmount: item.paidAmount?.toString() || '',
      Balance: item.balance?.toString() || '',
      TotalAmount: item.totalAmount?.toString() || '',
      // Status: item.bookingStatus || '',
    }));

    const csvContent = [
      [
        // 'Booking ID',
        'Booking Type',
        'No Of Guests',
        'No Of Adults', 
        'No Of Kids',
        'Primary Guest Name',
        'Primary Guest Phone',
        'Primary Guest ID',
        'Guest Details',
        'Check In',
        'Check Out',
        'Duration',
        'Mode Of Payment',
        'Paid Amount',
        'Balance',
        'Total Amount',
        // 'Status',
      ],
      ...csvData.map(row => Object.values(row)),
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'booking_details.csv');
  };

  // Handle column selection
  const handleColumnChange = (value) => {
    if (value.includes('all')) {
      setVisibleColumns(columnOptions.slice(1).map(option => option.value));
    } else {
      setVisibleColumns(value);
      if (visibleColumns.includes('all')) {
        setVisibleColumns(value.filter(val => val !== 'all'));
      }
    }
  };

  return (
    <div>
      {/* Search and Filter Inputs */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', marginTop: '0.75%' }}>
        <TextInput
          icon={<IconSearch />}
          placeholder="Search all fields"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          style={{ marginLeft: "2.5%" }}
        />

        {/* MultiSelect for Column Visibility */}
        <MultiSelect
          data={columnOptions}
          value={visibleColumns}
          onChange={handleColumnChange}
          placeholder="Toggle columns"
        />

        {/* Download Button */}
        <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: "red" }}>
          Download
        </Button>
      </div>

      {/* Table Section */}
      <div style={{ marginTop: '20px', overflowX: 'visible' }}>
        <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%', marginLeft: "auto", marginRight: 'auto' }}>
          <thead>
            <tr>
              {/* {visibleColumns.includes('bookingId') && <th>Booking ID</th>} */}
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
              {visibleColumns.includes('numOfDays') && <th>No.of days</th>}
              {visibleColumns.includes('modeOfPayment') && <th>Mode Of Payment</th>}
              {visibleColumns.includes('totalAmount') && <th>Total Amount</th>}
              {visibleColumns.includes('paidAmount') && <th>Paid Amount</th>}
              {visibleColumns.includes('balance') && <th>Balance</th>}
              {/* {visibleColumns.includes('bookingStatus') && <th>Status</th>} */}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  {/* {visibleColumns.includes('bookingId') && <td>{item.bookingId?.toString() || '-'}</td>} */}
                  {visibleColumns.includes('bookingType') && <td>{item.bookingType || '-'}</td>}
                  {visibleColumns.includes('noOfGuests') && <td>{item.noOfGuests || '-'}</td>}
                  {visibleColumns.includes('noOfAdults') && <td>{item.noOfAdults || '-'}</td>}
                  {visibleColumns.includes('noOfKids') && <td>{item.noOfKids || '-'}</td>}
                  {visibleColumns.includes('primaryGuestName') && <td>{item.primaryGuestName || '-'}</td>}
                  {visibleColumns.includes('primaryGuestPhoneNumber') && <td>{item.primaryGuestPhoneNumber || '-'}</td>}
                  {visibleColumns.includes('primaryGuestIdNumber') && <td>{item.primaryGuestIdNumber || '-'}</td>}
                  {visibleColumns.includes('guestDetails') && (
                    <td>{item.guestDetails?.map(g => `${g.name || '-'}: (${g.gender || '-'}) (${g.guestIdType || '-'}: ${g.guestIdNumber || '-'})`).join('; ') || '-'}</td>
                  )}
                  {visibleColumns.includes('checkInDateTime') && <td>{new Date(item.checkInDateTime).toLocaleString() || '-'}</td>}
                  {visibleColumns.includes('checkOutDateTime') && <td>{new Date(item.checkOutDateTime).toLocaleString() || '-'}</td>}
                  {visibleColumns.includes('numOfDays') && <td>{item.numOfDays || '-'}</td>}
                  {visibleColumns.includes('modeOfPayment') && <td>{item.modeOfPayment || '-'}</td>}
                  {visibleColumns.includes('totalAmount') && <td>{item.totalAmount || '-'}</td>}
                  {visibleColumns.includes('paidAmount') && <td>{item.paidAmount || '-'}</td>}
                  {visibleColumns.includes('balance') && <td>{item.balance || '-'}</td>}
                  
                  {/* {visibleColumns.includes('bookingStatus') && <td>{item.bookingStatus || '-'}</td>} */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={visibleColumns.length} style={{ textAlign: 'center' }}>No records found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination Section */}
      <Pagination
        total={totalPages}
        page={page}
        onChange={setPage}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </div>
  );
};

export default BookingDetailsTable;
