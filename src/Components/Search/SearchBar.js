


import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const Stylebar = styled(Search)`
  width: 200px;
  margin-left: 920px;
  margin-top: 25px;
  background: linear-gradient(to right, #003366, #001f4d); /* Dark blue gradient */
  border: none; /* Remove border for a smoother look */
  border-radius: 4px; /* Optional: add rounded corners */
  
  & input {
    color: white; /* Change input text color */
    background: transparent; /* Make input background transparent */
  }

  & button {
    background: #00274d; /* Button background color */
    color: white; /* Button text color */
    
    &:hover {
      background: #001a33; /* Button hover color */
    }
  }

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Optional: add shadow on hover */
  }
`;

const SearchBar = ({ onSearch }) => (
  <Stylebar
    placeholder="Search..."
    onSearch={onSearch}
    enterButton
  />
);

export default SearchBar;
