import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  color: grey;
  letter-spacing: 10px;
  align-items: center;
  height: calc(100vh - 120px); 
`;

const Dashboard = () => {
  return (
    <Title>Dashboard</Title>
  );
};

export default Dashboard;
