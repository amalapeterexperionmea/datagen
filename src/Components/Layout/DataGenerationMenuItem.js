import React from 'react';
import BaseMenuItem from './BaseMenuItem';
import { Link } from 'react-router-dom';
const DataGenerationMenuItem = () => {
  return (
    <Link to="/data-generation" style={{ textDecoration: 'none' }}>
          <BaseMenuItem><i className="fas fa-chart-line"></i> Data Generation</BaseMenuItem>
        </Link>
  );
};

export default DataGenerationMenuItem;
