import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../Components/Search';
import { Container } from 'react-bootstrap';

const GeneratedGrid = () => {
  const navigate = useNavigate();
  const columns = React.useMemo(
    () => [
      { Header: 'Organization URI', accessor: 'organizationuri',width:"150px"},
      { Header: 'From Date', accessor: 'fromdate',width:"150px" },
      { Header: 'To Date', accessor: 'todate' ,width:"150px"},
      { Header: 'Include Weekends', accessor: 'includeweekends' ,width:"150px"},
      { Header: 'From Time', accessor: 'fromtime',width:"150px" },
      { Header: 'From Time Period', accessor: 'fromtimePeriod' ,width:"150px"},
      { Header: 'To Time', accessor: 'totime',width:"150px" },
      { Header: 'To Time Period', accessor: 'totimePeriod',width:"150px" },
      { Header: 'Duration Min', accessor: 'duration.min' ,width:"150px"},
      { Header: 'Duration Max', accessor: 'duration.max' ,width:"150px"},
      { Header: 'Generation Mode', accessor: 'generationmode' ,width:"150px"},
      { Header: 'DAU Percent Min', accessor: 'modeattributes.daily.daupercent.min',width:"150px" },
      { Header: 'DAU Percent Max', accessor: 'modeattributes.daily.daupercent.max' ,width:"150px"},
      { Header: 'Batch Size', accessor: 'modeattributes.bulk.batchsize' ,width:"150px"},
      { Header: 'No. of Records', accessor: 'modeattributes.bulk.noofrecords',width:"150px" },
    ],
    [],
  );

  const data = React.useMemo(
    () => [
      {
        id: 1,
        organizationuri: 'http://example.com',
        fromdate: '2023-01-01',
        todate: '2023-01-31',
        includeweekends: true,
        fromtime: '09:00',
        fromtimePeriod: 'AM',
        totime: '05:00',
        totimePeriod: 'PM',
        duration: { min: 30, max: 60 },
        generationmode: 'daily',
        modeattributes: {
          daily: { daupercent: { min: 10, max: 20 } },
          bulk: { batchsize: 100, noofrecords: 1000 },
        },
      },
      {
        id: 2,
        organizationuri: 'http://test.com',
        fromdate: '2023-02-01',
        todate: '2023-02-28',
        includeweekends: false,
        fromtime: '10:00',
        fromtimePeriod: 'AM',
        totime: '04:00',
        totimePeriod: 'PM',
        duration: { min: 45, max: 90 },
        generationmode: 'bulk',
        modeattributes: {
          daily: { daupercent: { min: 15, max: 25 } },
          bulk: { batchsize: 200, noofrecords: 2000 },
        },
      },
    ],
    []
  );

  const onGenerate = () => {
    navigate('/generated-grid/data-generation'); 
  };

  return (
    <Container
      fluid
      style={{
        overflowX: 'auto',
        padding: '10px',
        fontSize: '0.85rem',
        lineHeight: '1.2',
      }}
    >
      <Search columns={columns} data={data} onAdd={onGenerate} basePath="/generated-grid " />
    </Container>
  );
};
export default GeneratedGrid;   
