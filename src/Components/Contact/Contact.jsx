import "./Contact.scss";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from "react"
import { motion} 
from "framer-motion";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
export default function Contact() {
    const formRef = useRef()
    const [error, setError] = useState(false);
    const [success, setSuccess] =useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_limbdkv', 'template_h7qwhpy', formRef.current, {
            publicKey: 'VT5Ejv0PgIcwwvlPk',
          })
          .then(
            (result) => {
             setSuccess(true);
            },
            (error) => {
              setError(true);
            },
          );
      };
    
  return (
    <motion.div
   
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="Contact"
    >
      <motion.div variants={variants} className="textContainer">
        <motion.h1 variants={variants}>Your next Software developer?</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>lizbeepmc@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>Tokat, Turkey</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Mobile</h2>
          <span>+90 552 512 8270</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div initial= {{opacity:1}} whileInView = {{opacity: 0}} transition= {{delay: 1, duration:1}}className="phoneImage">
       
<svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	viewBox="0 0 490.726 490.726" xmlSpace="preserve">
<g>
	<g>
		<path 
        
      
        d="M261.526,475.713c1.7,0.1,3.4,0.2,5,0.2c18.5,0,34-6.7,46.1-19.9c0.1-0.1,0.3-0.3,0.4-0.4c4-4.8,8.6-9.2,13.5-13.9
			c3.4-3.2,6.8-6.6,10.1-10.1c16.4-17.1,16.3-39.6-0.2-56.1l-42.7-42.7c-7.9-8.3-17.5-12.6-27.6-12.6c-10,0-19.7,4.3-27.8,12.5
			l-23.6,23.6c-1.6-0.9-3.3-1.7-4.9-2.5c-2.7-1.4-5.3-2.7-7.5-4.1c-22.9-14.5-43.7-33.5-63.5-57.9c-9.4-11.8-15.8-21.9-20.3-31.6
			c6-5.6,11.7-11.3,17.2-16.9c2.2-2.2,4.4-4.4,6.6-6.6c8.4-8.4,12.8-18.1,12.8-28.1s-4.4-19.7-12.8-28.1l-21.2-21.2
			c-2.4-2.4-4.8-4.9-7.2-7.3c-4.7-4.9-9.7-9.9-14.5-14.4c-7.9-7.9-17.4-12.1-27.4-12.1c-9.9,0-19.5,4.1-27.8,12.1l-26.6,26.6
			c-10.2,10.3-16.1,22.8-17.3,37.2c-1.9,23,4.9,44.4,10.1,58.5c12.6,34.1,31.6,65.8,59.7,99.7c34.2,40.8,75.4,73.1,122.4,95.8
			C210.426,463.913,234.526,474.013,261.526,475.713z M88.826,343.813c-26.3-31.6-43.9-61-55.6-92.5c-7.1-19.1-9.8-33.9-8.6-47.9
			c0.7-8.6,4.1-15.8,10.5-22.2l26.2-26.2c2.4-2.3,6.2-5.1,10.7-5.1c4.3,0,7.9,2.7,10.4,5.2c4.7,4.4,9.2,9,14,13.9
			c2.4,2.5,4.9,5,7.4,7.5l21.2,21.2c2.6,2.6,5.6,6.5,5.6,10.8s-3.1,8.2-5.6,10.8c-2.3,2.3-4.5,4.5-6.7,6.8
			c-6.5,6.6-12.7,12.9-19.4,18.9c-0.2,0.2-0.3,0.3-0.5,0.5c-7.3,7.3-6,14.6-4.4,19.4c0.1,0.3,0.2,0.5,0.3,0.8
			c5.6,13.5,13.4,26.3,25.5,41.5c21.6,26.6,44.3,47.3,69.4,63.2c3.2,2.1,6.5,3.7,9.7,5.3c2.7,1.4,5.3,2.7,7.5,4.1
			c0.4,0.2,0.7,0.4,1.1,0.6c7.7,3.8,15.3,2.5,21.5-3.8l26.6-26.6c2.4-2.4,6.2-5.3,10.5-5.3c4.2,0,7.7,2.8,10.1,5.3l42.9,42.9
			c7.1,7.1,7.1,14.2-0.3,21.9c-2.9,3.1-6.1,6.1-9.4,9.3c-5,4.9-10.3,9.9-15.1,15.6c-7.5,8-16.3,11.7-27.9,11.7c-1.2,0-2.3,0-3.5-0.1
			c-22.8-1.5-44.1-10.4-60-18C159.226,412.113,120.826,382.013,88.826,343.813z"/>
		<path d="M295.426,283.013c13.4,3.3,27.2,5,41.2,5c85,0,154.1-61.3,154.1-136.6s-69.1-136.6-154.1-136.6s-154.1,61.2-154.1,136.6
			c0,28.9,10.4,57.1,29.4,80.3c-3.6,6.9-8.6,12.5-14.8,16.5c-5.7,3.8-8.4,10.5-6.9,17.1s6.8,11.4,13.5,12.4
			c13.1,1.8,38.5,2.8,62.2-11.5c5.8-3.5,7.7-11,4.2-16.8c-3.5-5.8-11-7.7-16.8-4.2c-8.8,5.3-18.2,7.7-26.5,8.6
			c4.6-5.8,8.2-12.5,11-20c1.6-4.3,0.6-9.2-2.5-12.6c-18.5-20.1-28.3-44.2-28.3-69.9c0-61.8,58.1-112.1,129.6-112.1
			s129.6,50.3,129.6,112.1s-58.1,112.1-129.6,112.1c-12,0-23.9-1.4-35.4-4.2c-6.5-1.6-13.2,2.4-14.8,9
			C284.826,274.813,288.826,281.413,295.426,283.013z"/>
		<circle cx="336.626" cy="151.413" r="13"/>
		<circle cx="382.926" cy="151.413" r="13"/>
		<circle cx="290.326" cy="151.413" r="13"/>
	</g>
</g>
  </svg> 
        </motion.div>
        <motion.form ref = {formRef}
        onSubmit= {sendEmail}initial= {{opacity:0}} whileInView = {{opacity: 1}} transition= {{delay: 2, duration:1}}>
          <input type="text" required placeholder="Please input your name" name = "name" />
          <input type="email" required placeholder="Please input your E-mail" name ="email"/>
          <textarea rows={10} placeholder="Drop a Message"name = "message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
}
