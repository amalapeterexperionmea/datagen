import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../../Components/Search';

const Grid = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Short Name', accessor: 'shortName' },
      { Header: 'Domain', accessor: 'domain' },
      { Header: 'PostgreSQL', accessor: 'postgres' }, 
      { Header: 'MongoDB', accessor: 'mongodb' },     
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/clientlist');
        const result = await response.json();
        console.log('Raw Response:', result);  
  
        const transformedData = result.clients.map(client => ({
          ...client,
          postgres: client.postgres ? Object.values(client.postgres) : 'N/A',
          mongodb: client.mongodb ? Object.values(client.mongodb): 'N/A',
        }));
        console.log('Transformed Data:', transformedData);  
        setData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const onAdd = () => {
    navigate('/client/Add');
  };

  return (
    <div>
      <Search 
        columns={columns} 
        data={data} 
        onAdd={onAdd} 
        basePath="/client/update" 
        currentPage="Client" 
      />
    </div>
  );
};

export default Grid;
