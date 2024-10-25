


import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { Breadcrumb } from './Breadcrumb/Breadcrumb';
import { Outlet } from 'react-router-dom';

const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const SidebarWrapper = styled.div`
  width: 250px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  background-color: #333;
  color: white;
  position: fixed;
  height: 100vh;
  z-index: 1000;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  overflow: hidden;

  @media (min-width: 768px) {
    transform: translateX(0);
    position: relative;
  }
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
  flex-grow: 1;
  padding: 0px;
  margin-left: ${(props) => (props.isOpen ? '0px' : '0')};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 20px; 
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
`;

const BreadcrumbWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  position: relative; 
  height: 50px; 
`;

const BreadcrumbContainer = styled.div`
  /* */
`;

const Title = styled.h1`
  font-size: 48px; 
  font-weight: bold;
  margin: 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: calc(100vh - 120px); 
`;

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <LayoutWrapper>
      <SidebarWrapper isOpen={isSidebarOpen}>
        <Sidebar />
      </SidebarWrapper>

      <SidebarToggle
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </SidebarToggle>

      <MainContent isOpen={isSidebarOpen}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BreadcrumbWrapper>
          <BreadcrumbContainer>
            <Breadcrumb currentPath={currentPath} />
          </BreadcrumbContainer>
        </BreadcrumbWrapper>
        <ContentWrapper>
          {currentPath === '/' && <Title>DASHBOARD</Title>} 
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout;
