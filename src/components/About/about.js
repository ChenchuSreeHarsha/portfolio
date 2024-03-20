import './about.css';
import htmlimg from '../../assets/code-solid.jpg';
import cssimg from '../../assets/css3.jpg';
import jsimg from '../../assets/js.jpg';
import reactimg from '../../assets/react.jpg'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'
function About(){
    return(
        <section id='aboutMain'>
            <span className='name'>Skills</span>
            <span className='description'>Basically I Know HTML,CSS,React js,JavaScript,Express,Mongodb and some small technologies</span>
                <div className='skillsList'>
                    <div className='skillbar'>
                        <img src={htmlimg} alt='' className='skillbarImg'/>
                        <div className='skillbarText'>
                            <h2>HTML</h2>
                            {/* <p>I know about HTML</p> */}
                        </div>
                    </div>
                    <div className='skillbar'>
                        <img src={cssimg} alt='' className='skillbarImg'/>
                        <div className='skillbarText'>
                            <h2>CSS</h2>
                            {/* <p>I know CSS</p> */}
                        </div>
                    </div>
                    <div className='skillbar'>
                        <img src={jsimg} alt='' className='skillbarImg'/>
                        <div className='skillbarText'>
                            <h2>Javascript</h2>
                            {/* <p>I know Javascript</p> */}
                        </div>
                    </div>
                    <div className='skillbar'>
                        <img src={reactimg} alt='' className='skillbarImg'/>
                        <div className='skillbarText'>
                            <h2>React JS</h2>
                            {/* <p>I know React</p> */}
                        </div>
                    </div>
                    <div className='skillbar'>
                        <img src={express} alt='' className='skillbarImg'/>
                        <div className='skillbarText'>
                            <h2>EXPRESS JS</h2>
                            {/* <p>I know CSS</p> */}
                        </div>
                    </div>
                    <div className='skillbar'>
                        <img src={mongodb} alt='' className='skillbarImg'/>
                        <div className='skillbarText'>
                            <h2>MONGODB</h2>
                            {/* <p>I know CSS</p> */}
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default About;