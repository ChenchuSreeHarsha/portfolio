import { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
// import facebookicon from '../../assets/facebook.jpg'
// import instagramicon from '../../assets/instagram.jpg'
function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_epp9x0p', 'template_e3z3g5q', form.current, 'Yrk80fZRtI2eZ9stf')
          .then((result) => {
            e.target.reset();
              console.log(result.text);
              alert("Msg Sent !");
            }, (error) => {
              console.log(error.text);
            });
        };
    return(
        <section className='contactEdu'>
            <div id='education'>
                <h1 className='title'>My Education</h1>
                <div className='edu'>
                <span className='eduDesc'>Completed my Bachelor of Technology in Electrical and Electronics Engineering from Gates Institute of Technology Affiliated to JNTU Anantapuram with 7.64 CGPA.</span><br/>
                </div>
                <div className='edu'>
                <span className='eduDesc'>Completed myIntermediate (M P C) in 2019 from Sri Chaitanya Junior College, under the Board Of Intermediate Education Andhra Pradesh with 9.79 GPA.</span><br/>
                </div>
                <div className='edu'>
                <span className='eduDesc'>Completed my SSCin 2017 from Padmavani EM High School, under the Secondary School Education AP with 9.2 GPA.</span><br/>
                </div>
            </div>
            <div id='contact'>
                <h1 className='title'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form to contat me</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='nameCon' placeholder='Your Name' name='your_name' />
                    <input type="email" className='email' placeholder='Your E-mail' name='your_email' />
                    <textarea className='msg' name='message' rows="6" placeholder='Your Message'></textarea>
                    <button type="submit" value="send" className='submitBtn'>Submit</button>
                    <div className='links'>
                        {/** <img src={facebookicon} alt='fb' className='link'/> */}
                        <p className='link'><i className="fa-brands fa-facebook"></i></p>
                        {/* <img src={instagramicon} alt='insta' className='link'/> */}
                        <p className='link'><i className="fa-brands fa-instagram"></i></p>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contact;