"use client"

import "./Partners.css"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
import type { Partner } from "../../../common/types/Partner"

function Partners() {
  const partners: Partner[] = [
    {
      name: "Stay Shaded",
      image: "./images/stay-shaded-logo.png",
      description: `Stay Shaded is a nonprofit organization founded by Vonn Webb, former Fresno State Men's Basketball Coach, after the tragic 
        loss of his son Taelin to a fentanyl overdose. Dedicated to raising awareness about the dangers of fentanyl and supporting those 
        impacted by addiction, Stay Shaded focuses on education, advocacy, and community empowerment to prevent further tragedies and honor Taelin's legacy.`,
      website: "https://stayshaded.org/",
    },
    {
      name: "Zachary Horton Foundation",
      image: "./images/zachary-horton-logo.png",
      description: `The Zachary Horton Foundation is a dedicated organization committed to breaking the stigma surrounding addiction. 
        Through education, outreach, and advocacy, the foundation provides essential resources and support for individuals and 
        families impacted by substance use disorders. With a focus on recovery and community empowerment, the foundation organizes 
        events like recovery summits, sober celebrations, and educational programs to raise awareness and foster connections.`,
      website: "https://www.zacharyhortonfoundation.org/",
    },
  ]

  const handlePartnerClick = (website: string) => {
    window.open(website, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="partners-container">
      {/* Hero Section */}
      <section className="partners-hero-section">
        <div className="partners-hero-content">
          <h1 className="partners-title">
            Our <span className="highlight">Partners</span>
          </h1>
          <p className="partners-description">
            We're proud to work alongside these incredible organizations who share our commitment to supporting recovery
            and breaking the stigma surrounding addiction.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-list-section">
        <div className="section-container">
          <h2 className="section-title">Community Partners</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <Card key={index} className="partner-card">
                <div className="partner-image-container">
                  <img
                    src={partner.image || "/placeholder.svg"}
                    alt={`${partner.name} Logo`}
                    className="partner-image"
                  />
                </div>
                <div className="partner-content">
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-description">{partner.description}</p>
                  <div className="partner-actions">
                    <Button
                      label="Visit Website"
                      className="p-button-outlined cta-secondary"
                      onClick={() => handlePartnerClick(partner.website)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Info Section */}
      <section className="partnership-info-section">
        <div className="section-container">
          <Card className="partnership-info-card">
            <h2>How We Support Our Partners</h2>
            <p>
              While Fit Minds for Recovery is not a registered 501(c)(3) organization, we are deeply committed to
              supporting the incredible work of our partner nonprofits. We leverage our platform and community to
              amplify their impact through fundraising initiatives, social media promotion, and volunteer recruitment.
              By connecting our network with these established organizations, we help extend their reach and support
              their vital missions in addiction recovery and mental health advocacy.
            </p>
            <div className="partnership-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Active Partners</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Shared Commitment</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Lives Impacted</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="partners-cta-section">
        <div className="cta-content">
          <h2>Interested in Partnering?</h2>
          <p>
            If your organization shares our mission and values, we'd love to explore how we can work together to support
            recovery in our community.
          </p>
          <div className="cta-buttons">
            <Button
              label="Contact Us"
              className="p-button-lg cta-primary"
              onClick={() => {
                window.location.href = "/FitMindsForRecoveryProject/#/contact"
              }}
            />
            <Button
              label="Learn About Us"
              className="p-button-lg p-button-outlined cta-secondary"
              onClick={() => {
                window.location.href = "/FitMindsForRecoveryProject/#/about"
              }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export { Partners }
