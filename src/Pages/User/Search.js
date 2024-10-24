import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout'; 
import DataGridComponent from '../../Components/Search/datgrid';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9; 
`;

const SearchUser = () => {
  return (
    <PageWrapper>
      <DataGridComponent />
    </PageWrapper>
  );
};

export default SearchUser;
