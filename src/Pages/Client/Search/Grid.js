import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../../Components/Search';




const Grid = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

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

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/clientlist'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); 
        setData(result.clients); 
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
      <Search columns={columns} data={data} onAdd={onAdd} basePath="/client/update"></Search>
    </div>
  );
};

export default Grid;
