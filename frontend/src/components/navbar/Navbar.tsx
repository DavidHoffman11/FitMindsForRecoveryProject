import './Navbar.css';
import { Menubar } from 'primereact/menubar';

function Navbar () {
  // Create menu items for navbar
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {
        window.location.href = '/'; 
      },
    },
    {
      label: 'Upcoming Events',
      icon: 'pi pi-fw pi-calendar',
      command: () => {
        window.location.href = '/events';
      },
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info-circle',
      command: () => {
        window.location.href = '/about'; 
      },
    },
    {
      label: 'Our Partners',
      icon: 'pi pi-fw pi-users',
      items: [
        {
          label: 'Zachary Horton Foundation',
          command: () => {
            window.location.href = '/partners/zacharyHortonFoundation'; 
          },
        }
      ]
    },
    {
      label: 'Donate Now',
      icon: 'pi pi-fw pi-money-bill',
      items: [
        {
          label: 'Zachary Horton Foundation',
          command: () => {
            window.location.href = '/donate/zacharyHortonFoundation';
          },
        },
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-envelope',
      command: () => {
        window.location.href = '/contact'; 
      },
    },
  ];

  // Create variable for logo image
  const whiteLogo = <img src="/src/images/FitMinds_Logo_White.png" alt="Mini Logo" className="navBarLogo" />

  return (
    <div className="navbar-container">
      <Menubar model={items} start={whiteLogo} />
    </div>
  );
};

export { Navbar };