// import React from 'react';
import Header from '@components/Header/DesktopHeader/Header';
import Footer from '@components/Footer/Footer';
import HomePage from '@pages/Home/Home';
import AboutPage from '@pages/About/About';
import ServicesPage from '@pages/Services/Services'
import ResultsPage from '@pages/Results/Results'
import FaqPage from '@pages/FAQ/FAQ'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css'; 
import useIsMobile from '@hooks/useIsMobile'
import MobileHeader from '@components/Header/MobileHeader/MobileHeader';

const App = () => {

    const isMobile = useIsMobile();
    
    return (
        <Router>
            <div className='page-container body-text'>
                <div className="sidebars"></div>
                    <div className="container">
                        {isMobile ? (
                            <MobileHeader />
                        ) : (
                            <Header />
                        )}
                    <Routes>
                        <Route path="/Laserplusesthetics/" end element={<HomePage />} />
                        <Route path="/Laserplusesthetics/about" element={<AboutPage />} />
                        <Route path="/Laserplusesthetics/services" element={<ServicesPage />} />
                        <Route path="/Laserplusesthetics/results" element={<ResultsPage />} />
                        <Route path="/Laserplusesthetics/faq" element={<FaqPage />} />    
                    </Routes>
                    <Footer />
                    </div>
                <div className="sidebars"></div>
            </div>
        </Router>
    );
};

export default App;
