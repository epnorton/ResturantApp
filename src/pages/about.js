import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpg";
import "../style/about.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We are a family owned and operated pizza restaurant that has been open for 20 years. We strive to bring our community together with the commonality of love for pizza.
        </p>
      </div>
    </div>
  );
}

export default About;