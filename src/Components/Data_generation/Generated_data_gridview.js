import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import GridComponent from './Generated_data_grid';

// Styled component for the main container
const Container = styled.div`
  height: 100vh; /* Full viewport height */
  display: flex; /* Use flexbox to manage child elements */
  padding: 20px; /* Add some padding */
  box-sizing: border-box; /* Include padding in height calculations */
`;

const MainContent = styled.div`
  flex: 1; /* Allow this section to grow and fill available space */
  display: flex; /* Use flexbox to manage children */
  justify-content: center; /* Center align the grid horizontally */
  align-items: center; /* Center align the grid vertically */
  overflow: auto; /* Enable scrolling if content overflows */
  padding: 20px; /* Optional padding around the grid */
`;

const StyledGridComponent = styled(GridComponent)`
  width: 90%; /* Make the width responsive */
  max-width: 500px; /* Set a maximum width */
  height: 300px; /* Adjust height as needed */

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    height: auto; /* Allow height to adjust based on content */
  }
`;

const Data_gridview = () => {
  return (
    <Container>
      <Layout />
      <MainContent>
        <StyledGridComponent /> 
      </MainContent>
    </Container>
  );
};

export default Data_gridview;
