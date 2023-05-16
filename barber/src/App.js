import React, { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
// import Footer from "./components/Footer";
import Loading from "./components/Loading";
const Contact = lazy(() => import("./components/Contact"));
<Suspense fallback={<Loading />}>
  <Contact />
</Suspense>;

const App = () => {
  const [pages] = useState([
    {
      name: "Home",
    },
    {
      name: "Contact",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <Navbar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="App">
        <main>
          <Page
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Page>
        </main>
      </div>
      {/* <Footer pages={pages} setCurrentPage={setCurrentPage} /> */}
    </>
  );
}

export default App;
