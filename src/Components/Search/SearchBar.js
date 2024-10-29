import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const Stylebar = styled(Search)`
  position: fixed;
  top:90px;
  left: 1170px; 
  width: 200px;
`;


const SearchBar = ({ onSearch }) => (
  <Stylebar
    placeholder="Search..."
    onSearch={onSearch}  
    enterButton
  />
);

export default SearchBar;

