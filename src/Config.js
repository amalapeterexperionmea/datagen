
import React from 'react';
import HomeIconImage from '../src/Layout/icons/Homeicon.png';



export const breadcrumbConfig = [
  { label: '', path: '/', icon: <img src={HomeIconImage} alt="Home" style={{ width: '32px', height: '32px' }} /> },
  { label: 'Client List', path: '/client' },
  { label: 'Client Form', path: '/client/form', parentPath: '/client' },
  { label: 'Client Updation', path: '/client/update', parentPath: '/client' },
  { label: 'Search User', path: '/searchuser' },
  { label: 'Add User', path: '/searchuser/adduser', parentPath: '/searchuser' },
  { label: 'Edit User', path: '/searchuser/edituser', parentPath: '/searchuser' },
  { label: 'Generated list', path: '/generated-grid' },
  { label: 'Data Generation', path: '/generated-grid/data-generation', parentPath: '/generated-grid' }
];

//Menuitems configuration
export const menuItemsConfig = [
  {
    iconClass: "fas fa-user",
    label: "Client",
    route: "/client",
    topMargin: '10px',
    bottomMargin: '10px',
    disableHoverEffects: false, 
  },
  {
    iconClass: "fas fa-users",
    label: "User",
    route: "/searchuser",
    topMargin: '10px',
    bottomMargin: '10px',
    disableHoverEffects: false,  
  },
  {
    iconClass: "fas fa-chart-line",
    label: "Data Generation",
    route: "/generated-grid",
    topMargin: '10px',
    bottomMargin: '10px',
    disableHoverEffects: false,
  },
  {
    iconClass: "fas fa-sign-out-alt",
    label: "Logout",
    isLogout: true,
    topMargin: 'auto',
    bottomMargin: '-20px',
    disableHoverEffects: true,
    hoverColor: 'red' 
  },
];

// userTypes configuration
export const userTypes = {
  SUPER_ADMIN: { id: 1, label: "Super Admin" },
  ADMIN: { id: 2, label: "Admin" },
  USER: { id: 3, label: "User" },
  CLIENT: { id: 4, label: "Client" }
};
