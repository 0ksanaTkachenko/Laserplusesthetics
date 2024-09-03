import '@/styles/global.css'
import './Footer.css';



const Footer = () => { 
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-background-overlay"></div>
                <div className='footer-text-container'>
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
                        <p>Opening Time:</p>
                        <ul>
                            <li>Mon-Fri: 7am – 10pm</li>
                            <li>Sat-Sun: 8am – 7pm</li>
                        </ul>
                    </div>
                    <div>
                        <p>Links:</p>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Results</li>
                            <li>FAQ</li>
                        </ul>
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
    )
}

export default Footer