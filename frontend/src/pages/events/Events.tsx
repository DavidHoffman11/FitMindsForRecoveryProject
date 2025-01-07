import './Events.css';
import { Event } from "../../../../common/types/Event";
import 'react-big-calendar/lib/css/react-big-calendar.css'

function Events() {
    // Store all upcoming events
    const events: Event[] = [
        { 
            id: 1, 
            title: "Zachary Horton Foundation Annual Golf Tournament", 
            start: new Date("2025-05-05T10:00:00"), 
            end: new Date("2025-05-05T16:00:00"), 
            allDay: false,
            description: `4th Annual Breaking the Stigma Golf Tournament.  Join us on Cinco de Mayo to swing for a cause, celebrate the day, and help us continue breaking
                          the stigma surrounding addiction.  Save the date: May 5, 2025, and let's make this event unforgetable!`,
            date: new Date("2025-05-05T12:00:00")
        },
        { 
            id: 2, 
            title: "September is National Recovery Month", 
            start: new Date("2025-09-01T00:00:00"), 
            end: new Date("2025-09-30T23:59:59"), 
            allDay: true,
            description: `National Recovery Month (Recovery Month), which started in 1989, is a national observance held every September to promote and support new 
                          evidence-based treatment and recovery practices, the nation’s strong and proud recovery community, and the dedication of service providers 
                          and communities who make recovery in all its forms possible.`,
            date: new Date("2025-09-01T00:00:00")
        },
        { 
            id: 2, 
            title: "Fresno and Clovis Recovery Summit", 
            start: new Date("2025-09-14T00:00:00"), 
            end: new Date("2025-09-14T24:59:59"), 
            allDay: true,
            description: `The 8th Annual Recovery Summit is a FREE event to promote awareness of addiction resources and support in Fresno and Clovis, 
                          while providing hopeful messages of recovery from local community leaders. The Recovery Summit is held in Fresno, CA during 
                          National Recovery Month.`,
            date: new Date("2025-09-01T00:00:00")
        },
    ];

    return (
        <div className="events-page">
            <header className="events-header">
            <div className="header-overlay">
                <h1 className="events-title">Upcoming Events</h1>
                <p className="events-intro"></p>
            </div>
            </header>
            <div className="events-container">
            {events
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((event) => (
                <div key={event.id} className="event-card">
                    <div className="event-details">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-date">
                        {event.start.toLocaleDateString()} {event.start.toLocaleTimeString()} - {event.end.toLocaleTimeString()}
                    </p>
                    <p className="event-description">{event.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export { Events };
