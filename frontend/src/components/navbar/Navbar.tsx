import './Navbar.css';
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

function Navbar () {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {
        window.location.href = '/'; // Navigate to home
      },
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info-circle',
      command: () => {
        window.location.href = '/about'; // Change to your actual route
      },
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-envelope',
      command: () => {
        window.location.href = '/contact'; // Change to your actual route
      },
    },
  ];

  return (
    <div className="navbar-container">
      <img src="/src/images/FitMinds_Logo_White.png" alt="Mini Logo" className="navBarLogo" />
      <Menubar model={items} />
    </div>
  );
};

export { Navbar };