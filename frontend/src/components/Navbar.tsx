import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

function Navbar () {
  const items = [
    { label: 'Home', template: () => <Link to="/">Home</Link> },
    { label: 'About', template: () => <Link to="/about">About</Link> },
    { label: 'Contact', template: () => <Link to="/contact">Contact</Link> },
  ];

  return (
    <div>
      <Menubar model={items} />
    </div>
  );
};

export { Navbar };