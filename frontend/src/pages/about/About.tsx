import './About.css';
import React from 'react';
import { Card } from 'primereact/card';

function About() {
    return (
        <div className="about-container">
          <Card className="about-card">
              <h1 className="about-title">About Us</h1>
              <p className="about-mission">
                  At Fit Minds for Recovery, we are dedicated to helping individuals on their journey to recovery by providing fitness programs, mentorship, and a strong community.
              </p>
          </Card>
        </div>
    );
};

export { About };