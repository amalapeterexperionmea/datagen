import React, { useState, useMemo } from 'react';
import DataTable from './DataTable';
import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';
import styled from 'styled-components';
import { TbFilterDown } from "react-icons/tb";



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
const DropdownContainer = styled.div`
  border: 1.5px solid #2a6f97; 
  border-radius: 4px; 
  display:flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
  width: 93%; 
  height:135px;
  margin-left:42px;
  margin-top:90px;
`;
const Search = ({ columns, data, onAdd, basePath,onToggleFilter }) => {
  const [searchInput, setSearchInput] = useState('');
  const [isFilterVisible, setFilterVisible] = useState(false);
  
  
  
  const filteredData = useMemo(() => {
    if (!searchInput) return data;
    const lowercasedInput = searchInput.toLowerCase();
    return data.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(lowercasedInput)
      )
    );
  }, [data, searchInput]);
  const handleSearch = (value) => {
    setSearchInput(value);
  };
  const handleBack = () => {
    setSearchInput('');  
  };
  const handleToggleFilter = (isVisible) => {
    setFilterVisible(isVisible); 
  };
  const toggleFilterDropdown = () => {
    setFilterVisible(prev => !prev);
    if (onToggleFilter) {
      onToggleFilter(!isFilterVisible);
    }
  };
 
  return (
    <>
      <SearchBar 
        onSearch={handleSearch} 
        onToggleFilter={handleToggleFilter}  
        columns={columns}  
      />
       <IconContainer onClick={toggleFilterDropdown} >
        <TbFilterDown title="Filter" />
      </IconContainer>
      {isFilterVisible && ( 
        <DropdownContainer >
          <FilterDropdown columns={columns} />
        </DropdownContainer>
      )}
      <DataTable 
        columns={columns} 
        data={filteredData} 
        onAdd={onAdd} 
        basePath={basePath} 
        isSearchActive={!!searchInput} 
        onBack={handleBack} 
        isFilterDropdownVisible={isFilterVisible}
      />
     
    </>
  );
};

export default Search;
