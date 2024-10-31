import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { TbFilterDown } from "react-icons/tb";

const { Search } = Input;

const Stylebar = styled(Search)`
  position: fixed;
  top: 110px;
  left: 1156px; 
  width: 200px;
`;

const IconContainer = styled.div`
  position:fixed;
  left:1370px;
  top:110px;
  background-color: #2a6f97; 
  color: white; 
  width: 32px;
  height: 32px;
  border: none; 
  border-radius: 4px; 
  padding: 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  cursor: pointer; 
`;

const SearchBar = ({ onSearch }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Stylebar
      placeholder="Search..."
      onSearch={onSearch}  
      enterButton
    />
    <IconContainer>
      <TbFilterDown title="Filter" />
    </IconContainer>
  </div>
);

export default SearchBar;
