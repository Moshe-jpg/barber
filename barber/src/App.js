import React, { lazy, Suspense } from "react";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router></>
  );
}

export default App;
