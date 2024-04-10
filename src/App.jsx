import Navbar from "./Components/Navbar/navbar";
import "./App.scss";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/Parallax/Parallax";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  return (
    <>
      <div className="appContainer">
      <Cursor/>
        <section id="Home">
          <Navbar></Navbar>
          <Hero></Hero> 
        </section>
      <section id="About"><Parallax type ="about"/></section> <section><About/></section>
        <section id="Portfolio"><Parallax type = "portfolio"/></section>
        <section><Portfolio/></section>
  <section id="Contact"><Contact></Contact></section> 
        
      </div>
    </>
  );
}

export default App;
