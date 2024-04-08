import "./About.scss";
import { motion } from "framer-motion";
const variants = {
    initial: {
        x:-500,
        y:100,
        opacity: 0
    },
    animate:{
        x:0,
        opacity:1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
}
export default function About() {
  return (
    <motion.div className="aboutMe" variants ={variants} initial = "initial" whileInView="animate" >
      <motion.div variants ={variants}className="textContainer">
        <p>
          I specialize in crafting software solutions <br />
          that bring value to all users.
        </p>
        <hr />
      </motion.div>
      <motion.div variants ={variants}className="titleContainer">
        <div className="title">
          <img src="/keyboard.jpg" alt="laptop" />
          <h1>A junior</h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"red"}}>Full Stack</motion.b> developer
          </h1>
        </div>
      </motion.div>
      <motion.div variants ={variants}className="paragraph">
        <p>
          
            I am a Junior Full Stack Developer based in Turkey, passionate about
            continuous learning and skill expansion. I have a diverse skill set
            ranging from front-end (HTML, CSS, JavaScript, React JS) to back-end
            (Node.js, Express) development.  Outside of coding, I love exploring new places, drawing
            creativity from different cultures. Additionally, I enjoy making
            clothes for my family, emphasizing craftsmanship and attention to
            detail—values that I bring to my coding projects. Open to
            relocation, I am seeking opportunities to contribute to innovative
            projects aligned with my values. If you're looking for a passionate,
            adaptable, and collaborative junior full-stack developer, I invite
            you to connect and build something amazing together.
        
        </p>
      </motion.div>
      <motion.div variants ={variants}className="listContainer">
        <div className="techStack">
          <h2>Tech Stack</h2>
          <div className="box">
            <img src="/html.svg" alt="html" />
            <img src="express.svg" />
            <img src="/html.svg" alt="html" />
            <img src="/html.svg" alt="html" />
            <img src="/html.svg" alt="html" />
            <img src="/html.svg" alt="html" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
