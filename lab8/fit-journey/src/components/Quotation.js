import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/quotation.css";

import "../App.css";

function Quotation() {
  const quotes = [
    {
      img: "/images/AlexeyIvanov.jpg",
      text: "We believe that everyone is capable of achieving their goals if they have the right support and motivation. Our app is designed to help you along the way.",
      author: (
        <>
          <span className="blacked-text">Alexey Ivanov</span> Co-founder and SEO
        </>
      ),
    },
    {
      img: "/images/MariaKuznetsova.jpg",
      text: "Technology in fitness is evolving rapidly. We strive to use the most advanced solutions to ensure our users get the most out of their workouts.",
      author: (
        <>
          <span class="blacked-text">Maria Kuznetsova</span> Chief Development
          Officer
        </>
      ),
    },
    {
      img: "/images/FitJourneyTeam.jpg",
      text: "Every new user is more than just a statistic to us. We take pride in helping people change their lives for the better.",
      author: (
        <>
          <span class="blacked-text">Fit Journey team</span>
        </>
      ),
    },
  ];

  return (
    <div className="Quotation">
      <div className="testimonial-section">
        <Carousel>
          {quotes.map((quote, index) => (
            <Carousel.Item key={index} interval={3000}>
              <div className="quote">
                <img className="author-image" src={quote.img} alt="Author" />
                <div>
                  <p className="quote-text">{quote.text}</p>
                  <p className="author">{quote.author}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>28</h3>
          <p>Customers</p>
        </div>
        <div className="stat">
          <h3>57</h3>
          <p>Completed Apps</p>
        </div>
        <div className="stat">
          <h3>34,023</h3>
          <p>Downloads</p>
        </div>
      </div>
    </div>
  );
}

export default Quotation;
