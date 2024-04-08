import "./Parallax.scss";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion"
export default function Parallax({ type }) {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  const yBg=useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  return (
    <div className="parallaxContainer" style= {{background:type === "about"? "linear-gradient(180deg, #0c0c1d, #111132)" : "linear-gradient(180deg #111132, #505064)",}}>
      <motion.h1 style={{y: yText}}>{type === "about" ? "About Me" : "My Projects"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style = {{ y: yBg,backgroundImage: `url(${type === "about" ? "/planets.png" :"/sun.png"})`}}></motion.div>
      <motion.div style= {{y: yBg}}className="stars"></motion.div>
    </div>
  );
}
