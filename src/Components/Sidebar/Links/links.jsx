import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      stagggerDirection: -1,
    },
  },
};
const listVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
export default function Links() {
  const links = ["Home", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="Links" variants={variants}>
      {links.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={listVariants} whileHover={{scale:1.1}} whileTap={{scale:0.5}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
