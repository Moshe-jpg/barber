import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <header>
        <h1>Fire Gentleman</h1>
        <h2>Your Neighbourhood Barber That Gets You Right</h2>
        <h3>*We pull up wherever you're located</h3>
      </header>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/moshe-gadol/haircut?background_color=1a1a1a&text_color=ffffff&primary_color=d36b00"
        style={{ minWidth: "100%", maxWidth: "1250px", height: "750px" }}
      ></div>
    </section>
  );
};

export default Contact;