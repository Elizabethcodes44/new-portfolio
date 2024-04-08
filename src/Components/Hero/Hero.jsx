import "./Hero.scss";
import {motion} from "framer-motion"
const textVariants = {
    initial: {
      x: -500,
      opacity: 0,  
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollAnimation: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
const sliderVariants = {
    initial: {
      x: 0, 
    },
    animate: {
        x: "-220%", //this will prevent ıt from goıng through the rıght. dont add mınus ıf you want ıt to go through the rıght
        transition: {
            repeat: Infinity,
            duration: 20,
        }
    }
}
export default function Hero() {
  return (
    <div className="Hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants= {textVariants} initial = "initial" animate= "animate">
          <motion.h2 variants= {textVariants}>ELIZABETH KUJORE</motion.h2>
          <motion.h1 variants= {textVariants}>Software developer</motion.h1>
          <motion.div variants= {textVariants}className="buttons">
            <motion.button variants= {textVariants}>Projects</motion.button>
            <motion.button variants= {textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants= {textVariants} animate = "scrollAnimation" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingText" variants = {sliderVariants} initial ="initial" animate="animate" >
        A  full stack software developer and tech content creator
      </motion.div>
      <div className="image">
        <img src="/hero.jpg" alt="mypicture" />
      </div>
    </div>
  );
}
