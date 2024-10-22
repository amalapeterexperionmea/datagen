import React from 'react';
import styled from 'styled-components';
import Form from './clientreg';
import Layout from '../Layout/Layout';


const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9; 
`;

const Client = () => {
  return (
    
    <PageWrapper>
        <Layout/>
      <Form />
    </PageWrapper>
  );
};

export default Client;
