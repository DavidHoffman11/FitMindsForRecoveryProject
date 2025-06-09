"use client"

import "./Home.css"
import { Card } from "primereact/card"
import { Button } from "primereact/button"

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <Card className="hero-content">
          <img src="./images/FitMinds_Wordmark_Black.png" alt="Fit Minds Recovery Project Logo" className="logo" />
          <h1 className="mission">
            Empowering minds and bodies for a <span className="highlight">stronger</span>,{" "}
            <span className="highlight">healthier</span> future.
          </h1>
          <p className="hero-description">
            Join us in supporting mental health and wellness through community-driven programs, fitness initiatives, and
            recovery support.
          </p>
          <div className="hero-actions">
            <Button
              label="Get Involved"
              className="p-button-lg cta-primary large-button"
              onClick={() => {
                window.location.href = "/FitMindsForRecoveryProject/#/contact"
              }}
            />
            <Button
              label="Learn More"
              className="p-button-lg p-button-outlined cta-secondary large-button"
              onClick={() => {
                window.location.href = "/FitMindsForRecoveryProject/#/about"
              }}
            />
          </div>
        </Card>
      </section>

      {/* Impact Stats Section */}
      <section className="impact-section">
        <div className="section-container">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            <Card className="stat-card">
              <div className="stat-number tertiary-highlight">$500+</div>
              <div className="stat-label">Donated</div>
            </Card>
            <Card className="stat-card">
              <div className="stat-number tertiary-highlight">2+</div>
              <div className="stat-label">Community Partners</div>
            </Card>
            <Card className="stat-card">
              <div className="stat-number tertiary-highlight">1</div>
              <div className="stat-label">Year of Service</div>
            </Card>
            <Card className="stat-card">
              <div className="stat-number tertiary-highlight">100%</div>
              <div className="stat-label">Commitment to Recovery</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="programs-section">
        <div className="section-container">
          <h2 className="section-title">How We Help</h2>
          <div className="programs-grid">
            <Card className="program-card">
              <div className="program-icon tertiary-border">🏃‍♂️</div>
              <h4>Follow our Socials</h4>
              <p>
                To find a community of individuals supported to uplifting themselves and each other by attacking their
                fitness goals.
              </p>
            </Card>
            <Card className="program-card">
              <div className="program-icon tertiary-border">🧠</div>
              <h4>Our Great Partners</h4>
              <p>
                Through our different partners we are able to impact the lives of people struggling throughout the
                world.
              </p>
            </Card>
            <Card className="program-card">
              <div className="program-icon tertiary-border">🤝</div>
              <h4>Community Support</h4>
              <p>Peer support networks and community events that foster connection and mutual aid.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <Card className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>Whether you're seeking support or want to help others, there's a place for you in our community.</p>
          <div className="cta-buttons">
            <Button
              label="Connect With Us"
              className="p-button-lg cta-primary extra-large-button"
              onClick={() => {
                window.location.href = "/FitMindsForRecoveryProject/#/contact"
              }}
            />
            <Button
              label="View Upcoming Events"
              className="p-button-lg p-button-outlined cta-secondary extra-large-button"
              onClick={() => {
                window.location.href = "/FitMindsForRecoveryProject/#/events"
              }}
            />
          </div>
        </Card>
      </section>
    </div>
  )
}

export { Home }
