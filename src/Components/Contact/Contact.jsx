import "./Contact.scss";
export default function Contact () {
    return(
        <div className="Contact">
            <div className="textContainer">
                <h1>Your next Software developer?</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>lizbeepmc@gmail.com</span>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>Tokat, Turkey</span>
                </div>
                <div className="item">
                    <h2>Mobile</h2>
                    <span>+90 552 512 8270</span>
                </div>
            </div>
            <div className="formContainer">
                <form>
                   <input type= "text" required placeholder="Please input your name" />
                   <input type= "email" required placeholder="Please input your E-mail" />
                   <textarea rows ={10}placeholder="Drop a Message"/>
                   <button>Submit</button>
                    
                    
                </form>
            </div>
        </div>
    )
}