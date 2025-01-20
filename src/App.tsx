import React from 'react';
import './App.css';
import './styles/Variables.css';
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
    path: '/FitMindsForRecoveryProject/',
    element: <Home />,
  },
  {
    path: '/FitMindsForRecoveryProject/about',
    element: <About />,
  },
  {
    path: '/FitMindsForRecoveryProject/events',
    element: <Events />,
  },
  {
    path: '/FitMindsForRecoveryProject/partners',
    element: <Partners />
  },
  {
    path: '/FitMindsForRecoveryProject/contact',
    element: <Contact />,
  },
], {
  basename: '/FitMindsForRecoveryProject'
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