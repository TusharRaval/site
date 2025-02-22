import React from 'react';
import LandingPage from '../LandingPage';
import Footer from '../Footer';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../LandingPage.css';
import a from '../images/ie95id6g.png';
import b from '../images/ar.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import we from '../images/we.jpeg';
import ServicesPage from '../ServicesPage';
import AboutUs from '../AboutUs';
import OurTeam from '../OurTeam';
import Form from '../Form';
import CountUp from "react-countup";
import beforeImage from "../images/g1.png";
import afterImage from "../images/g2.png";
import o from "../images/o.jpg";
import r from "../images/c.jpg";

import co from '../images/cco.jpeg';
import co2 from '../images/cco2.jpeg';
import co3 from '../images/cco3.jpeg';
import co4 from '../images/cco4.jpeg';
import co5 from '../images/co5.png';
import co6 from '../images/co6.png'

import UseScrollToSection from '../UseScrollToSection';

const Service = () => {

    UseScrollToSection();
    
    const [isBefore, setIsBefore] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [navbarCollapsed, setNavbarCollapsed] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
    
        const closeMobileNavbar = () => {
            setNavbarCollapsed(true);
        };
    
        const toggleDropdown = () => {
            setDropdownOpen(!dropdownOpen);
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
                                    aria-controls="navbarNav"
                                    aria-expanded={!navbarCollapsed}
                                    onClick={() => setNavbarCollapsed(!navbarCollapsed)}
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
            
                                <div className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'}`} id="navbarNav">
                                    <ul className="navbar-nav mx-auto text-center">
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/#ab">About</Link>
                                        </li>
            
                                        
                                        {/* Services Dropdown */}
                                        <li
                                            className="nav-item dropdown"
                                            style={{ position: "relative" }}
                                            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                                            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
                                        >
                                           <button
              className="nav-link dropdown-toggle"
              onClick={isMobile ? toggleDropdown : undefined}
              aria-expanded={dropdownOpen}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                position: "relative",
                display: "inline-block", // Ensure inline-block behavior
                width: "100px", // Lock a fixed width
                height: "40px", // Lock a fixed height
                lineHeight: "4px", // Ensures text stays vertically centered
              }}
            >
              Services
            </button>
            
                                            <div
                                                className={`dropdown-menu ${dropdownOpen ? 'd-block' : ''}`}
                                                style={{
                                                    position: "fixed",
                                                    zIndex: 1000,
                                                    display: dropdownOpen ? "grid" : "none",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: "10px",
                                                    padding: "10px",
                                                    top: "7%",
                                                    left: "50%",
                                                    minWidth: "180px",
                                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                                    backgroundColor: "white",
                                                    borderRadius: "5px",
                                                    textAlign:"center",
                                                }}
                                            >
                                                <Link className="dropdown-item" to="/wl" onClick={closeMobileNavbar}>Wheel Straightening</Link>
                                                <Link className="dropdown-item" to="/co" onClick={closeMobileNavbar}>Cosmetic Repair</Link>
                                                <Link className="dropdown-item" to="/com" onClick={closeMobileNavbar}>Complete Refurbishment</Link>
                                                <Link className="dropdown-item" to="/di" onClick={closeMobileNavbar}>Diamond Cutting</Link>
                                                <Link className="dropdown-item" to="/ca" onClick={closeMobileNavbar}>Caliper Painting</Link>
                                                <Link className="dropdown-item" to="/cu" onClick={closeMobileNavbar}>Customization</Link>
                                                <Link className="dropdown-item" to="/wh" onClick={closeMobileNavbar}>Wheel Personalization</Link>
                                                <Link className="dropdown-item" to="/Al" onClick={closeMobileNavbar}>Wheel Alignment</Link>
                                                <Link className="dropdown-item" to="/Ti" onClick={closeMobileNavbar}>Tyre Sales</Link>
                                            </div>
                                        </li>
            
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/#om">OurMotive</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/#ot">Team</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/#p">Pickup</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/#f">Contact</Link>
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
           


            <div className="services-section container-fluid p-5 py-5" id='c'>
                <h2 className="text-center mb-4" style={{ fontSize: '46px', fontWeight: 'bold' }}>Cosmetic Repair</h2>

             

                {/* Service 1 */}
                <div className="row align-items-center p-5 mb-5">

               <div 
                        className="col-md-6 d-flex justify-content-center position-relative "
                        onClick={() => setIsBefore(!isBefore)} 
                        style={{ cursor: 'pointer' ,overflowX:"hidden"}}
                      >
                        <img 
                          src={isBefore ? beforeImage : afterImage} 
                          alt={isBefore ? "Before" : "After"} 
                          className="img-fluid rounded wheel-before-after-img" 
                          style={{ width: '300px', height: '300px' }}
                        />
                        <div 
                          className="overlay-text d-flex align-items-center justify-content-center" 
                          style={{
                            position: 'absolute',
                            top: 80,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            color: '#ffffff',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                            overflowX:"hidden",
                            
                            pointerEvents: 'none' // Allow clicks to propagate to the parent
                          }}
                        >
                          {isBefore ? "click for After rusult" : "click for Before rusult"}
                        </div>
                        </div>

                    <div className="col-md-6">
                    <h3 style={{ fontSize: '36px', fontWeight: 'bold' }}>Cosmetic Repair</h3>
