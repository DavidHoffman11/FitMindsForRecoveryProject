import './About.css';
import React from 'react';

function About() {
    const missionStatement = `At Fit Minds for Recovery, we are dedicated to helping individuals on their journey 
                              to recovery by providing fitness programs, mentorship, and a strong community.`

    return (
        <div className="about-page">
            <div className="mission-card">
                <div className="mission-details">
                    <h3 className="mission"> Our Mission </h3>
                    <p className="mission-description">{missionStatement}</p>
                </div>
            </div>
        </div>
    );
};

export { About };