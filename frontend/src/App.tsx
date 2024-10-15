import React from 'react';
import './styles/variables.css';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Navbar } from './components/navbar/Navbar';
import { Contact } from './pages/contact/Contact';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

// Define routes 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/events',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/partners',
    children: [
      {
        path: '/partners/zacharyHortonFoundation',
        element: <Home />,
      },
    ]
  },
  {
    path: '/donate',
    children: [
      {
        path: '/donate/zacharyHortonFoundation',
        element: <Home />,
      },
    ]
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;