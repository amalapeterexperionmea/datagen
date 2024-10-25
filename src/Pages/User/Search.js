// src/Pages/Client/Client.js
import React from 'react';
import DataTable from '../../Components/Search/DataTable/DataTable';
import { useNavigate } from 'react-router-dom';

const SearchUser = () => {
  // Column definitions
  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'User Name', accessor: 'username' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'User Type', accessor: 'usertype' },
    ],
    []
  );

  // Sample data
  const data = React.useMemo(
    () => [
      { id: 1, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
      { id: 2, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
      { id: 3, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
      { id: 4, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
      { id: 5, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
      { id: 6, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
      { id: 7, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
      { id: 8, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
      { id: 9, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
      { id: 10, name: 'kishore', username: 'Kishoreproject', email: 'example.com', usertype: 'Admin' },
    
    ],
    []
  );
  const onAdd = () => {
    navigate('/AddUser'); 
  };

  return (
    <div>
      <DataTable columns={columns} data={data} onAdd={onAdd} />
    </div>
  );
};

export default Client;
