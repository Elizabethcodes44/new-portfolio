import Navbar from "./Components/Navbar/navbar";
import "./App.scss";
import {useState} from "react";
import Hero from "./Components/Hero/Hero";

import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <div className="appContainer">
        <Cursor />
        <section id="Home">
          <Navbar></Navbar>
          <Hero
          setShowPortfolio={setShowPortfolio} 
          setShowContact={setShowContact} ></Hero>
        </section>
        <section id="About">
          <About />
        </section>

        <section id="Portfolio">
         <Portfolio />
        </section>
        <section id="Contact">
        <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
