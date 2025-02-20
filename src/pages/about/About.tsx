import './About.css';
import React from 'react';
import { Carousel } from 'primereact/carousel';

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
                      mentally. \n\n 
                      
                      When he passed, I knew I wanted to do something to help people in his situation. But I wasn’t a doctor, a counselor, or an expert — 
                      I was just someone who had witnessed addiction firsthand through the experience of my friend.  At first, I struggled to find a way to 
                      make a difference. But through that struggle, I came to a realization: fitness and a healthy lifestyle aren’t just about physical 
                      strength — they create structure, discipline, and a sense of purpose. \n\n
                      
                      While I don’t believe fitness is a cure-all for addiction, I do know that it helped my friend. It helps me. And I believe it can help others too.
                      That belief became the foundation for Fit Minds for Recovery — a community built on support, shared struggle, and self-improvement. Here, we try to 
                      honor my friend's legacy by sharing something that he loved and using it to build a community of support, growth, and resilience. Through every workout, 
                      every challenge, and every small victory, we strive to uplift one another and prove that a healthier, stronger future is possible.`

    const images = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg'
    ];

    return (
        <div className="about-page">
            <div className='vertical-container'>
                <div className="mission-card">
                    <div className="mission-details">
                        <h3 className="mission-header"> Our Mission </h3>
                        <p className="mission-description">{missionStatement}</p>
                    </div>
                </div>
                <div className="mission-card">
                    <div className="mission-details">
                        <h3 className="mission-header"> Our Story </h3>
                        <p className="mission-description">
                            {ourStory.split("\n\n").map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph}
                                    <br /><br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { About };