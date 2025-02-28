/* eslint-disable react/prop-types */
import './strengths.css';
import SectionHeader from '../../../components/sectionHeader/sectionHeader';
import strengthsData from '../../../data/strengths';

const StrengthsItem = ({ icon, text }) => {
  return (
    <div className="strengths-item">
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};

const Strengths = () => {
  return (
    <section className="strengths-section">
      <SectionHeader p={'Why Choose Me'} h2={'Strengths'} />
      <div className="strengths-container">
        {strengthsData.map((item, index) => (
          <div className="strengths-item-container" key={index}>
            <StrengthsItem icon={item.icon} text={item.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strengths;
