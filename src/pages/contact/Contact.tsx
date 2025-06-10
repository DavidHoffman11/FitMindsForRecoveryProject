"use client"

import "./Contact.css"
import { Card } from "primereact/card"
import { Button } from "primereact/button"

function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      content: "fitmindsforrecovery@gmail.com",
      link: "mailto:fitmindsforrecovery@gmail.com",
      description: "Send us an email and we'll get back to you within 24-48 hours.",
    },
    {
      icon: "📱",
      title: "Follow Us",
      content: "@fitmindsforrecoveryproject",
      link: "https://www.instagram.com/fitmindsforrecoveryproject/",
      description: "Stay connected with our community on Instagram.",
    },
    {
      icon: "🤝",
      title: "Get Involved",
      content: "Join Our Mission",
      link: "/FitMindsForRecoveryProject/#/about",
      description: "Learn more about our mission and how you can help.",
    },
  ]

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <h1 className="contact-title">
            Contact <span className="highlight">Us</span>
          </h1>
          <p className="contact-description">
            If you have any questions or need further assistance, feel free to reach out! We're here to help and connect
            you with our community.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods-section">
        <div className="section-container">
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <Card key={index} className="contact-method-card">
                <div className="method-icon">{method.icon}</div>
                <h3 className="method-title">{method.title}</h3>
                <p className="method-description">{method.description}</p>
                <a
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="method-link"
                >
                  {method.content}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="contact-info-section">
        <div className="section-container">
          <Card className="contact-info-card">
            <h2>We're Here to Help</h2>
            <p>
              Whether you're seeking support, want to get involved, or have questions about our mission, we'd love to
              hear from you. Our community is built on connection and mutual support.
            </p>
            <div className="response-info">
              <div className="response-item">
                <strong>Response Time:</strong> We typically respond within 24-48 hours
              </div>
              <div className="response-item">
                <strong>Best Times to Reach Us:</strong> We check email regularly throughout the week
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="contact-cta-section">
        <div className="cta-content">
          <h2>Join Our Community</h2>
          <p>Follow us on social media to stay updated on events, resources, and community stories.</p>
          <div className="cta-buttons">
            <Button
              label="Follow on Instagram"
              className="p-button-lg cta-primary"
              onClick={() => {
                window.open("https://www.instagram.com/fitmindsforrecoveryproject/", "_blank")
              }}
            />
            <Button
              label="Learn About Our Mission"
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

export { Contact }
