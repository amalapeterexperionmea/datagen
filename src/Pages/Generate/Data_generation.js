// import React from 'react';
// import DataGenerationForm from './Data_generationForm';
// import styled from 'styled-components';
// import Layout from '../Layout/Layout';

// // Styled component for the main container
// const Container = styled.div`
//   height: 100vh; /* Full viewport height */
//   overflow: hidden; /* Prevent scrolling */
//   display: flex; /* Use flexbox to manage child elements */
//   flex-direction: column; /* Arrange children in a column */
//   padding: 20px; /* Add some padding */
//   box-sizing: border-box; /* Include padding in height calculations */

//   @media (max-width: 768px) {
//     padding: 10px; /* Less padding on smaller screens */
//   }

//   @media (max-width: 480px) {
//     flex-direction: column; /* Stack elements vertically */
//     padding: 5px; /* Further reduce padding */
//   }
// `;

// const Data_generation = () => {
//   return (
//     <Container>
//       <Layout />
//       <DataGenerationForm />
//     </Container>
//   );
// };

// export default Data_generation;


import React from 'react';
import DataGenerationForm from './Data_generationForm';
import styled from 'styled-components';
import Layout from '../../Layout/Layout'; // Corrected import path

// Styled component for the main container
const Container = styled.div`
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Prevent scrolling */
  display: flex; /* Use flexbox to manage child elements */
  flex-direction: column; /* Arrange children in a column */
  padding: 20px; /* Add some padding */
  box-sizing: border-box; /* Include padding in height calculations */

  @media (max-width: 768px) {
    padding: 10px; /* Less padding on smaller screens */
  }

  @media (max-width: 480px) {
    flex-direction: column; /* Stack elements vertically */
    padding: 5px; /* Further reduce padding */
  }
`;

const Data_generation = () => {
  return (
    <Container>
      {/* <Layout /> */}
      <DataGenerationForm />
    </Container>
  );
};

export default Data_generation;
