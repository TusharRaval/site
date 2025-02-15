import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import FeatureCards from "./FeatureCards";
import Pag from "./Pag";
import Form from "./Form";
import Footer from "./Footer";
import About from "./About";
import CustomCursor from "./CustomCursor";  
import ServicesPage from './ServicesPage';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import OurMotive from './OurMotive';
import Service from './Service';
import PickAndDrop from './PickAndDrop';
import ServicesPag from "./ServicesPag";
import ServiceDetail from "./ServiceDetail";
import Navabar from './Navbar';
import Wheel from './comp/Wheel';
import Cos from './comp/Cos';
import Co from './comp/Co';
import Di from './comp/Di';
import Ca from './comp/Ca';
import Cust from './comp/Cust';
import Whe from './comp/Whe';
import Al from './comp/Al';
import Ti from './comp/Ti';
 import Info from "./Info";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
    return (
        <Router>
            <CustomCursor />
          
            
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/:ab" element={<LandingPage />} />
                <Route path="/:s" element={<Service />} />
                
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/service/:id" element={<ServiceDetail />} />
                <Route path="/wl" element={<Wheel />} />
                <Route path="/co" element={<Cos />} />
                <Route path="/com" element={<Co />} />
                <Route path="/di" element={<Di />} />
                <Route path="/ca" element={<Ca />} />
                <Route path="/cu" element={<Cust />} />
                <Route path="/wh" element={<Whe />} />
                <Route path="/Al" element={<Al />} />
                <Route path="/ti" element={<Ti />} />
                <Route path="/pic" element={<PickAndDrop />} />

                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/service" element={<Service />} />
                <Route path="/omm" element={<OurMotive />} />
                <Route path="/our-team" element={<OurTeam />} />
                <Route path="/features" element={<FeatureCards />} />
                <Route path="/pagination" element={<Pag />} />
                <Route path="/about" element={<About />} />
                <Route path="/form" element={<Form />} />
                <Route path="/Info" element={<Info />} />
            </Routes>

           
        </Router>
    );
}

export default App;
