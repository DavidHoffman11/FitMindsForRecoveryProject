import React from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Contact } from './pages/Contact';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

// Define routes 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;