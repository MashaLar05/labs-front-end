import Button from "react-bootstrap/Button";
import React from "react";
import "../styles/awesomeApp.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "../App.css";

function AwesomeApps() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">View all products</Popover.Header>
      <Popover.Body>
        Here you can find a detailed explanation of all our products. Each one
        is designed to help you lead a better and healthier life!
      </Popover.Body>
    </Popover>
  );
  return (
    <div className="AwesomeApps" id="apps">
      <h3 className="title">Other awesome Apps</h3>
      <p className="description">
        We don't stop at one product! Check out our other applications:
      </p>

      <div className="container-for-all-elements">
        <div className="app-grid">
          <div className="app-container">
            <img
              className="app-image"
              src="/images/yoga-flow.jpg"
              alt="YogaFlow-image"
            />
            <h5 className="app-name">YogaFlow</h5>
            <p className="app-description">an app for yoga classes</p>
          </div>

          <div className="app-container">
            <img
              className="app-image"
              src="/images/run-tracker.jpg"
              alt="RunTracker-image"
            />
            <h5 className="app-name">RunTracker</h5>
            <p className="app-description">a jogging tracker for joggers</p>
          </div>

          <div className="app-container">
            <img
              className="app-image"
              src="/images/mindful-me.jpg"
              alt="MindfulMe-image"
            />
            <h5 className="app-name">MindfulMe</h5>
            <p className="app-description">
              a platform for meditation and stress management
            </p>
          </div>
        </div>

        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button className="aqua-button" variant="outline-info">
            View all products
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default AwesomeApps;
