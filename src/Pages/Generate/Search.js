import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../Components/Search';
import DataTable from '../../Components/Search/DataTable';
const GeneratedGrid = () => {
  const navigate = useNavigate();

  // Adjust the columns to reflect the attributes of DataGenerationForm
  const columns = React.useMemo(
    () => [
      { Header: 'Organization URI', accessor: 'organizationuri' },
      { Header: 'From Date', accessor: 'fromdate' },
      { Header: 'To Date', accessor: 'todate' },
      { Header: 'Include Weekends', accessor: 'includeweekends' },
      { Header: 'From Time', accessor: 'fromtime' },
      { Header: 'From Time Period', accessor: 'fromtimePeriod' },
      { Header: 'To Time', accessor: 'totime' },
      { Header: 'To Time Period', accessor: 'totimePeriod' },
      { Header: 'Duration Min', accessor: 'duration.min' },
      { Header: 'Duration Max', accessor: 'duration.max' },
      { Header: 'Generation Mode', accessor: 'generationmode' },
      { Header: 'DAU Percent Min', accessor: 'modeattributes.daily.daupercent.min' },
      { Header: 'DAU Percent Max', accessor: 'modeattributes.daily.daupercent.max' },
      { Header: 'Batch Size', accessor: 'modeattributes.bulk.batchsize' },
      { Header: 'No. of Records', accessor: 'modeattributes.bulk.noofrecords' },
    ],
    []
  );

  // Example data reflecting DataGenerationForm attributes
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
      // Additional rows as necessary...
    ],
    []
  );

  const onAdd = () => {
    navigate('/client/form'); 
  };

  return (
    <div>
      <Search columns={columns} data={data} onAdd={onAdd} basePath=" " />
    </div>
  );
};

export default GeneratedGrid;   
