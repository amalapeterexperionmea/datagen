import React from 'react';
import styled from 'styled-components';


const Finder = () => {
  return (
    <div>
      <label htmlFor="filter-select">Name:</label>
      <input type="text" id="filter-input" placeholder="Enter name" />
      <label htmlFor="filter-select">Shortname:</label>
      <input type="text" id="filter-input" placeholder="Enter name" />
      <label htmlFor="filter-select">Domain:</label>
      <input type="text" id="filter-input" placeholder="Enter name" />
    </div>
  );
};

export default Finder;
