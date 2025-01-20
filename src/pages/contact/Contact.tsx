import './Contact.css'
import React from 'react';
import { Card } from 'primereact/card';

function Contact () {
    return (
      <div className="contact-container">
        <Card className="contact-card">
          <h1 className="contact-title">Contact Us!</h1>
          <p className="contact-text">
            If you have any questions or need further assistance, feel free to reach out!
          </p>
          <p className="contact-info">
            Email: <a href="mailto:fitmindsforrecovery@gmail.com">fitmindsforrecovery@gmail.com</a>
          </p>
        </Card>
    </div>
    );
  };
  
  export { Contact };