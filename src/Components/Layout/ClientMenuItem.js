import React from 'react';
import BaseMenuItem from './BaseMenuItem';
import { Link } from 'react-router-dom';

const ClientMenuItem = () => {
  return (
    
    <Link to="/client" style={{ textDecoration: 'none' }}>
    <BaseMenuItem>
    <i className="fas fa-user"></i>Client
    </BaseMenuItem>
    </Link>
  );
};

export default ClientMenuItem;

