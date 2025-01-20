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
        window.location.href = '/FitMindsForRecovery/events';
      },
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info-circle',
      command: () => {
        window.location.href = '/FitMindsForRecovery/about'; 
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
                window.open('https://www.addictioncenter.com', 'noopener,noreferrer'); 
              },
            },
            {
              label: 'Alcoholics Anonymous',
              command: () => {
                window.open('https://www.aa.org', 'noopener,noreferrer'); 
              },
            },
            {
              label: 'National Institute on Drug Abuse (NIDA)',
              command: () => {
                window.open('https://www.drugabuse.gov', 'noopener,noreferrer'); 
              },
            },
            {
              label: 'Narcotics Anonymous',
              command: () => {
                window.open('https://www.na.org', 'noopener,noreferrer'); 
              },
            },
            {
              label: 'Partnership to End Addiction',
              command: () => {
                window.open('https://drugfree.org', 'noopener,noreferrer'); 
              },
            },
          ]
        },
        {
          label: "Fitness & Mental Health",
          items: [
            {
              label: 'Mental Health America (MHA)',
              command: () => {
                window.open('https://www.mhanational.org', 'noopener,noreferrer'); 
              },
            },
            {
              label: 'ph Wellness',
              command: () => {
                window.open('https://phwellness.com/', 'noopener,noreferrer'); 
              },
            },
          ]
        },
        {
          label: "Helplines & Crisis Support",
          items: [
            {
              label: 'Crisis Text Line',
              command: () => {
                window.open('https://www.crisistextline.org', '_blank', 'noopener,noreferrer'); 
              },
            },
            {
              label: 'Suicide Prevention Lifeline',
              command: () => {
                window.open('https://988lifeline.org', '_blank', 'noopener,noreferrer'); 
              },
            },
          ]
        }
      ]
    },
    {
      label: 'Our Partners',
      icon: 'pi pi-fw pi-users',
      command: () => {
        window.location.href = '/FitMindsForRecovery/partners'; 
      },
    },
    {
      label: 'Donate Now',
      icon: 'pi pi-fw pi-money-bill',
      items: [
        {
          label: 'SAFE Project',
          command: () => {
            window.open('https://www.safeproject.us/donate/', '_blank', 'noopener,noreferrer');
          },
        },
        {
          label: 'Stay Shaded',
          command: () => {
            window.open('https://givebutter.com/h4fikV', '_blank', 'noopener,noreferrer');
          },
        },
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
        window.location.href = '/FitMindsForRecovery/contact'; 
      },
    },
  ];

  // Create variable for logo image
  const whiteLogo = <img src="./src/images/FitMinds_Logo_White.png" alt="Mini Logo" className="navBarLogo" />

  return (
    <div className="navbar-container">
      <Menubar model={items} start={whiteLogo} />
    </div>
  );
};

export { Navbar };