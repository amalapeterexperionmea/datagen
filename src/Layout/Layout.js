
import React, { useState, useEffect } from 'react';
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
  padding: 0;
  margin-left: 0;
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
  width: ${(props) => (props.isOpen ? 'calc(100% - 250px)' : '100%')};
  margin-left: ${(props) => (props.isOpen ? '250px' : '0')};
  transition: all 0.3s ease;
  padding: 10px 0;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  position: relative;
  height: 50px;
`;

const BreadcrumbContainer = styled.div`
  /* Add any styles you want for breadcrumb container */
`;

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

      <MainContent>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BreadcrumbWrapper isOpen={isSidebarOpen}>
          <BreadcrumbContainer>
            <Breadcrumb currentPath={currentPath} isSidebarOpen={isSidebarOpen} />  
          </BreadcrumbContainer>
        </BreadcrumbWrapper>
        <ContentWrapper>
          {currentPath === '/' ? <Dashboard /> : <Outlet />}
        </ContentWrapper>
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout;

