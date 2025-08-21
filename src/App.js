import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './Component/Layout/Navbar';
import Footer from './Component/Footer/Footer';

const Home = lazy(() => import('./Component/Pages/Home/Home'));
const Services = lazy(() => import('./Component/Pages/Serives/Serives'));
const Contact = lazy(() => import('./Component/Pages/ContactUs/ContactUs'));
const ServicesLandingPages = lazy(() => import('./Component/Pages/ServicesLandingPages/ServicesLandingPages'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event/wedding" element={<ServicesLandingPages />} />
        </Routes>
      </Suspense>
      <Footer/>
    </Router>
  );
}

export default App;