<p style={{ fontSize: '18px', fontWeight: 'bold' }}>
  Our cosmetic repair services are designed to restore the original beauty of your alloy wheels. Whether it’s scratches, curb rash, scuffs, or minor surface damage, we use advanced techniques and high-quality materials to ensure a flawless finish. Enhance both the appearance and longevity of your wheels with our expert touch.
</p>
<p style={{ fontSize: '18px', fontWeight: 'bold' }}>
  We specialize in:
</p>
<ul style={{ fontSize: '18px', fontWeight: 'bold' }}>
  <li>Scratch and scuff repair to restore the smoothness and original look of the wheel surface</li>
  <li>Removal of curb rash and dents for a polished, factory-fresh appearance</li>
  <li>Blending and color-matching techniques to seamlessly restore any damage</li>
  <li>Edge refinishing for a uniform, clean profile</li>
  <li>Clear coat restoration to protect the wheel’s finish from future damage and oxidation</li>
  <li>Polishing and buffing to eliminate discoloration and revive the wheel’s shine</li>
  <li>Minor corrosion removal to prevent further deterioration</li>
  <li>Protective coatings to add an extra layer of durability against wear and tear</li>
</ul>
<p style={{ fontSize: '18px', fontWeight: 'bold' }}>
  Our cosmetic repair services are ideal for enhancing both the aesthetics and resale value of your vehicle. 
  Trust our team to provide meticulous attention to detail, ensuring your alloy wheels are as stunning and road-ready as ever.
</p>

</div>


                  
                </div>
                <div className="row align-items-center mb-5">
                <h3 style={{ fontSize: '36px', fontWeight: 'bold' }}>our work</h3>
                     <div className="col-md-6">
                    <img 
                        src={co}
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                    <div className="col-md-6">
                    <img 
                        src={co2}
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                    <div className="row align-items-center mb-5">
                    <h3 style={{ fontSize: '36px', fontWeight: 'bold' }}>our work</h3>
                     <div className="col-md-6">
                    <img 
                        src={co3}
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                    <div className="col-md-6">
                    <img 
                        src={co4}
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                    </div>
                    <div className="row align-items-center mb-5">
                <h3 style={{ fontSize: '46px', fontWeight: 'bold' }}>our work</h3>
                     <div className="col-md-6">
                    <img 
                        src={co5}
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                    <div className="col-md-6">
                    <img 
                        src={co6}
                        alt="Before and After Wheel" 
                        className="img-fluid rounded before-after-img" 
                        
                        style={{ cursor: 'pointer', Width: '300px', height: '300px' }}
                    />
                    </div>
                    </div>
                </div>




    
    </div>

            <Footer />
           
        </div>
    
    );
};

export default Service;
