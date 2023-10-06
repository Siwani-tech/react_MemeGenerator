import "./style/header.css";
import logo from "../assets/Trollface.svg"

export default function Header(){

    return(
        <>
        <div className="navbar">
           
                <img className="nav--image" src={logo} alt="" />

                <h2 className="nav--heading">Meme Generator</h2>
            
        </div>
        </>
    )
}