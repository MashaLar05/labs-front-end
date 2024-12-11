import React from "react";
import "../styles/faq.css";
import Accordion from "react-bootstrap/Accordion";

import "../App.css";

function FAQ() {
  return (
    <div className="FAQ" id="faq">
      <h3 className="title">Frequently Asked Questions </h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is your app?</Accordion.Header>
          <Accordion.Body>
            Our app is your fitness partner to help you lead a healthy
            lifestyle.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Is the app suitable for beginners?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we offer programmes for all fitness levels.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Can I use the app for free?</Accordion.Header>
          <Accordion.Body>
            We have a free version with basic features as well as premium
            access.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What devices are supported?</Accordion.Header>
          <Accordion.Body>
            The app is available for iOS and Android, and is compatible with
            popular fitness devices.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How do I get in touch with support?
          </Accordion.Header>
          <Accordion.Body>
            Email us at support@yourapp.com - we're always happy to help!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;
