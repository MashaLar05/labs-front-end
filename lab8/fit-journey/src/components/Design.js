import React from "react";
import "../styles/design.css";
import "../App.css";

function Design() {
  return (
    <div className="Design" id="design">
      <h3 className="title">Better design</h3>

      <div className="design-grid">
        <div className="grid-component">
          <div className="design-container">
            <img className="design-icon" src="/images/support.png" alt="#" />
            <h5 className="design-title">Support for all platforms</h5>
            <p className="design-text">
              Your data is always available, regardless of device.
            </p>
          </div>

          <div className="design-container">
            <img className="design-icon" src="/images/planning.png" alt="#" />
            <h5 className="design-title">Planning tools</h5>
            <p className="design-text">
              Create personalised workout plans in seconds.
            </p>
          </div>
        </div>

        <div className="grid-component">
          <img
            className="design-app-icon"
            src="/images/fit-journey.jpg"
            alt="#"
          />
        </div>

        <div className="grid-component">
          <div className="design-container">
            <img
              className="design-icon"
              src="/images/intuitive-design.png"
              alt="#"
            />
            <h5 className="design-title">Intuitive design</h5>
            <p className="design-text">
              Elegant and modern interface for your comfort.
            </p>
          </div>

          <div className="design-container">
            <img
              className="design-icon"
              src="/images/achievements.png"
              alt="Collaborative achievements"
            />
            <h5 className="design-title">Collaborative achievements</h5>
            <p className="design-text">
              Share your progress and motivate each other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
