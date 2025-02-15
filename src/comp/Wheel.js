import React, { useRef, useState, useEffect } from 'react';
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
import Footer from '../Footer';
import UseScrollToSection from '../UseScrollToSection';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../LandingPage.css';
import './Co.css';
import beforeImage from "../images/g1.png";
import afterImage from "../images/g2.png";
import au from '../images/au.png';
import be from '../images/be.png';
import bm from '../images/bm.png';
import ja from '../images/ja.png';
import mb from '../images/mb.png';
import { FaSearch, FaSoap, FaTools, FaPaintBrush, FaCheckCircle } from "react-icons/fa";
import { MdBuild } from "react-icons/md"; // Another icon option for cosmetic repairs





const Wheel = () => {

    UseScrollToSection();

    const [isBefore, setIsBefore] = useState(true);
    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [navbarCollapsed, setNavbarCollapsed] = useState(true); // Track navbar state

    const navigate = useNavigate();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to toggle the dropdown in mobile view
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Function to close the navbar on mobile/tablet when a link is clicked
    const closeMobileNavbar = () => {
        if (isMobile) setNavbarCollapsed(true);
    };

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const teamRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileNavbar(); // Close navbar when navigating
    };

    return (
        <div className="landing-page">
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

            {/* Wheel Section */}
            <div className="wheel-section container-fluid py-5 text-center" id="w" style={{ backgroundColor: '#fff5ee', color: '#000000' }}>
                <h2 className="mb-4 mb-md-5" style={{fontSize:'46px',fontWeight:'bold'}}>Our Services</h2>

                {/* Service 1 - Wheel Straightening */}
                <div className="row justify-content-center align-items-center mb-5 px-3 px-md-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h3 className="mb-3" style={{fontSize:'46px',fontWeight:'bold'}}>Wheel Straightening</h3>
                        <p className="text-start  "style={{fontSize:'20px',fontWeight:'400'}}>
                            We use state-of-the-art technology to fix bent and damaged alloy wheels, ensuring your ride is smooth and safe.  
                            Our expert technicians utilize precision equipment to restore wheel balance, eliminate vibrations, and enhance overall driving performance.  
                            Whether your wheels have been affected by potholes, curb impacts, or road hazards, our process ensures a perfect alignment without compromising structural integrity.  
                            Trust us to extend the lifespan of your wheels while improving vehicle stability and fuel efficiency.
                        </p>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center position-relative">
                    
                    <div 
  className="col-md-6 d-flex justify-content-center position-relative" 
  onClick={() => setIsBefore(!isBefore)} 
  style={{ cursor: 'pointer' }}
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
      
      pointerEvents: 'none' // Allow clicks to propagate to the parent
    }}
  >
    {isBefore ? "click for After rusult" : "click for Before rusult"}
  </div>
</div>


</div>

                </div>
                <h2 className="mb-4 mb-md-5" style={{fontSize:'46px',fontWeight:'bold'}}>Brands we work with</h2>
                {/* Centered Images */}
                <div className="row justify-content-center align-items-center text-center px-3 px-md-5">
                    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
                        <img src={au} alt="Audi" className="wheel-img img-fluid" style={{ width: "150px", height: "150px" }} />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
                        <img src={ja} alt="Jaguar" className="wheel-img img-fluid" style={{ width: "150px", height: "150px" }} />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
                        <img src={mb} alt="Mercedes Benz" className="wheel-img img-fluid" style={{ width: "150px", height: "150px" }} />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
                        <img src={bm} alt="BMW" className="wheel-img img-fluid" style={{ width: "150px", height: "150px" }} />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
                        <img src={be} alt="Bentley" className="wheel-img img-fluid" style={{ width: "150px", height: "150px" }} />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Wheel;