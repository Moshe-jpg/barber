import React from "react";
import scissorsImg from "../../assets/scissors.png";

const Home = () => {
  return (
      <section id="home">
        <header>
          <h1>
            <span>Fire Gentleman</span>
          </h1>
          <div className="img-container">
            <img className="header-logo" src={scissorsImg} alt="Razor"></img>
          </div>
          <h2>
            <span>Home Of The Cleanest Cuts</span>
          </h2>
        </header>
      </section>
  );
};

export default Home;
