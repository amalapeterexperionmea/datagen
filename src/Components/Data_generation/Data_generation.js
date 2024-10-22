import React from 'react';
import DataGenerationForm from './Data_generationForm';
import styled from 'styled-components';
import Layout from '../Layout/Layout';

// Styled component for the main container
const Container = styled.div`
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Prevent scrolling */
  display: flex; /* Use flexbox to manage child elements */
  flex-direction: column; /* Arrange children in a column */
`;

const Data_generation = () => {
  return (
    <Container>
      <Layout />
      <DataGenerationForm />
    </Container>
  );
};

export default Data_generation;
