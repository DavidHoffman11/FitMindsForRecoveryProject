import React from 'react';
import './Partners.css';
import { Partner } from "../../../../common/types/Partner";

function Partners() {
  const partners: Partner[] = [
    {
      name: 'Zachary Horton Foundation',
      image: '/src/images/zachary-horton-logo.png', 
      description:
        `The Zachary Horton Foundation is a dedicated organization committed to breaking the stigma surrounding addiction. 
        Through education, outreach, and advocacy, the foundation provides essential resources and support for individuals and 
        families impacted by substance use disorders.  With a focus on recovery and community empowerment, the foundation organizes 
        events like recovery summits, sober celebrations, and educational programs to raise awareness and foster connections.`,
      website: 'https://www.zacharyhortonfoundation.org/',
    },
  ];

  return (
    <div className="partners-page">
      <div className="partners-container">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <div className="partner-image">
              <img src={partner.image} alt={`${partner.name} Logo`} />
            </div>
            <div className="partner-details">
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-description">{partner.description}</p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                Learn more and explore resources
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
