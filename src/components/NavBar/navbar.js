import { Link } from "react-scroll"
import './navbar.css'
import contactImg from '../../assets/chat.png'
import { useState } from "react"
function Navbar(){
    const[showMenu,setShowMenu]=useState(false);
return(
    <div className="navbar">
        <div className="navbarMenu">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="navbarMenuItem">Home</Link>
            <Link activeClass="active" to="aboutMain" spy={true} smooth={true} offset={-10} duration={500} className="navbarMenuItem">Skills</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-10} duration={500} className="navbarMenuItem">Projects</Link>
            <Link activeClass="active" to="education" spy={true} smooth={true} duration={500} className="navbarMenuItem">Education</Link>
        </div>
        <button className="navbarBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>
        <img src={contactImg} className="navbarBtnImg" alt="contactimg"/>Contact Me 
        </button>

        
        <div onClick={()=>setShowMenu(!showMenu)} className="mobDots">
        <i class="fa-solid fa-bars"></i>
        </div>
        <div className="mobMenu" style={{display: showMenu? 'flex':'none'}} >
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to="aboutMain" spy={true} smooth={true} offset={-10} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-37} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass="active" to="education" spy={true} smooth={true} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Education</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </div>
)
}
export default Navbar