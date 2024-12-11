import React from "react";
import { Button } from "react-bootstrap";
import "../styles/header.css";
import Dropdown from "react-bootstrap/Dropdown";

import { HashLink as Link } from "react-router-hash-link";
import "../App.css";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function Header() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Available on Appstore</Popover.Header>
      <Popover.Body>
        This button would take you to the official Appstore page where you can
        download our application directly to your device.
      </Popover.Body>
    </Popover>
  );
  return (
    <div className="Header">
      <div className="Header-container">
        <div className="menu-button">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="custom-menu-toggle">
              <span className="menu-text">MENU</span>
              <span className="menu-icon">&#9776;</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item className="dropdown-item">
                <Link smooth to="#features">
                  Explore features
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                <Link smooth to="#design">
                  Better design
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                <Link smooth to="#apps">
                  Other awesome Apps
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                <Link smooth to="#benefits">
                  Benefits of our App
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item">
                <Link smooth to="#faq">
                  Frequently Asked Questions
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <h1 className="main-title">We take your health to the highest level</h1>
        <p className="main-description">
          Reach your goals faster and easier with our app that combines
          personalised workouts, meal planning and motivation. Your path to
          health starts here.
        </p>
        <div className="header-button">
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button className="aqua-button" variant="outline-info">
              See on Appstore
            </Button>
          </OverlayTrigger>
        </div>
      </div>
      <div class="logo-bar">
        <img class="logo-item" src="/images/Square-Logo.png" alt="Square" />

        <img class="logo-item" src="/images/airbnb-logo.png" alt="Airbnb" />

        <img class="logo-item" src="/images/Evernote-Logo.png" alt="Evernote" />

        <img
          class="logo-item"
          src="/images/Pinterest_Logo.png"
          alt="Pinterest"
        />
      </div>
    </div>
  );
}

export default Header;
