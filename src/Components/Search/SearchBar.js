// import React from 'react';
// import { Input } from 'antd';
// import styled from 'styled-components';

// const { Search } = Input;

// const Stylebar = styled(Search)`
//   width: 200px;
//   margin-left: 920px;
//   margin-top: 25px;
// `;

// const SearchBar = ({ onSearch }) => (
//   <Stylebar
//     placeholder="Search..."
//     onSearch={onSearch}  
//     enterButton
//   />
// );

// export default SearchBar;


import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const Stylebar = styled(Search)`
  width: 200px;
  margin-left: 920px;
  margin-top: 25px;

  .ant-input {
    background-color: white; /* Keep input background white */
    color: black; /* Set input text color to black */
  }

  .ant-input:hover,
  .ant-input:focus {
    border-color: transparent; /* Remove border on hover and focus */
    box-shadow: none; /* Remove box shadow */
  }

  .ant-input-suffix {
    color: transparent; /* Initially hide the default icon color */
    background: linear-gradient(90deg, darkblue, blue); /* Set gradient color */
    -webkit-background-clip: text; /* Clip the background for text */
    -webkit-text-fill-color: transparent; /* Fill the text with transparent */
  }

  /* Add hover effect on the suffix */
  .ant-input-suffix:hover {
    color: transparent; /* Keep the color transparent to show gradient */
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
