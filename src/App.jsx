import Navbar from "./Components/Navbar/navbar";
import "./App.scss";

import Hero from "./Components/Hero/Hero";

import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
//import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  
  return (
    <>
      <div className="appContainer">
        <Cursor />
        <section id="Home">
          <Navbar></Navbar>
          <Hero
           ></Hero>
        </section>
        <section id="About">
          <About />
        </section>

        <section id="Portfolio">
         <Portfolio />
        </section>
        
      </div>
    </>
  );
}

export default App;
