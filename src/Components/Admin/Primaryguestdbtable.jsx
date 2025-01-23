// import React, { useEffect, useState } from 'react';
// import { Avatar, Image, Table } from '@mantine/core';
// import axios from 'axios';
// import client from '../../API/api';
// import Header from '../Header';
// // import Fortune from '../../assets/fj.jpg';


// const Primaryguestdbtable = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await client.get('/create-primary-guest/all');
//         console.log("Full Response:", response);
        
//         // Adjust this line based on the actual structure of the response
//         setData(response.data || []);
//         setLoading(false); // Set loading to false after data is fetched 
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false); // Set loading to false even if there is an error
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (

//     <div>
//       {/* <Header/> */}
//        {/* <div style={{ backgroundColor: '#fff', width: "375px", height: "70px", top: "44px", display: "flex", justifyContent: "space-between" ,borderBottom:"black"}}>
//          <Image src={Fortune} alt='logo' style={{ height: '70px ', width: "17%", marginLeft: "10px", padding:"10px" }} />
//            <Avatar color="orange" radius="xl" size={60}   style={{ marginRight: "10px", padding:"10px"}}>F</Avatar>
//        </div> */}
//       <Table striped highlightOnHover withBorder withColumnBorders>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Phone Number</th>
//             <th>Guest ID Type</th>
//             <th>Guest ID Number</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.gender}</td>
//                 <td>{item.phoneNumber}</td>
//                 <td>{item.guestIdType}</td>
//                 <td>{item.guestIdNumber}</td>
//                 <td>{item.address}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Primaryguestdbtable;
        //// this is main code//////
// import React, { useEffect, useState } from 'react';
// import { Avatar, Table, Pagination, Button } from '@mantine/core';
// import client from '../../API/api';
// import { IconTrash } from '@tabler/icons-react';

// const Primaryguestdbtable = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1); 
//   const [totalPages, setTotalPages] = useState(1); 

//   const fetchData = async (page) => {
//     setLoading(true);
//     try {
//       const response = await client.get('/create-primary-guest/all', {
//         params: {
//           page,
//           limit: 100,
//         },
//       });
//       console.log("API Response Data:", response.data);

//       if (response.data && response.data.data) {
//         setData(response.data.data); // Set the guest data
//         setTotalPages(response.data.totalPages); // Set the total pages for pagination
//       } else {
//         console.log("No data received from the server");
//         setData([]);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (error) {
//   //   return <div>Error: {error}</div>;
//   // }
//   const removeBooking = async (primaryGuest_Id) => {
//         try {
//             const response = await client.delete(`/create-primary-guest/deleteGuest/${primaryGuest_Id}`); // Updated endpoint
//             if (response.status === 200) {
//                 setData(data.filter(item => item.primaryGuest_Id !== primaryGuest_Id)); // Filter out the deleted guest
//             }
//         } catch (error) {
//             console.error('Error deleting guest:', error);
//         }
//     };

//   return (
//     <div>
//       <Table striped highlightOnHover withBorder withColumnBorders>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Phone Number</th>
//             <th>Guest ID Type</th>
//             <th>Guest ID Number</th>
//             <th>Address</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.gender}</td>
//                 <td>{item.phoneNumber}</td>
//                 <td>{item.guestIdType}</td>
//                 <td>{item.guestIdNumber}</td>
//                 <td>{item.address}</td>
//                 <td>
//                 <Button
//                         size="xs"
//                         variant="light"
//                         color="red"
//                         onClick={() => removeBooking(item.primaryGuest_Id)} 
//                         title="Remove"
//                       >
//                         <IconTrash size={16} />
//                       </Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>

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

// export default Primaryguestdbtable;
// import React, { useEffect, useState } from 'react';
// import { Table, Pagination, TextInput, Select, Button, MultiSelect } from '@mantine/core';
// import { IconSearch, IconDownload, IconTrash } from '@tabler/icons-react';
// import client from '../../API/api'; // Ensure your client is set up for API calls
// import { saveAs } from 'file-saver';

// const columnOptions = [
//   { value: 'all', label: 'All' },
//   { value: 'name', label: 'Name' },
//   { value: 'gender', label: 'Gender' },
//   { value: 'phoneNumber', label: 'Phone Number' },
//   { value: 'guestIdType', label: 'Guest ID Type' },
//   { value: 'guestIdNumber', label: 'Guest ID Number' },
//   { value: 'address', label: 'Address' },
//   { value: 'action', label: 'Action' }
// ];

// const Primaryguestdbtable = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [search, setSearch] = useState('');
//   const [visibleColumns, setVisibleColumns] = useState(columnOptions.map(option => option.value));

//   const fetchData = async (page) => {
//     try {
//       const response = await client.get('/create-primary-guest/all', {
//         params: { page, limit: 15 },
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

//   const filteredData = data.filter((item) => {
//     const matchesSearch =
//       search === '' ||
//       Object.values(item).some(value =>
//         value.toString().toLowerCase().includes(search.toLowerCase())
//       );
//     return matchesSearch;
//   });

//   const downloadCSV = () => {
//     const csvData = filteredData.map(item => ({
//       Name: item.name,
//       Gender: item.gender,
//       PhoneNumber: item.phoneNumber,
//       GuestIDType: item.guestIdType,
//       GuestIDNumber: item.guestIdNumber,
//       Address: item.address,
//     }));

//     const csvContent = [
//       ['Name', 'Gender', 'Phone Number', 'Guest ID Type', 'Guest ID Number', 'Address'],
//       ...csvData.map(row => Object.values(row)),
//     ]
//       .map(row => row.join(','))
//       .join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'guest_data.csv');
//   };

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

//   const removeBooking = async (primaryGuest_Id) => {
//     try {
//         const response = await client.delete(`/create-primary-guest/deleteGuest/${primaryGuest_Id}`); // Updated endpoint
//         if (response.status === 200) {
//             setData(data.filter(item => item.primaryGuest_Id !== primaryGuest_Id)); // Filter out the deleted guest
//         }
//     } catch (error) {
//         console.error('Error deleting guest:', error);
//     }
// };
//   return (
//     <div>
//       <div style={{ display: 'flex', gap: '20px', marginBottom: '1%', marginTop: '0.75%' }}>
//         <TextInput
//           icon={<IconSearch />}
//           placeholder="Search all fields"
//           value={search}
//           onChange={(event) => setSearch(event.currentTarget.value)}
//           style={{ marginLeft: '2.5%' }}
//         />
//         <MultiSelect
//           data={columnOptions}
//           value={visibleColumns}
//           onChange={handleColumnChange}
//           placeholder="Toggle columns"
//         />
//         <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: 'red' }}>
//           Download
//         </Button>
//       </div>

//       <div style={{ marginTop: '20px', overflowX: 'visible' }}>
//         <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}>
//           <thead>
//             <tr>
//               {visibleColumns.includes('name') && <th>Name</th>}
//               {visibleColumns.includes('gender') && <th>Gender</th>}
//               {visibleColumns.includes('phoneNumber') && <th>Phone Number</th>}
//               {visibleColumns.includes('guestIdType') && <th>Guest ID Type</th>}
//               {visibleColumns.includes('guestIdNumber') && <th>Guest ID Number</th>}
//               {visibleColumns.includes('address') && <th>Address</th>}
//               {visibleColumns.includes('action') && <th>Action</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.length > 0 ? (
//               filteredData.map((item, index) => (
//                 <tr key={index}>
//                   {visibleColumns.includes('name') && <td>{item.name}</td>}
//                   {visibleColumns.includes('gender') && <td>{item.gender}</td>}
//                   {visibleColumns.includes('phoneNumber') && <td>{item.phoneNumber}</td>}
//                   {visibleColumns.includes('guestIdType') && <td>{item.guestIdType}</td>}
//                   {visibleColumns.includes('guestIdNumber') && <td>{item.guestIdNumber}</td>}
//                   {visibleColumns.includes('address') && <td>{item.address}</td>}
//                   {visibleColumns.includes('action') && (
//                     <td>
//                       <Button
//                         size="xs"
//                         variant="light"
//                         color="red"
//                         onClick={() => removeBooking(item.primaryGuest_Id)} 
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
//                 <td colSpan="7">No data available</td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </div>

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

// export default Primaryguestdbtable;
import React, { useEffect, useState } from 'react';
import { Avatar, Table, Button, MultiSelect, TextInput, Modal, Pagination } from '@mantine/core';
import { IconDownload, IconSearch, IconTrash } from '@tabler/icons-react';
import client from '../../API/api';
import { saveAs } from 'file-saver';

const Primaryguestdbtable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false); // State to handle modal visibility
  const [deleteId, setDeleteId] = useState(null); // State to hold the ID of the guest to be deleted
