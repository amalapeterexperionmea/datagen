import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const Stylebar = styled(Search)`
  position:fixed;
  width: 200px;
  margin-left: 920px;
`;

const SearchBar = ({ onSearch }) => (
  <Stylebar
    placeholder="Search..."
    onSearch={onSearch}  
    enterButton
  />
);

export default SearchBar;

