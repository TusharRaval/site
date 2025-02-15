import React from 'react';
import LandingPage from './LandingPage';
import Footer from './Footer';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './LandingPage.css';
import a from './images/ie95id6g.png';
import b from './images/ar.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import we from './images/we.jpeg';
import ServicesPage from './ServicesPage';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import Form from './Form';
import CountUp from "react-countup";
import beforeImage from "./images/o.jpg";
import afterImage from "./images/p.jpg";
import o from "./images/o.jpg";
import r from "./images/c.jpg";
import Wheel from './comp/Wheel';

const Service = () => {
    const [isBefore, setIsBefore] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
        const homeRef = useRef(null);
        const aboutRef = useRef(null);
        const servicesRef = useRef(null);
        const teamRef = useRef(null);
        const contactRef = useRef(null);
    
        const scrollToSection = (ref) => {
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={we} alt="Alloy Wheels Collection" className="img-fluid we" />
                        Wheel Genius Refurbished Pvt Ltd
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(homeRef)}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(aboutRef)}>About</button>
                            </li>

                            <li className="nav-item">
                                <Link to="/service" className="nav-link">Services</Link>
                            </li>


                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(teamRef)}>Our Team</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
                            </li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="d-lg-flex justify-content-center mt-3 mt-lg-0 social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
           


            <div className="services-section container justify-content-center align-items-center py-5">
  {/* Your content goes here */}

                <h2 className="text-center mb-4">Our Services</h2>


                {/* Service 1 */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 p-5">
                        <h3>Wheel Straightening</h3>
                        <p>We use state-of-the-art technology to fix bent and damaged alloy wheels, ensuring your ride is smooth and safe.</p>
                        <Link to="/wl" className="services-link">Services</Link>
                    </div>
                    <div className="col-md-6 p-5">
                    <img 
                        src={isBefore ? beforeImage : afterImage} 
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        onClick={() => setIsBefore(!isBefore)}
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                </div>

                {/* Service 2 */}
                <div className="row align-items-center mb-5 flex-md-row-reverse">
                    <div className="col-md-6 p-5">
                        <h3>Diamond Cutting Finishes</h3>
                        <p>Our precision diamond cutting service gives your wheels a flawless, factory-fresh look.</p>
                        <Link to="/wl" className="services-link">Services</Link>

                    </div>
                    <div className="col-md-6 p-5">
                        <img src={r} alt="Diamond Cutting" className="img-fluid rounded" />
                    </div>
                </div>

                
                {/* Service 1 */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 p-5">
                        <h3>Cosmetic repair</h3>
                        <p>We use state-of-the-art technology to fix bent and damaged alloy wheels, ensuring your ride is smooth and safe.</p>
                        <Link to="/wl" className="services-link">Services</Link>
                    </div>
                    <div className="col-md-6 p-5">
                    <img 
                        src={isBefore ? beforeImage : afterImage} 
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        onClick={() => setIsBefore(!isBefore)}
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                </div>

                {/* Service 2 */}
                <div className="row align-items-center mb-5 flex-md-row-reverse">
                    <div className="col-md-6 p-5">
                        <h3>complete Refurbishment</h3>
                        <p>Our precision diamond cutting service gives your wheels a flawless, factory-fresh look.</p>
                        <Link to="/wl" className="services-link">Services</Link>

                    </div>
                    <div className="col-md-6 p-5">
                        <img src={r} alt="Diamond Cutting" className="img-fluid rounded" />
                    </div>
                </div>

                
                {/* Service 1 */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 p-5">
                        <h3>Wheel Personalization</h3>
                        <p>We use state-of-the-art technology to fix bent and damaged alloy wheels, ensuring your ride is smooth and safe.</p>
                        <Link to="/wl" className="services-link">Services</Link>
                    </div>
                    <div className="col-md-6 p-5">
                    <img 
                        src={isBefore ? beforeImage : afterImage} 
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        onClick={() => setIsBefore(!isBefore)}
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                </div>

                {/* Service 2 */}
                <div className="row align-items-center mb-5 flex-md-row-reverse">
                    <div className="col-md-6 p-5">
                        <h3>calliper painting</h3>
                        <p>Our precision diamond cutting service gives your wheels a flawless, factory-fresh look.</p>
                        <Link to="/wl" className="services-link">Services</Link>

                    </div>
                    <div className="col-md-6 p-5">
                        <img src={r} alt="Diamond Cutting" className="img-fluid rounded" />
                    </div>
                </div>

                
                {/* Service 1 */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 p-5">
                        <h3>Wheel alignment</h3>
                        <p>We use state-of-the-art technology to fix bent and damaged alloy wheels, ensuring your ride is smooth and safe.</p>
                        <Link to="/wl" className="services-link">Services</Link>
                    </div>
                    <div className="col-md-6 p-5">
                    <img 
                        src={isBefore ? beforeImage : afterImage} 
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        onClick={() => setIsBefore(!isBefore)}
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                </div>

                {/* Service 2 */}
                <div className="row align-items-center mb-5 flex-md-row-reverse">
                    <div className="col-md-6 p-5">
                        <h3>Tyre sales</h3>
                        <p>Our precision diamond cutting service gives your wheels a flawless, factory-fresh look.</p>
                        <Link to="/wl" className="services-link">Services</Link>

                    </div>
                    <div className="col-md-6 p-5">
                        <img src={r} alt="Diamond Cutting" className="img-fluid rounded" />
                    </div>
                </div>

                

      {/* Stats Section */}
      <div className="row text-center">
        <div className="col-md-4">
          <h3><CountUp start={0} end={5000} duration={3} />+</h3>
          <p>Wheels Repaired</p>
        </div>
        <div className="col-md-4">
          <h3><CountUp start={0} end={10} duration={3} />+</h3>
          <p>Years in Business</p>
        </div>
        <div className="col-md-4">
          <h3><CountUp start={0} end={98} duration={3} />%</h3>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </div>
           
        </div>
    );
};

export default Service;
