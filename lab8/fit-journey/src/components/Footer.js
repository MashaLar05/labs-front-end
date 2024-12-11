import React from "react";
import "../styles/footer.css";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "../App.css";

function Footer() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Form Submission</Popover.Header>
      <Popover.Body>
        This button is intended to submit the filled form. Upon clicking, the
        data would be processed and validated.
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="Footer">
      <div className="form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              className="input-field"
            />

            <Form.Control
              required
              type="text"
              placeholder="Last name"
              className="input-field"
            />

            <Form.Control
              required
              type="email"
              placeholder="Email"
              className="input-field"
            />
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Button type="submit" className="submit-btn">
                Submit form
              </Button>
            </OverlayTrigger>
          </Row>
        </Form>
      </div>

      <div className="connect-with-us">
        <div class="footer-section">
          <h4>ABOUT</h4>
          <ul>
            <li>
              <Link smooth to="#quotations">
                Company
              </Link>
            </li>
            <li>
              <Link smooth to="#quotations">
                Jobs
              </Link>
            </li>
            <li>
              <Link smooth to="#quotations">
                Blog
              </Link>
            </li>
            <li>
              <Link smooth to="#features">
                New Features
              </Link>
            </li>
            <li>
              <a href="https://t.me/masha_5_lar" target="_blank">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>SUPPORT</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>MORE LINKS</h4>
          <ul>
            <li>
              <Link smooth to="#quotations">
                Feedback
              </Link>
            </li>
            <li>
              <Link smooth to="#faq">
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <Link smooth to="#apps">
                More Apps
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
