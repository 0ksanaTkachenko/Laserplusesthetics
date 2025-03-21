import './footer.css';
import MenuComponent from '../Header/NavMenu/navMenu';
import { contactInfo, socialsMedia } from '@data/contactData';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container position-relative d-flex flex-column align-items-center">
        <div className="footer-background-overlay position-absolute top-0 h-100"></div>
        <div className="footer-text-container w-100 d-flex justify-content-between align-items-end">
          <div>
            <p>Location:</p>
            <ul>
              <li>{contactInfo.location}</li>
            </ul>
          </div>
          <div>
            <p>Contacts:</p>
            <ul>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
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
            <ul className="social-footer mg-0">
              {socialsMedia.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="footer-line"></hr>
        <div>
          <p className="footer-credits text-center">
            © {new Date().getFullYear()} Laserplusesthetics. All rights
            reserved. Some design elements created using Canva Pro. Images/icons
            by Freepik –{' '}
            <a
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.freepik.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
