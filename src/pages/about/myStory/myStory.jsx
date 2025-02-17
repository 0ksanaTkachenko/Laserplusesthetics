import './myStory.css';
import Education from './education';
import leafImg from '@assets/images/AboutPage/leaf.png'

const MyStory = () => {
    return (
        <div className="my-story-container d-flex flex-column">
            <div className="my-story-approach text-center">
                <img src={leafImg} alt="" className='leaf-img img-fluid'/>
                <p>For me, cosmetology is the path to healthy, radiant skin and inner harmony. I help reveal natural beauty by combining science, care, and a personalized approach. ✨</p>
            </div>
            <div className="about-me d-flex align-items-stretch w-100">
                <div className="about-me-text-container d-flex flex-column justify-content-center">
                    <h3 className="about-me-title">Hi, I’m Tanya!</h3>
                    <p className="about-me-text">I am a certified cosmetologist with over 10 years of experience. I specialize in modern skincare techniques, continuously upgrading my skills and following the latest trends. For me, cosmetology is both an art and a science—caring for the skin and overall well-being. I use only proven methods and high-quality products, tailoring treatments to each client’s unique needs. Healthy, radiant skin starts with the right care. Let’s achieve it together!</p>
                </div>
                <div className="about-me-image-container d-flex align-items-center justify-content-center">
                     <div className="about-me-image position-relative overflow-hidden">
                        <div className='future-img'>Тут будет ваше фото</div>
                    </div> 
                </div>
            </div>
            <Education/>
        </div>
    )
}

export default MyStory