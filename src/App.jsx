// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@components/Header/DesktopHeader/Header';
import Footer from '@components/Footer/Footer';
import HomePage from '@pages/home/home';
import AboutPage from '@pages/about/about';
import ServicesPage from './pages/services/services';
import ResultsPage from '@pages/results/results';
import ContactsPage from './pages/contacts/contacts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import useIsMobile from '@hooks/useIsMobile';
import MobileHeader from '@components/Header/MobileHeader/MobileHeader';

const App = () => {
  const isMobile = useIsMobile(700);

  return (
    <Router>
      <div className="page-container body-text">
        <div className="sidebars"></div>
        <div className="container">
          {isMobile ? <MobileHeader /> : <Header />}
          <Routes>
            <Route path="/Laserplusesthetics/" element={<HomePage />} />
            <Route path="/Laserplusesthetics/about" element={<AboutPage />} />
            <Route
              path="/Laserplusesthetics/services"
              element={<ServicesPage />}
            />
            <Route
              path="/Laserplusesthetics/results"
              element={<ResultsPage />}
            />
            <Route
              path="/Laserplusesthetics/contacts"
              element={<ContactsPage />}
            />
          </Routes>
          <Footer />
        </div>
        <div className="sidebars"></div>
      </div>
    </Router>
  );
};

export default App;
