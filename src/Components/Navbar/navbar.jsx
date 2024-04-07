import "./navbar.scss";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="https://github.com/Elizabethcodes44">
            <img src="/github.jpg" />
          </a>
          <a href="https://www.linkedin.com/in/elizabeth-kujore-a8b116128/">
            <img src="/linkedin.jpg" alt="linkedin" />
          </a>
          <a href="#">
            <img src="/instagram.jpg" />
          </a>
          <a href="#">
            <img src="/facebook.jpg" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
