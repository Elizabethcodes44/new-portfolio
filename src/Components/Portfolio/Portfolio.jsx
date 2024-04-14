import "./Portfolio.scss";
import sheleads from "/sheleads.jpg";
import candy from "/candy.jpg";
import foodApp from "/foodApp.jpg";
import realestate from "/realestate.jpg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "SheLeads App",
    img: sheleads,
    desc: "SheLeads is an ongoing full-stack app designed for expecting mothers. .",
    url: "https://sheleads.netlify.app/",
  },
  {
    id: 2,
    title: "E-commerce App",
    img: candy,
    desc: "This ongoing live user-friendly website allows users to easily browse through the collections, .",
    url: "https://sheleads.netlify.app/",
  },
  {
    id: 3,
    title: "Recipe App",
    img: foodApp,
    desc: " An ongoing recipe app tailored for Nigerians residing in Istanbul, Turkey. ",
    url: "https://sheleads.netlify.app/",
  },
  {
    id: 4,
    title: "Real Estate App",
    img: realestate,
    desc: "This ongoing real estate app is set to revolutionize the property market with its comprehensive features and seamless user experience.",
    url: "https://sheleads.netlify.app/",
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
