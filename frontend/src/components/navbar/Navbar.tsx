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
      label: 'Resources',
      icon: 'pi pi-fw pi-book',
      items: [
        {
          label: 'Addiction Recovery & Support',
          items: [
            {
              label: 'Addiction Center',
              command: () => {
                window.location.href = 'https://www.addictioncenter.com'; 
              },
            },
            {
              label: 'Alcoholics Anonymous',
              command: () => {
                window.location.href = 'https://www.aa.org'; 
              },
            },
            {
              label: 'National Institute on Drug Abuse (NIDA)',
              command: () => {
                window.location.href = 'https://www.drugabuse.gov'; 
              },
            },
            {
              label: 'Narcotics Anonymous',
              command: () => {
                window.location.href = 'https://www.na.org'; 
              },
            },
            {
              label: 'Partnership to End Addiction',
              command: () => {
                window.location.href = 'https://drugfree.org'; 
              },
            },
          ]
        },
        {
          label: "Fitness and Mental Health",
          items: [
            {
              label: 'Mental Health America (MHA)',
              command: () => {
                window.location.href = 'https://www.mhanational.org'; 
              },
            },
            {
              label: 'ph Wellness',
              command: () => {
                window.location.href = 'https://phwellness.com/'; 
              },
            },
          ]
        },
        {
          label: "Helpines and Crisis Support",
          items: [
            {
              label: 'Crisis Text Line',
              command: () => {
                window.location.href = 'https://www.crisistextline.org'; 
              },
            },
            {
              label: 'Suicide Prevention Lifeline',
              command: () => {
                window.location.href = 'https://988lifeline.org'; 
              },
            },
          ]
        }
      ]
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
            window.open('https://www.zacharyhortonfoundation.org/donate', '_blank', 'noopener,noreferrer');
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