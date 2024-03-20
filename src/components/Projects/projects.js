import './projects.css';
import ACService from '../../assets/images.jpg';
import Restaurant from '../../assets/restaurant.jpg';
import weatherImg from '../../assets/weather_img.jpeg';
import ShopStore from '../../assets/shopstore.jpeg'
function Projects(){
    return(
        <section id='projects'>
         <h2 className='title'>My Projects</h2>
         <span className='desc'>I done projects based on MERN stack and they are</span>
         <div className='projectsImgs'>
            <a href='https://myweatherapp0704.netlify.app/' target='_blank'><img src={weatherImg} alt='weather' className='img' /></a>
            <a href='https://harshashopstore.netlify.app/' target='_blank'><img src={ShopStore} alt='restaurant' className='img' /></a>
            <img src={ACService} alt='acservices' className='img' />
            <img src={Restaurant} alt='restaurant' className='img' />
         </div>
         <button className='btn'>See More</button>
        </section>
    )
}
export default Projects;