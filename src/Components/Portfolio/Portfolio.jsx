{/*import "./Portfolio.scss";
import {useRef} from "react";
import sheleads from "/sheleads.jpg";
import { useTransform } from "framer-motion";
import candy from "/candy.jpg";
import foodApp from "/foodApp.jpg";
import realestate from "/realestate.jpg";
import {useScroll, } from "framer-motion";
const projects = [
    {
        id:1,
        title:"SheLeads App",
        img: sheleads,
        desc:"SheLeads is an ongoing full-stack app designed for expecting mothers. .",

    },
    {
        id:2,
        title:"E-commerce App",
        img: candy,
        desc: "This ongoing live user-friendly website allows users to easily browse through the collections, ."
    },
    {
        id: 3,
        title: "Recipe App",
        img: foodApp,
        desc: " An ongoing recipe app tailored for Nigerians residing in Istanbul, Turkey. "
    },
     {
        id: 4,
        title: "Real Estate App",
        img: realestate,
        desc: "This ongoing real estate app is set to revolutionize the property market with its comprehensive features and seamless user experience."
     }

]

const Single = ({item}) => {
    const ref= useRef()
   
    
  // const y = useTransform(scrollyProgress, [0, 1], [-300 , 300])
    return (
        <section ref = {ref}>
          <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
           <img src = {item.img} alt ="image"/> 
           </div>
           <div className="textContainer" >
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <button>See webpage</button>
           </div>
           </div>
          </div>
        </section>
    )
}

export default function Portfolio() {
    const ref = useRef();
    
    return(
        <div className="portfolioContainer" ref = {ref}>
            <div className="progress">
                <h1>Projects</h1>
                <div className="progressBar">

                </div>
            </div>
            {projects.map((item)=>(<Single item={item} key={item.id} />))}
        </div>
    )
} */}