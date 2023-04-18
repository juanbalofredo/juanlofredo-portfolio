import React from "react"
import foto1 from "../Img/4.png"
import foto2 from "../Img/1.png"

const Navbar = () =>{

return(<>
<div className="nav-cont">
    <div className="nav-img">
    <img src={foto1} alt="4" />
    <img src={foto2}  alt="3" />
    </div>
    <ul className="parent">
        <li className="child-nav">Home</li>
        <li className="child-nav">About</li>
        <li className="child-nav">Portafolio</li>
        <li className="child-nav">Contacto</li>
    </ul>
</div>

</>)
}
export default Navbar