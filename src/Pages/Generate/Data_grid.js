import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  color: #1b4965;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Adjust the number of columns as needed */
  gap: 15px;
`;

const Card = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #2a6f97;
`;

const DataGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data'); // Adjust the URL to your API endpoint
        setData(response.data);
      } catch (error) {
        setError('Error fetching data.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', color: '#1B4965' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>;
  }

  return (
    <Container>
      <Title>Generated Data</Title>
      <Grid>
        {data.map((item, index) => (
          <Card key={index}>
            <p><strong>Organization URI:</strong> {item.organizationuri}</p>
            <p><strong>From Date:</strong> {item.fromdate}</p>
            <p><strong>To Date:</strong> {item.todate}</p>
            <p><strong>From Time:</strong> {item.fromtime}</p>
            <p><strong>To Time:</strong> {item.totime}</p>
            <p><strong>Include Weekends:</strong> {item.includeweekends ? 'Yes' : 'No'}</p>
            <p><strong>Min Duration:</strong> {item.duration.min} minutes</p>
            <p><strong>Max Duration:</strong> {item.duration.max} minutes</p>
            <p><strong>Generation Mode:</strong> {item.generationmode}</p>
            {item.generationmode === 'daily' && (
              <>
                <p><strong>DAU Percent Min:</strong> {item.modeattributes.daily.daupercent.min}%</p>
                <p><strong>DAU Percent Max:</strong> {item.modeattributes.daily.daupercent.max}%</p>
              </>
            )}
            {item.generationmode === 'bulk' && (
              <>
                <p><strong>Batch Size:</strong> {item.modeattributes.bulk.batchsize}</p>
                <p><strong>Number of Records:</strong> {item.modeattributes.bulk.noofrecords}</p>
              </>
            )}
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default DataGrid;
