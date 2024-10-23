import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import axios from 'axios'; // For API requests

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Change if needed */
  justify-content: flex-start; /* Aligns to the top */
  align-items: center; /* Center aligns the grid */
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px; /* Adjust width to make it smaller */
  height: 300px; /* Adjust height to make it smaller */
  position: fixed;
  bottom: 10px; /* Add some space from the bottom */
  right: 10px; /* Add some space from the right */
`;

const Heading = styled.h2`
  font-size: 18px; /* Adjust font size */
  color: #1b4965;
  margin-bottom: 10px;
`;

const columns = [
  { field: 'organizationuri', headerName: 'Organization URI', width: 150 }, // Reduced width
  { field: 'fromdate', headerName: 'From Date', width: 100, type: 'date' }, // Reduced width
  { field: 'todate', headerName: 'To Date', width: 100, type: 'date' }, // Reduced width
  { field: 'includeweekends', headerName: 'Include Weekends', width: 100 }, // Reduced width
  { field: 'fromtime', headerName: 'From Time', width: 100 }, // Reduced width
  { field: 'totime', headerName: 'To Time', width: 100 }, // Reduced width
  { field: 'duration.min', headerName: 'Min Duration', width: 100 }, // Reduced width
  { field: 'duration.max', headerName: 'Max Duration', width: 100 }, // Reduced width
  { field: 'generationmode', headerName: 'Generation Mode', width: 100 }, // Reduced width
];

const GridComponent = () => {
  const [data, setData] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Heading>Generated Data</Heading>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row._id} // Ensure each row has a unique key
        pageSize={3} // Reduce page size to fit the smaller grid
        rowsPerPageOptions={[3, 5, 10]} // Adjust options for page size
        checkboxSelection
        
      />
    </Container>
  );
};

export default GridComponent;
