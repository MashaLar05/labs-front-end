import React from "react";
import "../styles/benefits.css";

import "../App.css";

function Benefits() {
  return (
    <div className="Benefits" id="benefits">
      <h3 className="title">Benefits of our App</h3>

      <div className="benefit-grid">
        <div className="benefit-container">
          <img
            className="benefit-icon"
            src="/images/easy-start.png"
            alt="Easy start icon"
          />
          <h4 className="benefit-title">Easy start</h4>
          <p className="benefit-text">
            Set up your profile in 2 minutes and start training.
          </p>
        </div>

        <div className="benefit-container">
          <img
            className="benefit-icon"
            src="/images/integration.png"
            alt="Integration icon"
          />
          <h4 className="benefit-title">Integration </h4>
          <p className="benefit-text">
            Integration with smart watches and other devices.
          </p>
        </div>

        <div className="benefit-container">
          <img
            className="benefit-icon"
            src="/images/community.png"
            alt="Community icon"
          />
          <h4 className="benefit-title">Community</h4>
          <p className="benefit-text">
            Share your achievements and get motivated with other users.
          </p>
        </div>

        <div className="benefit-container">
          <img
            className="benefit-icon"
            src="/images/flexibility.png"
            alt="Flexibility icon"
          />
          <h4 className="benefit-title">Flexibility</h4>
          <p className="benefit-text">
            Access workouts and meal plans anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
