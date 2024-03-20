import './home.css';
import imgh from '../../assets/harsha.jpg'
import { Link } from 'react-scroll';
function Home(){
    return(
        <div id="home">
            <div className="homeContent">
                <span className='hello'>Hello,</span>
                <span className='homeText'>I'm <span className='homeName'>Sree Harsha</span> <br/>React Developer</span>
                <p className='homePara'></p>
                <Link><button className='homeBtn'>Hire Me</button></Link>
            </div>
            <img src={imgh} alt="myimage" className="homeImg" />
        </div>
    )
}
export default Home