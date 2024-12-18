import React from 'react';
import './styles/variables.css';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Events } from './pages/events/Events';
import Partners from './pages/partners/Partners';
import { Contact } from './pages/contact/Contact';
import { RouterProvider } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { createBrowserRouter } from 'react-router-dom';

// Define routes 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/partners',
    element: <Partners />
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
      <Footer />
    </>
  );
};

export default App;