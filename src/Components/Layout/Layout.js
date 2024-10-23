
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { Breadcrumb } from './Breadcrumb'; // Import the Breadcrumb component

const LayoutWrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  margin-left: 250px; 
  padding: 30px;
  width: 100%;
`;

const Layout = () => {
  const currentPath = window.location.pathname; // Get the current path

  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <Header />
        <Breadcrumb currentPath={currentPath} /> {/* Pass the current path to the Breadcrumb */}
        {/* Other components can be added here */}
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout;
