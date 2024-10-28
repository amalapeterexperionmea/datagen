import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { Breadcrumb } from './Breadcrumb/Breadcrumb';
import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
 
const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
 
const SidebarWrapper = styled.div`
  width: 250px;
  flex-shrink: 0;
  background-color: #153448; 
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
 
const SidebarToggle = styled.button`
  position: fixed;
  top: 15px;
  left: ${(props) => (props.isOpen ? '250px' : '15px')};
  z-index: 1100;
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
 
  &:hover {
    background-color: #555;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
 
  @media (min-width: 768px) {
    display: none;
  }
 
  svg {
    font-size: 20px;
  }
`;
 
const MainContent = styled.div`
  margin-left: 250px; /* Adjust to accommodate the sidebar */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: margin-left 0.3s ease;
 
  @media (max-width: 768px) {
    margin-left: 0; /* No margin for smaller screens */
  }
`;
 
const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 20px; 
  padding: 0 20px; /* Ensure content has padding on smaller screens */
`;
 
const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
`;
 
const BreadcrumbContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  height: 50px; 
`;
 
const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;
 
  return (
<LayoutWrapper>
<SidebarWrapper>
<Sidebar />
</SidebarWrapper>
 
      <SidebarToggle
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
>
        {isSidebarOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
</SidebarToggle>
 
      <MainContent style={{ marginLeft: isSidebarOpen ? '250px' : '0' }}>
<HeaderWrapper>
<Header />
</HeaderWrapper>
 
        <BreadcrumbContainer>
<Breadcrumb currentPath={currentPath} />
</BreadcrumbContainer>
 
        <ContentWrapper>
          {currentPath === '/' ? <Dashboard /> : <Outlet />}
</ContentWrapper>
</MainContent>
</LayoutWrapper>
  );
};
 
export default Layout;