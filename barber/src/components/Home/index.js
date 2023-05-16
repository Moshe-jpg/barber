import React from "react";
import Services from "../Services";
import Offering from "../Offering";
import scissorsImg from "../../assets/scissors.png";

const Home = () => {
  return (
    <>
      <section id="home">
        <header>
          <h1>
            <span>Fire Gentleman</span>
          </h1>
          <div className="img-container">
            <img className="header-logo" src={scissorsImg} alt="Razor"></img>
          </div>
          <h2>
            <span>The Cleanest Cuts Fr</span>
          </h2>
        </header>
      </section>
      <Services />
      <Offering />
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;
