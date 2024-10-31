import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../Components/Search';
import { Container } from 'react-bootstrap';

const GeneratedGrid = () => {
  const navigate = useNavigate();
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

  const data = React.useMemo(() => [
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


   

    


    
  ], []);

  const onGenerate = () => {
    navigate('/generated-grid/data-generation'); 
  };

  return (
    <Container
      fluid
      style={{
        overflowX: 'auto',
        padding: '10px',
        fontSize: '0.75rem',
        lineHeight: '1',
        marginTop:'-20px',
      }}
    >
      <Search
        columns={columns}
        data={data}
        onAdd={onGenerate}
        basePath="/generated-grid"
        rowStyle={{
          height: '40px',
        }}
      />
    </Container>
  );
};

export default GeneratedGrid;
