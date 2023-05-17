import React from "react";
import directionImg from "../../assets/haircut.png";
import locationImg from "../../assets/location.png";

const Steps = () => {
  return (
    <section id="steps">
      <ul className="steps-container">
        <li className="step step-one">
          <header>
            <h2>Choose The Cut You Want</h2>
            <span>The Sky Is The Limit</span>
          </header>
          <span>
            <img src={directionImg} alt="Choose A Haircut"></img>
          </span>
        </li>
        <li className="step step-two">
          <header>
            <h2>Choose The Time & Place</h2>
            <span>We're Flexible Like That</span>
          </header>
          <span>
            <img src={locationImg} alt="Choose The Time & Place"></img>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Steps;
