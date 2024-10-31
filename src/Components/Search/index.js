import React, { useState, useMemo } from 'react';
import DataTable from './DataTable';
import SearchBar from './SearchBar';

const Search = ({ columns, data, onAdd, basePath, }) => {
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
    setFilterVisible(isVisible); // Update filter visibility state
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} onToggleFilter={handleToggleFilter} />
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
