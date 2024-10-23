
import React from 'react';
import HomeIconImage from '../src/Layout/icons/Homeicon.png';

// Breadcrumb configuration
export const breadcrumbConfig = [
  { label: '', path: '/layout', icon: <img src={HomeIconImage} alt="Home" style={{ width: '32px', height: '32px' }} /> },
  { label: 'Client List', path: '/client' },
  { label: 'Client Form', path: '/form', parentPath: '/client' },
  { label: 'Client Updation', path: '/update/', parentPath: '/client' },
  { label: 'User', path: '/user' },
  { label: 'Data Generation', path: '/data-generation' }
];

// Menu items configuration
export const menuItemsConfig = [
  {
    iconClass: "fas fa-user",
    label: "Client",
    route: "/client",
    topMargin: '10px',
    bottomMargin: '10px',
  },
  {
    iconClass: "fas fa-users",
    label: "User",
    route: "/user",
    topMargin: '10px',
    bottomMargin: '10px',
  },
  {
    iconClass: "fas fa-chart-line",
    label: "Data Generation",
    route: "/data-generation",
    topMargin: '10px',
    bottomMargin: '10px',
  },
  {
    iconClass: "fas fa-sign-out-alt",
    label: "Logout",
    isLogout: true,
    topMargin: 'auto',
    bottomMargin: '10px',
  },
];
