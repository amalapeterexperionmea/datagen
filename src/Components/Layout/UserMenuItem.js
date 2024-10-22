import React from 'react';
import { Link } from 'react-router-dom';
import BaseMenuItem from './BaseMenuItem';

const UserMenuItem = () => {
  return (
    <Link to="/user" style={{ textDecoration: 'none' }}> {/* Set the desired route here */}
      <BaseMenuItem>
        <i className="fas fa-user"></i> User
      </BaseMenuItem>
    </Link>
  );
};

export default UserMenuItem;
