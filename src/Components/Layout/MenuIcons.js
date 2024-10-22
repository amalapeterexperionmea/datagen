

import React from 'react';
import styled from 'styled-components';
import UserMenuItem from './UserMenuItem';
import ClientMenuItem from './ClientMenuItem';
import DataGenerationMenuItem from './DataGenerationMenuItem';
import LogoutMenuItem from './LogoutMenuItem';

const MenuWrapper = styled.nav`
  background-color: transparent;
  padding: 15px;
  height: 100vh;
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const MenuIcons = () => {
  return (
    <MenuWrapper>
      <MenuList>
        <ClientMenuItem />
        <UserMenuItem />
        <DataGenerationMenuItem />
      </MenuList>
      <LogoutMenuItem />
    </MenuWrapper>
  );
};

export default MenuIcons;
