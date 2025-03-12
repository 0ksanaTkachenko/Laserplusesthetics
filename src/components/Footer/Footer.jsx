import './Footer.css';
import MenuComponent from '../Header/NavMenu/navMenu';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-background-overlay"></div>
        <div className="footer-text-container">
          <div>
            <p>Location:</p>
            <ul>
              <li>4646 Dufferin St Unit 1, North York, ON</li>
            </ul>
          </div>
          <div>
            <p>Contacts:</p>
            <ul>
              <li>+ 1 (647) 248-3504</li>
              <li>sampleEmail@gmail.com</li>
            </ul>
          </div>
          <div>
            <p>Links:</p>
            <div className="footer-nav-container">
              <MenuComponent />
            </div>
          </div>
          <div>
            <p>Social:</p>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Telegram</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>
        <hr className="footer-line"></hr>
      </div>
    </footer>
  );
};

export default Footer;
