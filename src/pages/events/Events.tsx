"use client"

import "./Events.css"
import { Card } from "primereact/card"
import { Button } from "primereact/button"
import type { Event } from "../../../common/types/Event"

function Events() {
  // Store all upcoming events
  const events: Event[] = [
    {
      id: 1,
      title: "Austin Marathon",
      start: new Date("2025-02-16T10:00:00"),
      end: new Date("2025-02-16T16:00:00"),
      allDay: false,
      description: `Community member Eann McKasson is running the Austin Marathon and raising money for the Zachary Horton Foundation. Support his journey as he 
                    takes on this incredible challenge to bring awareness to addiction recovery and support those in need.`,
      date: new Date("2025-02-16T12:00:00"),
      link: "https://youraustinmarathon.com/",
    },
    {
      id: 2,
      title: "Zachary Horton Foundation Annual Golf Tournament",
      start: new Date("2025-05-05T10:00:00"),
      end: new Date("2025-05-05T16:00:00"),
      allDay: false,
      description: `4th Annual Breaking the Stigma Golf Tournament. Join us on Cinco de Mayo to swing for a cause, celebrate the day, and help us continue breaking
                    the stigma surrounding addiction. Save the date: May 5, 2025, and let's make this event unforgettable!`,
      date: new Date("2025-05-05T12:00:00"),
      link: "https://zacharyhortonfoundation.org/event/",
    },
    {
      id: 3,
      title: "September is National Recovery Month",
      start: new Date("2025-09-01T00:00:00"),
      end: new Date("2025-09-30T23:59:59"),
      allDay: true,
      description: `National Recovery Month (Recovery Month), which started in 1989, is a national observance held every September to promote and support new 
                    evidence-based treatment and recovery practices, the nation's strong and proud recovery community, and the dedication of service providers 
                    and communities who make recovery in all its forms possible.`,
      date: new Date("2025-09-01T00:00:00"),
      link: "https://www.naadac.org/national-recovery-month#:~:text=National%20Recovery%20Month%20(Recovery%20Month,who%20make%20recovery%20in%20all",
    },
    {
      id: 4,
      title: "Fresno and Clovis Recovery Summit",
      start: new Date("2025-09-14T00:00:00"),
      end: new Date("2025-09-14T23:59:59"),
      allDay: true,
      description: `The 8th Annual Recovery Summit is a FREE event to promote awareness of addiction resources and support in Fresno and Clovis, 
                    while providing hopeful messages of recovery from local community leaders. The Recovery Summit is held in Fresno, CA during 
                    National Recovery Month.`,
      date: new Date("2025-09-14T00:00:00"),
      link: "https://www.fresnoclovisrecoverysummit.com/",
    },
  ]

  // Format date for display
  const formatDate = (event: Event) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    if (event.allDay) {
      return event.start.toLocaleDateString(undefined, options)
    } else {
      return `${event.start.toLocaleDateString(undefined, options)} • ${event.start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${event.end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    }
  }

  // Handle learn more button click
  const handleLearnMore = (event: Event) => {
    if (event.link) {
      window.open(event.link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="events-container">
      {/* Hero Section */}
      <section className="events-hero-section">
        <div className="events-hero-content">
          <h1 className="events-title">
            Upcoming <span className="highlight">Events</span>
          </h1>
          <p className="events-description">
            Join us at these upcoming events to support mental health and recovery in our community.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-list-section">
        <div className="section-container">
          <h2 className="section-title">Events for 2025</h2>
          <div className="events-grid">
            {events
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map((event) => (
                <Card key={event.id} className="event-card">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{formatDate(event)}</p>
                  <p className="event-description">{event.description}</p>
                  <div className="event-actions">
                    <Button
                      label="Learn More"
                      className="p-button-outlined cta-secondary"
                      onClick={() => handleLearnMore(event)}
                      disabled={!event.link}
                    />
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="events-cta-section">
        <div className="cta-content">
          <h2>Want to Get Involved?</h2>
          <p>Whether you're seeking support or want to help others, there's a place for you in our community.</p>
          <div className="cta-buttons">
            <Button
              label="Contact Us"
              className="p-button-lg cta-primary"
              onClick={() => {
                window.location.href = "/FitMindsForRecoveryProject/#/contact"
              }}
            />
            <Button
              label="Follow Our Socials"
              className="p-button-lg p-button-outlined cta-secondary"
              onClick={() => {
                window.open("https://www.instagram.com/fitmindsforrecoveryproject/", "_blank")
              }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export { Events }
