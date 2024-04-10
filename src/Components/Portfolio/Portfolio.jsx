import "./Portfolio.scss";
import {useRef} from "react";
import sheleads from "/sheleads.jpg";
import candy from "/candy.jpg";
import foodApp from "/foodApp.jpg";
import realestate from "/realestate.jpg";
import {motion, useScroll, useSpring } from "framer-motion";
const projects = [
    {
        id:1,
        title:"SheLeads App",
        img: sheleads,
        desc:"SheLeads is an ongoing full-stack app designed for expecting mothers. It helps track due dates, health metrics, and doctor appointments. Plus,provides access to free tech courses offered by external websites and organizations, empowering users to enhance their skills at no cost.wellness resources for pregnancy and postpartum.",

    },
    {
        id:2,
        title:"E-commerce App",
        img: candy,
        desc: "This ongoing live user-friendly website allows users to easily browse through the collections, add their favorite items to  cart, and then proceed to checkout with just a few clicks. With secure online payment options."
    },
    {
        id: 3,
        title: "Recipe App",
        img: foodApp,
        desc: " An ongoing recipe app tailored for Nigerians residing in Istanbul, Turkey. This intuitive app allows users to explore a rich collection of Nigerian delicacies, complete with detailed recipes and nutritional insights. Additionally, users can easily locate nearby sources for both raw and cooked ingredients, enhancing their cooking experience. With a user-friendly interface and interactive features like commenting, this frontend app offers a seamless and engaging platform for discovering, cooking, and sharing culinary delights."
    },
     {
        id: 4,
        title: "Real Estate App",
        img: realestate,
        desc: "This ongoing real estate app is set to revolutionize the property market with its comprehensive features and seamless user experience. Built as a full-stack application, it aims to streamline the process of buying, selling, and renting properties. Users can browse through a vast database of listings, filter properties based on their preferences, and schedule viewings directly through the app. Additionally, our app incorporates advanced search functionalities, such as location-based searches and filters for property type, price range, and amenities. With integrated maps and virtual tours, users can explore properties remotely, saving time and effort."
     }

]
const Single = ({item}) => {
    return (
        <section>
           {item.title} 
        </section>
    )
}

export default function Portfolio() {
    const ref = useRef();
    const {scrollyProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const scaleX= useSpring(scrollyProgress, {
        stiffness: 100,
        damping: 30,
    });
    return(
        <div className="portfolioContainer" ref = {ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style = {{scaleX}}className="progressBar">

                </motion.div>
            </div>
            {projects.map((item)=>(<Single item={item} key={item.id} />))}
        </div>
    )
}