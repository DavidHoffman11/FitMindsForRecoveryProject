import './Events.css';
import 'moment-timezone'
import moment from 'moment'
import { Card } from 'primereact/card';
import theme from '../../styles/Theme';
import { Divider } from "primereact/divider";
import { Event } from "../../../../common/types/Event";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'

function Events() {
    // Temporary list as filler
    const events: Event[] = [
        { id: 1, title: "Fitness Workshop", start: new Date("2024-11-15T12:00:00"), end: new Date("2024-11-15T12:30:00"), date: new Date("2024-11-15T12:30:00"), description: "A workshop to teach fitness techniques." },
        { id: 2, title: "Recovery Mentorship", start: new Date("2024-11-20T12:00:00"), end: new Date("2024-11-20T12:30:00"), date: new Date("2024-11-20T12:30:00"), description: "One-on-one mentorship program for recovery." },
        { id: 3, title: "Nutrition Seminar", start: new Date("2024-12-05T12:00:00"), end: new Date("2024-12-05T12:30:00"), date: new Date("2024-12-05T12:30:00"), description: "Learn about nutrition for recovery." }
    ];

    // Calendar set-up
    moment.tz.setDefault('America/Los_Angeles')
    const localizer = momentLocalizer(moment)

    return (
        <div className="event-container">
            <div className="header-section" style={{ backgroundColor: theme.colors.primary }}>
                <h2 style={{ color: theme.colors.secondary }}>Upcoming Events</h2>
                <p style={{ color: theme.colors.tertiary }}>Stay updated with our latest events below!</p>
            </div>

            <div className="content-section">
                <div className="calendar-section">
                    <Card className="p-shadow-3 calendar-card" style={{ backgroundColor: theme.colors.secondary }}>
                        <h3 style={{ color: theme.colors.primary, flexGrow: 1, overflowY: 'auto', padding: '1rem' }}>Event Calendar</h3>
                        <Calendar 
                            views={["day", "month"]}
                            localizer={localizer}
                            events={events}
                            defaultView="month"
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                        />
                    </Card>
                </div>

                <div className="bulletin-section">
                    <Card className="p-shadow-3" style={{ backgroundColor: theme.colors.primary }}>
                        <h3 style={{ color: theme.colors.secondary }}>Bulletin</h3>
                        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1rem' }}>
                            {events.map((event, index) => (
                                <div key={index} className="p-mb-3" style={{ backgroundColor: theme.colors.tertiary, padding: '1rem' }}>
                                    <h4 style={{ color: theme.colors.primary }}>{event.title} - {event.date.toDateString()}</h4>
                                    <p>{event.description}</p>
                                    <Divider />
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export { Events };
