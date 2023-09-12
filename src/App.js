import React from "react";
import Navbar from "./Components/Navbar";
import PortfolioState from "./Context/PortfolioState";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";
import Education from "./Components/Education";
import BottomNav from "./Components/BottomNav";

const App = () => {
  return (
    <PortfolioState>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Works />
        <Education />
        <Contacts />
        <Footer />
        <BottomNav />
      </div>
    </PortfolioState>
  );
};

export default App;
