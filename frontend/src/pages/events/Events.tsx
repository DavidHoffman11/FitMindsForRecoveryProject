import './Events.css';
import { Card } from 'primereact/card';
import theme from '../../styles/Theme';
import { Divider } from "primereact/divider";
import { Calendar } from "primereact/calendar";
import { Event } from "../../../../common/types/Event";

function Events() {
    // Temporary list as filler
    const events: Event[] = [
        { id: 1, title: "Fitness Workshop", date: new Date("2024-11-15"), description: "A workshop to teach fitness techniques." },
        { id: 2, title: "Recovery Mentorship", date: new Date("2024-11-20"), description: "One-on-one mentorship program for recovery." },
        { id: 3, title: "Nutrition Seminar", date: new Date("2024-12-05"), description: "Learn about nutrition for recovery." }
    ];

    return (
        <div className="event-container">
            <div className="header-section" style={{ backgroundColor: theme.colors.primary }}>
                <h2 style={{ color: theme.colors.secondary }}>Upcoming Events</h2>
                <p style={{ color: theme.colors.tertiary }}>Stay updated with our latest events below!</p>
            </div>

            <div className="content-section">
                <div className="calendar-section">
                    <Card className="p-shadow-3 calendar-card" style={{ backgroundColor: theme.colors.secondary }}>
                        <h3 style={{ color: theme.colors.primary }}>Event Calendar</h3>
                        <Calendar inline style={{ width: '75%', padding: '1rem' }} />
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
