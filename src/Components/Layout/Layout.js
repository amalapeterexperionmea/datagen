
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutWrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  margin-left: 250px; 
  padding: 30px;
  width: 100%;
`;

const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
            <Sidebar />
            <MainContent>
              <Header/>
              { children }
            </MainContent>
        </LayoutWrapper>
    );
};

export default Layout;
