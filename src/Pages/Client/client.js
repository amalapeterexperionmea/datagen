// import React from 'react';
// import styled from 'styled-components';
// import Layout from '../Layout/Layout';
// import DataGridComponent from '../Menugrid/menugrid';


// const PageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f4f4f9; 
// `;

// const Client = () => {
//   return (
    
//     <PageWrapper>
//         <Layout/>
//         <DataGridComponent/>
//     </PageWrapper>
//   );
// };

// export default Client;


import React from 'react';
import styled from 'styled-components';
import Layout from '../../Layout/Layout'; // Corrected path to Layout
import DataGridComponent from '../../Components/Menugrid/menugrid'; // Corrected path to Menugrid

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
      <Layout />
      <DataGridComponent />
    </PageWrapper>
  );
};

export default Client;
