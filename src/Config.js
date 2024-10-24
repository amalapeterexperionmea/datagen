
import React from 'react';
import HomeIconImage from '../src/Layout/icons/Homeicon.png';

// Breadcrumb configuration
export const breadcrumbConfig = [
  { label: '', path: '/layout', icon: <img src={HomeIconImage} alt="Home" style={{ width: '32px', height: '32px' }} /> },
  { label: 'Client List', path: '/client' },
  { label: 'Client Form', path: '/form', parentPath: '/client' },
  { label: 'Client Updation', path: '/update/', parentPath: '/client' },
  { label: 'AddUser', path: '/adduser' },
  { label: 'Data Generation', path: '/data-generation' }
];


export const menuItemsConfig = [
  {
    iconClass: "fas fa-user",
    label: "Client",
    route: "/client",
    topMargin: '10px',
    bottomMargin: '10px',
    disableHoverEffects: false, // Enable hover effects by default
  },
  {
    iconClass: "fas fa-users",
    label: "User",
    route: "/adduser",
    topMargin: '10px',
    bottomMargin: '10px',
    disableHoverEffects: false,  // Disable hover effects for this item
  },
  {
    iconClass: "fas fa-chart-line",
    label: "Data Generation",
    route: "/data-generation",
    topMargin: '10px',
    bottomMargin: '10px',
    disableHoverEffects: false,
  },
  {
    iconClass: "fas fa-sign-out-alt",
    label: "Logout",
    isLogout: true,
    topMargin: 'auto',
    bottomMargin: '10px',
    disableHoverEffects: true,
  },
];
