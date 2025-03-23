// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@components/Header/DesktopHeader/Header';
import Footer from '@components/footer/footer';
import HomePage from '@pages/home/home';
import AboutPage from '@pages/about/about';
import ServicesPage from './pages/services/services';
import ResultsPage from '@pages/results/results';
import ContactsPage from './pages/contacts/contacts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import useIsMobile from '@hooks/useIsMobile';
import MobileHeader from '@components/Header/MobileHeader/MobileHeader';
import routes from './data/routes';
import ScrollToTopButton from './components/scrollToTopButton/scrollToTopButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const isMobile = useIsMobile(700);

  return (
    <Router>
      <div className="page-container body-text">
        <div className="sidebars"></div>
        <div className="container">
          {isMobile ? <MobileHeader /> : <Header />}
          <Routes>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.about} element={<AboutPage />} />
            <Route path={routes.services} element={<ServicesPage />} />
            <Route path={routes.results} element={<ResultsPage />} />
            <Route path={routes.contacts} element={<ContactsPage />} />
          </Routes>
          <ScrollToTopButton />
          <Footer />
        </div>
        <div className="sidebars"></div>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </Router>
  );
};

export default App;
