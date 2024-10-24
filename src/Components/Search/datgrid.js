// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import styled from 'styled-components';
// import { Button as MuiButton } from '@mui/material'; 
// import { useNavigate } from 'react-router-dom'; 

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 90px;
//   max-width: 1000px;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 97%;
//   height:50px;
//   margin-bottom: 20px; 
//   margin-top: -20px;
// `;

// const Heading = styled.h2`
//   font-size: 24px;
//   color: #1b4965;
//   flex-grow: 1; 
// `;

// const Button = styled(MuiButton)`
//   background-color: #2a6f97;
//   color: white; 
//   &:hover {
//     background-color: #303f9f; 
//   }
// `;


// const columns = [
//   { field: 'name', headerName: 'Name', width: 200 },           
//   { field: 'shortname', headerName: 'Short Name', width: 200 }, 
//   { field: 'domain', headerName: 'Domain', width: 200 },       
//   { field: 'postgres', headerName: 'PostgreSQL', width: 200 }, 
//   { field: 'mongodb', headerName: 'MongoDB', width: 200 },      
// ];

// const rows = [
//   { id: 1, name: 'Project A', shortname: 'ProjA', domain: 'example.com', postgres: 'v12.6', mongodb: 'v4.4' },
//   { id: 2, name: 'Project B', shortname: 'ProjB', domain: 'test.com', postgres: 'v13.2', mongodb: 'v5.0' },
//   { id: 3, name: 'Project C', shortname: 'ProjC', domain: 'domain.org', postgres: 'v14.1', mongodb: 'v6.1' },
//   { id: 4, name: 'Project D', shortname: 'ProjD', domain: 'sample.net', postgres: 'v11.8', mongodb: 'v3.6' },
//   { id: 5, name: 'Project E', shortname: 'ProjE', domain: 'demo.io', postgres: 'v12.10', mongodb: 'v4.2' },
//   { id: 6, name: 'Project F', shortname: 'ProjF', domain: 'mockup.org', postgres: 'v13.5', mongodb: 'v5.5' },
//   { id: 7, name: 'Project G', shortname: 'ProjG', domain: 'beta.com', postgres: 'v14.2', mongodb: 'v6.0' },
//   { id: 8, name: 'Project H', shortname: 'ProjH', domain: 'alpha.net', postgres: 'v11.5', mongodb: 'v3.8' },
//   { id: 9, name: 'Project I', shortname: 'ProjI', domain: 'live.org', postgres: 'v12.2', mongodb: 'v4.6' },
//   { id: 10, name: 'Project J', shortname: 'ProjJ', domain: 'prod.com', postgres: 'v13.3', mongodb: 'v5.1' },
// ];

// export default function DataGridComponent() {
//   const navigate = useNavigate(); 

//   const handleAddUser = () => {
//     navigate('/form'); 
//   };
//   const handleRowClick = (params) => {
//     navigate(`/update/`); 
//   };
//   return (
//     <Container>
//       <Header>
//         <Heading>Client List</Heading>
//         <Button variant="contained" onClick={handleAddUser}>
//           Add Client
//         </Button>
//       </Header>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         hideFooter
//         rowHeight={40}
//         style={{
//           width: "100%",
//           height: "500px",
//           border: "1px solid black",
//         }}
//         sx={{
//            overflow: "hidden",
//            width:"100%",
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//             borderRight: "none",
//             padding :"-10px",
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             borderBottom: "none",
//             borderRight: "none",
//             backgroundColor: '#f5f5f5', 
//             "& .MuiDataGrid-columnHeader": {
//               border: "none", 
//               "&:first-of-type": {
//                 borderLeft: "none",
//               }
//             },
//           },
//           "& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-root .MuiDataGrid-cell:focus": {
//             outline: 'none', 
//           },
//         }}
//         onRowClick={handleRowClick}
//         checkboxSelection={false}
//         disableColumnMenu={true}
//         disableColumnResize={true}
//         disableExtendRowFullWidth={true}
//       />
//     </Container>
//   );
// }


