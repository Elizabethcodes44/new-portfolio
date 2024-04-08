import "./Portfolio.scss";
import sheleads from "/sheleads.jpg";
import candy from "/candy.jpg";
import foodApp from "/recipe.jpg";
import realestate from "/realestate.jpg";
const projects = [
    {
        id:1,
        title:"SheLeads App",
        img: sheleads,
        desc:"SheLeads is a full-stack app designed for expecting mothers. It helps track due dates, health metrics, and doctor appointments. Plus,provides access to free tech courses offered by external websites and organizations, empowering users to enhance their skills at no cost.wellness resources for pregnancy and postpartum.",

    },
    {
        id:2,
        title:"E-commerce App",
        img: candy,
        desc: "This live user-friendly website allows users to easily browse through the collections, add their favorite items to  cart, and then proceed to checkout with just a few clicks. With secure online payment options."
    },
    {
        id: 3,
        title: "Recipe App",
        img: foodApp,
        desc: ""
    },
     {
        id: 4,
        title: "Real Estate App",
        img: realestate,
        desc: ""
     }

]
export default function Portfolio() {
    return(
        <div className="portfolioContainer"></div>
    )
}