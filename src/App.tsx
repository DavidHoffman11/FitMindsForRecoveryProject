import React from 'react';
import './App.css';
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
], {
  basename: '/FitMindsForRecovery'
});

function App() {
  return (
    <>
      <Navbar />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
};

export default App;