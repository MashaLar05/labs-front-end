import Button from "react-bootstrap/Button";
import React from "react";
import "../styles/features.css";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "../App.css";

function Features() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Explore Features</Popover.Header>
      <Popover.Body>
        By clicking this button, you'd be able to see a detailed breakdown of
        all the features that our application offers.
      </Popover.Body>
    </Popover>
  );
  return (
    <div id="features" className="Features">
      <h3 className="title">Explore amazing features</h3>
      <p className="feature-description-all">
        Discover cutting-edge tools designed to elevate your experience and help
        you achieve more effortlessly!
      </p>

      <div className="container-for-all-elements">
        <div className="feature-grid">
          <div className="feature-container">
            <img
              className="feature-image"
              src="/images/workouts.png"
              alt="YogaFlow-image"
            />
            <h5 className="feature-name">Personalised workouts</h5>
            <p className="feature-description">
              Personalised plans tailored to your fitness level.
            </p>
          </div>

          <div className="feature-container">
            <img
              className="feature-image"
              src="/images/tracker.png"
              alt="RunTracker-image"
            />
            <h5 className="feature-name">Activity tracker</h5>
            <p className="feature-description">
              Track steps, calories, heart rate and other metrics in real time.
            </p>
          </div>

          <div className="feature-container">
            <img
              className="feature-image"
              src="/images/meal-planner.png"
              alt="MindfulMe-image"
            />
            <h5 className="feature-name">Meal Planner</h5>
            <p className="feature-description">
              Get diet recommendations and recipes tailored to your goals.
            </p>
          </div>

          <div className="feature-container">
            <img
              className="feature-image"
              src="/images/rewards.png"
              alt="MindfulMe-image"
            />
            <h5 className="feature-name">Achievements & Rewards</h5>
            <p className="feature-description">
              Get motivated with a system of goals and rewards.
            </p>
          </div>
        </div>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button className="aqua-button" variant="outline-info">
            View all features
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default Features;
