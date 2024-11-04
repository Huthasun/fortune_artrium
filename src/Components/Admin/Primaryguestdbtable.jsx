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
// import { Avatar, Table, Pagination } from '@mantine/core';
// import client from '../../API/api';

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
import { Table, Pagination, TextInput, Select, Button, MultiSelect } from '@mantine/core';
import { IconSearch, IconDownload } from '@tabler/icons-react';
import client from '../../API/api';
import { saveAs } from 'file-saver';

const columnOptions = [
  { value: 'all', label: 'All' }, // Add All option
  { value: 'name', label: 'Name' },
  { value: 'gender', label: 'Gender' },
  { value: 'phoneNumber', label: 'Phone Number' },
  { value: 'guestIdType', label: 'Guest ID Type' },
  { value: 'guestIdNumber', label: 'Guest ID Number' },
  { value: 'address', label: 'Address' },
];

const Primaryguestdbtable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  
  const [visibleColumns, setVisibleColumns] = useState(columnOptions.map(option => option.value)); // All columns visible by default

  const fetchData = async (page) => {
    try {
      const response = await client.get('/create-primary-guest/all', {
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

  // Global Search and Column-wise Filter logic
  const filteredData = data.filter((item) => {
    const matchesSearch =
      search === '' ||
      Object.values(item)
        .some(value => value.toString().toLowerCase().includes(search.toLowerCase()));

    

    return matchesSearch ;
  });

  // Download CSV logic
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


  // Handle column selection
  const handleColumnChange = (value) => {
    if (value.includes('all')) {
      // If 'All' is selected, set all column values
      setVisibleColumns(columnOptions.slice(1).map(option => option.value)); // Exclude 'all' from visible columns
    } else {
      setVisibleColumns(value);
      // If user selects other columns, remove 'All' from selection
      if (visibleColumns.includes('all')) {
        setVisibleColumns(value.filter(val => val !== 'all'));
      }
    }
  };

  return (
    <div>
      {/* Search and Filter Inputs */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '1%',marginTop:"0.75%" }}>
        {/* Global Search */}
        <TextInput
          icon={<IconSearch />}
          placeholder="Search all fields"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          style={{marginLeft:"2.5%"}}
        />
        
       

        {/* MultiSelect for Column Visibility */}
        <MultiSelect
          data={columnOptions}
          
          
          value={visibleColumns}
          onChange={handleColumnChange}
          placeholder="Toggle columns"
        />

        {/* Download Button */}
        <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{backgroundColor:"red"}}>
          Download
        </Button>
      </div>

      {/* Table Section */}
      <div style={{ marginTop: '20px', overflowX: 'visible' }}>

      <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%',marginLeft:"auto",marginRight:'auto'}}>
        <thead>
          <tr>
            {visibleColumns.includes('name') && <th>Name</th>}
            {visibleColumns.includes('gender') && <th>Gender</th>}
            {visibleColumns.includes('phoneNumber') && <th>Phone Number</th>}
            {visibleColumns.includes('guestIdType') && <th>Guest ID Type</th>}
            {visibleColumns.includes('guestIdNumber') && <th>Guest ID Number</th>}
            {visibleColumns.includes('address') && <th>Address</th>}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                {visibleColumns.includes('name') && <td>{item.name}</td>}
                {visibleColumns.includes('gender') && <td>{item.gender}</td>}
                {visibleColumns.includes('phoneNumber') && <td>{item.phoneNumber}</td>}
                {visibleColumns.includes('guestIdType') && <td>{item.guestIdType}</td>}
                {visibleColumns.includes('guestIdNumber') && <td>{item.guestIdNumber}</td>}
                {visibleColumns.includes('address') && <td>{item.address}</td>}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </Table>
      </div>

      {/* Pagination Section */}
      <Pagination
        page={page}
        onChange={setPage}
        total={totalPages}
        size="lg"
        style={{ marginTop: '20px', justifyContent: 'center' }}
      />
    </div>
  );
};

export default Primaryguestdbtable;
