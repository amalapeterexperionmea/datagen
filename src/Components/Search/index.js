import React from 'react'
import DataTable from './DataTable';
import SearchBar from './SearchBar';




const Search = ({ columns, data, onAdd, basePath }) => {
    return (  
        <>
        <SearchBar></SearchBar>
        <DataTable columns={columns} data={data} onAdd={onAdd} basePath="/client/update" ></DataTable>
        </>
    );
}
 
export default Search;