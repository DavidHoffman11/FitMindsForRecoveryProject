import './Home.css';
import React from 'react';
import { Card } from 'primereact/card';

function Home () {
  return (
    <div className="home-container">
      <Card className="home-content">
        <img src="/src/images/FitMinds_Wordmark_Black.png" alt="Fit Minds Recovery Project Logo" className="logo" />
        <h1 className="mission">Empowering minds and bodies for a stronger, healthier future.</h1>
      </Card>
    </div>
  );
};

export { Home };