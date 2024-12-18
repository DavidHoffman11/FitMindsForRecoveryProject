import './About.css';
import React from 'react';

function About() {
    const missionStatement = `At Fit Minds for Recovery, we believe that a healthier lifestyle and the power of fitness can play a pivotal
                              role in the recovery journey. Through the supportive community we're building and the outreach efforts empowered
                              by our wonderful partners, we are dedicated to helping individuals reclaim their lives from addiction. We seek to
                              provide the resources, education, and encouragement needed for long-term healing and wellness. Together, we strive to 
                              break the cycle of addiction and inspire lasting change in the lives of those we serve.`

    return (
        <div className="about-page">
            <div className="mission-card">
                <div className="mission-details">
                    <h3 className="mission-header"> Our Mission </h3>
                    <p className="mission-description">{missionStatement}</p>
                </div>
            </div>
        </div>
    );
};

export { About };