import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const Stylebar = styled(Search)`
  position: fixed;
  top: 110px;
  left: 1156px; 
  width: 200px;
`;


const SearchBar = ({ onSearch }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Stylebar
        placeholder="Search..."
        onSearch={onSearch}  
        enterButton
      />
    </div>
  );
};
export default SearchBar;
