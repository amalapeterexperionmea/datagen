// src/Pages/Client/Client.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../Components/Search';

const SearchUser = () => {
  
const navigate = useNavigate();
 
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
      { id: 1, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 2, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 3, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 4, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 5, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 6, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 7, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 8, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 9, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 10, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 11, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 12, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 14, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 14, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 15, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
      { id: 16, name: 'kishore', username: 'project', email: 'example.com', usertype: 'Admin' },
    
    ],
    []
  );
  const onAdd = () => {
    navigate('/searchuser/adduser'); 
  };

  return (
    <div>
      <Search columns={columns} data={data} onAdd={onAdd} basePath="/searchuser/edituser" />
    </div>
  );
};

export default SearchUser;
