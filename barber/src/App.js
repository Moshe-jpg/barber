import React from "react";
import Navbar from "./components/Navbar";
import ContactBtn from "./components/ContactBtn";
import Home from "./components/Home";
import Services from "./components/Services";
import Steps from "./components/Steps";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <main>
          <Home />
          <Services />
          <Steps />
          {/* <Testimonials /> */}
          <Contact />
          <ContactBtn />
        </main>
      </div>
      {/* <Footer pages={pages} setCurrentPage={setCurrentPage} /> */}
    </>
  );
};

export default App;
