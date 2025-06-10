"use client"

import "./About.css"
import { Card } from "primereact/card"
import { Button } from "primereact/button"

function About() {
  const missionStatement = `At Fit Minds for Recovery, we believe that a healthier lifestyle and the power of fitness can play a pivotal
                              role in the recovery journey. Through the supportive community we're building and the outreach efforts empowered
                              by our wonderful partners, we are dedicated to helping individuals reclaim their lives from addiction. We seek to
                              provide the resources, education, and encouragement needed for long-term healing and wellness. Together, we strive to 
                              break the cycle of addiction and inspire lasting change in the lives of those we serve.`

  const ourStory = `In 2022, I lost one of my best friends — someone I had known since childhood and grown especially close to during high school. 
                      One of the core foundations of our friendship was our shared love for the gym. When he was sober and at his best, the gym was 
                      our sanctuary, the place where we spent most of our time together. As life took me to a different state, we stayed connected 
                      through our workouts. Whenever I returned home, the gym was where we reconnected, pushing each other to be better, both physically and 
                      mentally.

                      When he passed, I knew I wanted to do something to help people in his situation. But I wasn't a doctor, a counselor, or an expert — 
                      I was just someone who had witnessed addiction firsthand through the experience of my friend. At first, I struggled to find a way to 
                      make a difference. But through that struggle, I came to a realization: fitness and a healthy lifestyle aren't just about physical 
                      strength — they create structure, discipline, and a sense of purpose.
                      
                      While I don't believe fitness is a cure-all for addiction, I do know that it helped my friend. It helps me. And I believe it can help others too.
                      That belief became the foundation for Fit Minds for Recovery — a community built on support, shared struggle, and self-improvement. Here, we try to 
                      honor my friend's legacy by sharing something that he loved and using it to build a community of support, growth, and resilience. Through every workout, 
                      every challenge, and every small victory, we strive to uplift one another and prove that a healthier, stronger future is possible.`

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-title">
            About <span className="highlight">Fit Minds</span> for Recovery
          </h1>
          <p className="about-description">Building a community where fitness meets recovery, and hope meets action.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <h2 className="section-title">Our Mission</h2>
          <Card className="mission-card">
            <p className="mission-text">{missionStatement}</p>
          </Card>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-container">
          <h2 className="section-title">Our Story</h2>
          <Card className="story-card">
            <div className="story-content">
              {ourStory.split("\n\n").map((paragraph, index) => (
                <p key={index} className="story-paragraph">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <Card className="value-card">
              <div className="value-icon">💪</div>
              <h3>Strength Through Community</h3>
              <p>
                We believe that recovery is stronger when we support each other. Together, we build resilience and
                create lasting change.
              </p>
            </Card>
            <Card className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Purpose-Driven Fitness</h3>
              <p>
                Fitness isn't just about physical health—it's about creating structure, discipline, and a sense of
                purpose in recovery.
              </p>
            </Card>
            <Card className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Compassionate Support</h3>
              <p>
                We meet people where they are, without judgment, and provide the encouragement needed for healing and
                growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta-section">
        <div className="cta-content">
          <h2>Ready to Join Our Community?</h2>
          <p>
            Whether you're in recovery, supporting someone who is, or want to help our cause, there's a place for you
            here.
          </p>
          <div className="cta-buttons">
            <Button
              label="Get Involved"
              className="p-button-lg cta-primary"
              onClick={() => {
                window.location.href = "/FitMindsForRecoveryProject/#/contact"
              }}
            />
            <Button
              label="View Our Partners"
              className="p-button-lg p-button-outlined cta-secondary"
              onClick={() => {
                window.location.href = "/FitMindsForRecoveryProject/#/partners"
              }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export { About }
