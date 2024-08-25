import "./Portfolio.scss";
import sheleads from "/sheleads.jpg";
import candy from "/candy.jpg";
import foodApp from "/foodApp.jpg";
import budgetapp from "/budget.jpg";
import travelapp from "/Travel1.jpg";
import bookstore from "/bookstore.jpg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const projects = [
  { 
    id: 1,
    title: "Online Book Store",
    img: bookstore,
    desc: "Explore an online  collection of books across different  genres built with mock data, Easily search, wishlist, and add to your cart, all in one place. ",
    url: "https://myonlinebookstore44.netlify.app/",

  },
  { 
    id: 2,
    title: "Travel App",
    img: travelapp,
    desc: "This front-end application integrates various RESTful APIs to display hotels, flights, and reviews, offering a comprehensive travel experience. With both dark and light mode options, it provides a user-friendly interface where you can effortlessly search for flights and hotels, book them, manage your bookings, and delete them as needed. ",
    url: "https://mytravelapp44.netlify.app/",

  },
  { 
    id: 3,
    title: "My Budget Tracker",
    img: budgetapp,
    desc: "This is a simple front end app that allows users to Easily track their income, expenses, and overall budget in real-time. Add, edit, and delete transactions with just a few clicks.",
    url: "https://elizabethsbudgetapp.netlify.app/",

  },
  {
    id: 4,
    title: "Bump Tech App",
    img: sheleads,
    desc: "Bump Tech is a full-stack app designed for expecting mothers.",
    url: "https://github.com/Elizabethcodes44/my-Final-Project",
  },
  {
    id: 5,
    title: "E-commerce App",
    img: candy,
    desc: "This ongoing live user-friendly website allows users to easily browse through the collections, .",
    url: "https://candyglitterz.netlify.app/",
  },
  {
    id: 6,
    title: "Recipe App",
    img: foodApp,
    desc: " An ongoing recipe app tailored for Nigerians residing in Istanbul, Turkey. ",
    url: "https://github.com/Elizabethcodes44/react-naija-recipe-App",
  },
  
];
function Section({ project }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imageContainer">
            <img src={project.img} alt="projectimage" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <a href={project.url} target="_blank">
              <button>See Project</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    from: 1,
  });
  useEffect(() => {
    console.log("scrollyProgress:", scrollYProgress);
  }, [scrollYProgress]);
  useEffect(() => {
    console.log("scaleX:", scaleX);
  }, [scaleX]);
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projects.map((project) => (
        <Section project={project} key={project.id} />
      ))}
    </div>
  ); 
}
