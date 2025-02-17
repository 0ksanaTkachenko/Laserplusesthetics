import './about.css';
import AboutHeader from './aboutHeader/aboutHeader';
import MyStory from './myStory/myStory';
import Safety from './safety/safety';
import Faq from './faq/faq';

const AboutPage = () => {
    return (
        <div className='aboutPage'>
            <AboutHeader />
            <MyStory />
            <Safety />
            <Faq/>
        </div>
    )
}

export default AboutPage