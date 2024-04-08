import Navbar from "./Components/Navbar/navbar";
import "./App.scss";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <div>
        <section id="Home">
          <Navbar></Navbar>
          <Hero></Hero>
        </section>
        <section id="About">Parallax</section>
        <section>About</section>
        <section id="Portfolio">Parallax</section>
        <section>Project1</section>
        <section>Project2</section>
        <section>Project3</section>
        <section id="Contact">Contact</section>
      </div>
    </>
  );
}

export default App;