import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material'; 
import { useNavigate } from 'react-router-dom'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  max-width: 1000px;
  margin-bottom: 30px; 
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  height: 50px;
  margin-bottom: 20px; 
  margin-top: -10px;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #1b4965;
  flex-grow: 1; 
`;

const Button = styled(MuiButton)`
  background-color: #2a6f97;
  color: white; 
  &:hover {
    background-color: #303f9f; 
  }
`;

// Define columns for the DataGrid
const columns = [
  { field: 'name', headerName: 'Name', width: 200 },           
  { field: 'shortname', headerName: 'Short Name', width: 200 }, 
  { field: 'domain', headerName: 'Domain', width: 200 },       
  { field: 'postgres', headerName: 'PostgreSQL', width: 200 }, 
  { field: 'mongodb', headerName: 'MongoDB', width: 200 },      
];

// Rows defined
const rows = [
  { id: 1, name: 'Project A', shortname: 'ProjA', domain: 'example.com', postgres: 'v12.6', mongodb: 'v4.4' },
  { id: 2, name: 'Project B', shortname: 'ProjB', domain: 'test.com', postgres: 'v13.2', mongodb: 'v5.0' },
  { id: 3, name: 'Project C', shortname: 'ProjC', domain: 'domain.org', postgres: 'v14.1', mongodb: 'v6.1' },
  { id: 4, name: 'Project D', shortname: 'ProjD', domain: 'sample.net', postgres: 'v11.8', mongodb: 'v3.6' },
  { id: 5, name: 'Project E', shortname: 'ProjE', domain: 'demo.io', postgres: 'v12.10', mongodb: 'v4.2' },
  { id: 6, name: 'Project F', shortname: 'ProjF', domain: 'mockup.org', postgres: 'v13.5', mongodb: 'v5.5' },
  { id: 7, name: 'Project G', shortname: 'ProjG', domain: 'beta.com', postgres: 'v14.2', mongodb: 'v6.0' },
  { id: 8, name: 'Project H', shortname: 'ProjH', domain: 'alpha.net', postgres: 'v11.5', mongodb: 'v3.8' },
  { id: 9, name: 'Project I', shortname: 'ProjI', domain: 'live.org', postgres: 'v12.2', mongodb: 'v4.6' },
  { id: 10, name: 'Project J', shortname: 'ProjJ', domain: 'prod.com', postgres: 'v13.3', mongodb: 'v5.1' },
];

const DataGridContainer = styled.div`
  border: 1px solid black;  /* Add a border to the container */
  
  overflow: hidden;         /* Ensure no scrollbars appear */
`;

export default function DataGridComponent() {
  const navigate = useNavigate(); 

  const handleAddUser = () => {
    navigate('/form'); 
  };

  const handleRowClick = (params) => {
    navigate(`/update/`); 
  };

  // Adjusting the row height
  const rowHeight = 40; 
  const maxRows = Math.floor(500 / rowHeight); 
  const limitedRows = rows.slice(0, maxRows); 

  return (
    <Container>
      <Header>
        <Heading>Client List</Heading>
        <Button variant="contained" onClick={handleAddUser}>
          Add Client
        </Button>
      </Header>
      <DataGridContainer>
        <DataGrid
          rows={limitedRows} // Use limited rows
          columns={columns}
          hideFooter
          rowHeight={rowHeight} // Use the defined row height
          style={{
            width: "100%",
            height: "500px", // Fixed height
            border: "none", // No border on the DataGrid itself
          }}
          sx={{
            overflow: "hidden", // Prevent scroll bars
            width: "100%",
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              borderRight: "none",
              padding: "px", // Set padding to 0 to avoid overflow
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "none",
              borderRight: "none",
              backgroundColor: '#f5f5f5', 
              "& .MuiDataGrid-columnHeader": {
                border: "none", 
                "&:first-of-type": {
                  borderLeft: "none",
                },
              },
            },
            "& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-root .MuiDataGrid-cell:focus": {
              outline: 'none', 
            },
          }}
          onRowClick={handleRowClick}
          checkboxSelection={false}
          disableColumnMenu={true}
          disableColumnResize={true}
          disableExtendRowFullWidth={true}
        />
      </DataGridContainer>
    </Container>
  );
}
