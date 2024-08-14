// import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/global.css'; 

const App = () => {
    return (

        <Router>
            <div className="app">
                <div className="sidebars"></div>
                <div className="container">
                    <Header />
                </div>
                <div className="sidebars"></div>
            </div>   
        </Router>
    )
}

export default App