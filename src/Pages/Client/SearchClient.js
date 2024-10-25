import React from 'react';
import DataTable from '../../Components/Search/DataTable';
import { useNavigate } from 'react-router-dom';

const Client = () => {
  const navigate = useNavigate();
  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Short Name', accessor: 'shortname' },
      { Header: 'Domain', accessor: 'domain' },
      { Header: 'PostgreSQL', accessor: 'postgres' },
      { Header: 'MongoDB', accessor: 'mongodb' },
    ],
    []
  );


  const data = React.useMemo(
    () => [
      { id: 1, name: 'Project A', shortname: 'ProjA', domain: 'example.com', postgres: 'v12.6', mongodb: 'v4.4' },
      { id: 2, name: 'Project B', shortname: 'ProjB', domain: 'test.com', postgres: 'v13.2', mongodb: 'v5.0' },
      { id: 3, name: 'Project C', shortname: 'ProjC', domain: 'domain.org', postgres: 'v14.1', mongodb: 'v6.1' },
      { id: 4, name: 'Project D', shortname: 'ProjD', domain: 'sample.net', postgres: 'v11.8', mongodb: 'v3.6' },
      { id: 5, name: 'Project E', shortname: 'ProjE', domain: 'demo.io', postgres: 'v12.10', mongodb: 'v4.2' },
      { id: 6, name: 'Project F', shortname: 'ProjF', domain: 'mockup.org', postgres: 'v13.5', mongodb: 'v5.5' },
      { id: 7, name: 'Project G', shortname: 'ProjG', domain: 'beta.com', postgres: 'v14.2', mongodb: 'v6.0' },
      { id: 8, name: 'Project H', shortname: 'ProjH', domain: 'alpha.net', postgres: 'v11.5', mongodb: 'v3.8' },
      { id: 9, name: 'Project I', shortname: 'ProjI', domain: 'live.org', postgres: 'v12.2', mongodb: 'v4.6' },
      { id: 10, name: 'Project J', shortname: 'ProjJ', domain: 'prod.com', postgres: 'v13.3', mongodb: 'v5.1' },
      { id: 11, name: 'Project K', shortname: 'ProjA', domain: 'example.com', postgres: 'v12.6', mongodb: 'v4.4' },
      { id: 12, name: 'Project L', shortname: 'ProjB', domain: 'test.com', postgres: 'v13.2', mongodb: 'v5.0' },
      { id: 13, name: 'Project M', shortname: 'ProjC', domain: 'domain.org', postgres: 'v14.1', mongodb: 'v6.1' },
      { id: 14, name: 'Project N', shortname: 'ProjD', domain: 'sample.net', postgres: 'v11.8', mongodb: 'v3.6' },
      { id: 15, name: 'Project O', shortname: 'ProjE', domain: 'demo.io', postgres: 'v12.10', mongodb: 'v4.2' },
      { id: 16, name: 'Project P', shortname: 'ProjF', domain: 'mockup.org', postgres: 'v13.5', mongodb: 'v5.5' },
      { id: 17, name: 'Project Q', shortname: 'ProjG', domain: 'beta.com', postgres: 'v14.2', mongodb: 'v6.0' },
      { id: 18, name: 'Project R', shortname: 'ProjH', domain: 'alpha.net', postgres: 'v11.5', mongodb: 'v3.8' },
      { id: 1, name: 'Project S', shortname: 'ProjI', domain: 'live.org', postgres: 'v12.2', mongodb: 'v4.6' },
      { id: 20, name: 'Project T', shortname: 'ProjJ', domain: 'prod.com', postgres: 'v13.3', mongodb: 'v5.1' },
    ],
    []
  );
  const onAdd = () => {
    navigate('/client/form'); 
  };

  return (
    <div>
      <DataTable columns={columns} data={data} onAdd={onAdd} basePath="/client/update" />
    </div>
  );
};

export default Client;
