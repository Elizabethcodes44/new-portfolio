import "./Cursor.scss";
import {motion} from "framer-motion";
import {useState, useEffect} from "react"
export default function Cursor() {
    const [position, setPosition] = useState({y: 0, x: 0})
    useEffect(()=>{
        const cursorMove = (e) =>{
        setPosition({x:e.clientX,y:e.clientY})}
        window.addEventListener("mousemove", cursorMove);
        return () => {
            window.removeEventListener("mousemove", cursorMove)
        }
    }, [])
   
    return(
        <motion.div className="Cursor" animate = {{x:position.x + 10, y:position.y + 10}}></motion.div>
    )
}