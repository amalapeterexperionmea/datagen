// src/components/ManageUser.js
import React from 'react';
import styled from 'styled-components';
import ManageUser from './ManageUser';
import Layout from '../Layout/Layout';

// Styled Component for the page wrapper
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;  // Gray background for the entire page
`;

const User = () => {
  return (
    
    <PageWrapper>
        <Layout/>
      <ManageUser />
    </PageWrapper>
  );
};

export default User;
