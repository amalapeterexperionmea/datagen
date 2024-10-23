// src/App.js
import React from 'react';
import UserTableItem from './UserTableItem';
import Layout from '../../Layout/Layout'; // Adjusted import path

import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;  // Gray background for the entire page
`;

const UserTable = () => {
  return (
    <div>
      <h1>User List</h1>
      <PageWrapper>
        <Layout/>
        <UserTableItem />
      </PageWrapper>
      
    </div>
  );
};

export default UserTable;
