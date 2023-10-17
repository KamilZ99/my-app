import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Contact from './Contact';
import '../styles/buttons.css';

const AppRoutes = () => 
{

    return (
        <Router>
            <Link to="/"><button className="button">Home</button></Link>
            <Link to="/about-us"><button className="button">O nas</button></Link>
            <Link to="/Contact"><button className="button">Contact</button></Link>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}


export default AppRoutes;
