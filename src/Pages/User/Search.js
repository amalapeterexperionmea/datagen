
import React from 'react';
import DataTable from '../../Components/Search/DataTable/DataTable';

const SearchUser = () => {
 
  const columns = React.useMemo(
    () => [
      { Header: 'UserName', accessor: 'username' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'UserType', accessor: 'usertype' },
    ],
    []
  );

  
  const data = React.useMemo(
    () => [
      { id: 1, username: 'Project A', name: 'ProjA', email: 'example.com', usertype: 'v12.6' },
      { id: 2, username: 'Project B', name: 'ProjB', email: 'test.com', usertype: 'v13.2' },
      { id: 3, username: 'Project C', name: 'ProjC', email: 'domain.org', usertype: 'v14.1' },
      { id: 4, username: 'Project D', name: 'ProjD', email: 'sample.net', usertype: 'v11.8' },
      { id: 5, username: 'Project E', name: 'ProjE', email: 'demo.io', usertype: 'v12.10' },
      { id: 6, username: 'Project F', name: 'ProjF', email: 'mockup.org', usertype: 'v13.5' },
      { id: 7, username: 'Project G', name: 'ProjG', email: 'beta.com', usertype: 'v14.2' },
      { id: 8, username: 'Project H', name: 'ProjH', email: 'alpha.net', usertype: 'v11.5' },
      { id: 9, username: 'Project I', name: 'ProjI', email: 'live.org', usertype: 'v12.2'},
      { id: 10,username: 'Project J', name: 'ProjJ', email: 'prod.com', usertype: 'v13.3'},
    ],
    []
  );

  return (
    <div>
      <h1>Users</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SearchUser;
