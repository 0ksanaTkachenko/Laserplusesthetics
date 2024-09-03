/* eslint-disable react/prop-types */
import useScrollAnimation from '@hooks/useScrollAnimation'
import './strengthsSection.css';
import WhiteBgSectionHeader from '@components/WhiteBgSectionHeader/WhiteBgSectionHeader'
import educationIcon from '@assets/images/strengths-section/education-icon.png';
import experienceIcon from '@assets/images/strengths-section/experience-icon.png';
import certifiedIcon from '@assets/images/strengths-section/certified-icon.png';
import cosmeticsIcon from '@assets/images/strengths-section/cosmetics-icon.png';
import careIcon from '@assets/images/strengths-section/care-icon.png';

const strengthsData = [
    { icon: educationIcon, text: 'Medical Education' },
    { icon: experienceIcon, text: '10+ Years of Experience' },
    { icon: certifiedIcon, text: 'Certified Specialist' },
    { icon: cosmeticsIcon, text: 'Professional Cosmetics' },
    { icon: careIcon, text: 'Personalized Care' }
];

const StrengthsItem = ({ icon, text }) => {
    return (
        <div className="strengths-item">
            <img src={icon} alt="" />
            <p>{text}</p>
        </div>
    ); 
};

const StrengthsSection = () => {
    useScrollAnimation('.strengths-item-container');

    return (
        <section className='strengths-section'>
            <WhiteBgSectionHeader
                p={'Why Choose Us'}
                h2={'Our Strengths'}
            />
            <div className="strengths-container">
                {strengthsData.map((item, index) => (
                    <div className="strengths-item-container" key={index}>
                        <StrengthsItem
                            icon={item.icon}
                            text={item.text}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StrengthsSection;