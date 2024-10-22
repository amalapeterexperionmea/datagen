// src/components/StaticTable.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Styled Components for the Table Layout
const TableContainer = styled.div`
  width: 100%;
  margin: 0 0 0 200px;
  padding: 20px 20px 20px 60px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableHead = styled.thead`
  background-color: #f4f4f9;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #17a2b8; /* Subtle neutral color */
  color: white;
  border: 1px solid #ddd;
  text-align: center; 
  font-size: 14px;
  font-weight: bold;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 14px;
`;

const Title = styled.h2`
  text-align: left;
  color: #333;
  display: inline-block;
  margin-right: 20px;
`;

const Button = styled.button`
  background-color: #17a2b8; /* Green color for add button */
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: #17a2b8;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const UserTableItem = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddUserClick = () => {
    navigate('/user'); // Redirect to root when button is clicked
  };

  return (
    <TableContainer>
      <HeaderContainer>
        <Title>User List</Title>
        <Button onClick={handleAddUserClick}>Add User</Button> 
      </HeaderContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>User Type</TableHeader>
            <TableHeader>Username</TableHeader>
            <TableHeader>Email</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Apsara R</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Apsarasw</TableCell>
            <TableCell>apsaramathew@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Apsara R</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Apsarasw</TableCell>
            <TableCell>apsaramathew@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Apsara R</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Apsarasw</TableCell>
            <TableCell>apsaramathew@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Apsara R</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Apsarasw</TableCell>
            <TableCell>apsaramathew@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Apsara R</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Apsarasw</TableCell>
            <TableCell>apsaramathew@gmail.com</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTableItem;
