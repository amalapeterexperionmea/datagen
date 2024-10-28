import React, { useState, useMemo } from 'react';
import DataTable from './DataTable';
import SearchBar from './SearchBar';

const Search = ({ columns, data, onAdd, basePath }) => {
  const [searchInput, setSearchInput] = useState('');
  
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

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <DataTable 
        columns={columns} 
        data={filteredData} 
        onAdd={onAdd} 
        basePath={basePath} 
        isSearchActive={!!searchInput} 
        onBack={handleBack} 
      />
    </>
  );
};

export default Search;