const [activePage, setActivePage] = useState(1); // Current page state
  const itemsPerPage = 10; // Number of items per page
  // Column visibility state
  const columnOptions = [
    { value: 'name', label: 'Name' },
    { value: 'gender', label: 'Gender' },
    { value: 'phoneNumber', label: 'Phone Number' },
    { value: 'guestIdType', label: 'Guest ID Type' },
    { value: 'guestIdNumber', label: 'Guest ID Number' },
    { value: 'address', label: 'Address' },
    { value: 'action', label: 'Action' },
  ];
  const [visibleColumns, setVisibleColumns] = useState(columnOptions.map((opt) => opt.value));

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await client.get('/create-primary-guest/all');
      if (response.data && response.data.data) {
        const sortedData = response.data.data.sort((a, b) => b.primaryGuest_Id - a.primaryGuest_Id);
        setData(sortedData);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    const csvData = filteredData.map(item => ({
      Name: item.name,
      Gender: item.gender,
      PhoneNumber: item.phoneNumber,
      GuestIDType: item.guestIdType,
      GuestIDNumber: item.guestIdNumber,
      Address: item.address,
    }));

    const csvContent = [
      ['Name', 'Gender', 'Phone Number', 'Guest ID Type', 'Guest ID Number', 'Address'],
      ...csvData.map(row => Object.values(row)),
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'guest_data.csv');
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const matchesSearch =
      search === '' ||
      Object.values(item).some(value =>
        value && value.toString().toLowerCase().includes(search.toLowerCase())
      );
    return matchesSearch;
  });

  const handleNewRecord = (newRecord) => {
    // Add the new record at the top
    setData((prevData) => [newRecord, ...prevData]);
  };

  const removeBooking = async () => {
    try {
      const response = await client.delete(`/create-primary-guest/deleteGuest/${deleteId}`);
      if (response.status === 200) {
        setData(data.filter((item) => item.primaryGuest_Id !== deleteId));
        setOpenModal(false); // Close modal after successful deletion
        setDeleteId(null); // Reset deleteId
      }
    } catch (error) {
      console.error('Error deleting guest:', error);
    }
  };
  const paginatedData = filteredData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <div>
      {/* Column Visibility MultiSelect */}
      <MultiSelect
        data={columnOptions}
        value={visibleColumns}
        onChange={setVisibleColumns}
        placeholder="Select visible columns"
        clearable
        style={{ marginBottom: '20px', width: '100%' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '2%' }}>
        <TextInput
          icon={<IconSearch />}
          placeholder="Search all fields"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          style={{ width: '88%' }}
        />
        <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: 'red' }}>
          Download
        </Button>
      </div>

      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            {visibleColumns.includes('name') && <th>Name</th>}
            {visibleColumns.includes('gender') && <th>Gender</th>}
            {visibleColumns.includes('phoneNumber') && <th>Phone Number</th>}
            {visibleColumns.includes('guestIdType') && <th>Guest ID Type</th>}
            {visibleColumns.includes('guestIdNumber') && <th>Guest ID Number</th>}
            {visibleColumns.includes('address') && <th>Address</th>}
            {visibleColumns.includes('action') && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
        {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
              <tr key={item.primaryGuest_Id}>
                {visibleColumns.includes('name') && <td>{item.name}</td>}
                {visibleColumns.includes('gender') && <td>{item.gender}</td>}
                {visibleColumns.includes('phoneNumber') && <td>{item.phoneNumber}</td>}
                {visibleColumns.includes('guestIdType') && <td>{item.guestIdType}</td>}
                {visibleColumns.includes('guestIdNumber') && <td>{item.guestIdNumber}</td>}
                {visibleColumns.includes('address') && <td>{item.address}</td>}
                {visibleColumns.includes('action') && (
                  <td>
                    <Button
                      size="xs"
                      variant="light"
                      color="red"
                      onClick={() => {
                        setDeleteId(item.primaryGuest_Id); // Set the ID of the guest to be deleted
                        setOpenModal(true); // Open the modal
                      }}
                      title="Remove"
                    >
                      <IconTrash size={16} />
                    </Button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={visibleColumns.length} style={{ textAlign: 'center' }}>
                No data available
              </td>
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

      {/* Confirmation Modal */}
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title="Confirm Deletion"
      >
        <p>Are you sure you want to delete this guest record?</p>
        <Button onClick={() => setOpenModal(false)}>
          Cancel
        </Button>
        <Button color="red" onClick={removeBooking} style={{ marginLeft: '1rem' }}>
          Confirm Delete
        </Button>
      </Modal>
    </div>
  );
};

export default Primaryguestdbtable;
