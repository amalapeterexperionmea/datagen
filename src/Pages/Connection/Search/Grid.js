import React from 'react';
import Search from '../../../Components/Search';


const Connection = () => {
  const columns = React.useMemo(
    () => [
      { Header: 'Organization', accessor: 'name' },
      { Header: 'PostgreSQL', accessor: 'postgres' },
      { Header: 'MongoDB', accessor: 'mongodb' },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { id: 1, name: 'ILE',  postgres: 'v12.6', mongodb: 'v4.4' },
      { id: 2, name: 'Experion',  postgres: 'v13.2', mongodb: 'v5.0' },
      { id: 3, name: 'Synergy',  postgres: 'v14.1', mongodb: 'v6.1' },
    ],
    []
  );
  

  return (
    <div>
      <Search columns={columns} data={data} ></Search>
    </div>
  );
};

export default Connection;
