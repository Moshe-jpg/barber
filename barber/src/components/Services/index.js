import React from "react";
import burstFade from "../../assets/burst-fade.png";
import lowTaper from "../../assets/low-taper.png";
import mullet from "../../assets/mullet.png";
import midFade from "../../assets/mid-fade.png";
import beard from "../../assets/beard.png";

const styles = () => {
  const hairstyles = [
    {
      title: "Burst Fade",
      textSide: "left",
      imgSide: "right",
      imgSrc: burstFade,
      altTag: "Burst Fade",
    },
    {
      title: "Low Taper",
      textSide: "right",
      imgSide: "left",
      imgSrc: lowTaper,
      altTag: "Low Taper",
    },
    {
      title: "Mullet",
      textSide: "left",
      imgSide: "right",
      imgSrc: mullet,
      altTag: "Mullet",
    },
    {
      title: "Mid Fade",
      textSide: "right",
      imgSide: "left",
      imgSrc: midFade,
      altTag: "Mid Fade",
    },
    {
      title: "Beard Lineup",
      textSide: "left",
      imgSide: "right",
      imgSrc: beard,
      altTag: "Beard Lineup",
    },
  ];

  return (
    <section id="services">
      <header className="service-header">
        <h1>To Look Clean AF With<br></br>A Fire Gentleman Touch...</h1>
      </header>
      <ul className="styles-container">
        {hairstyles.map((style, index) => (
          <li key={index} className={`style-item ${style.textSide}`}>
            <header>
              <span>{style.title}</span>
            </header>
            <div className="img-container">
              <img
                width="100"
                height="100"
                src={style.imgSrc}
                alt={style.altTag}
                className={`${style.imgSide}`}
              ></img>
            </div>
          </li>
        ))}
      </ul>
      <header className="service-header">
        <h1>Has Never Been This Easy...</h1>
      </header>
    </section>
  );
};

export default styles;
