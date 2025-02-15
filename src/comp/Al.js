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
import OurMotive from '../OurMotive';
import PickAndDrop from '../PickAndDrop';


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

import UseScrollToSection from '../UseScrollToSection';



const Al = () =>  {

    UseScrollToSection();

    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [navbarCollapsed, setNavbarCollapsed] = useState(true); // Track navbar state

   

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
    const moRef = useRef(null);
    const teamRef = useRef(null);
    const piRef = useRef(null);
    const contactRef = useRef(null);

    const [isBefore, setIsBefore] = useState(true);

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

            <div className="wheel-alignment-section container-fluid py-5" id='aa' style={{ backgroundColor: '#fff5ee', color: '#000000' }}>
    <h2 className="text-center mb-5" style={{ fontSize: '46px', fontWeight: 'bold' }}>Wheel Alignment</h2>

    {/* Section 1 - Before & After Comparison */}
    <div className="row justify-content-center align-items-center mb-5 px-3 px-md-5">
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
                <div className="col-md-6 text-left">
  <h3 className="mb-3" style={{ fontSize: '46px', fontWeight: 'bold' }}>Before & After Alignment</h3>
  <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
    Click the image to see the difference proper wheel alignment can make. We adjust angles and ensure optimal performance for a smoother, safer driving experience. Proper alignment not only enhances your car's handling but also helps reduce overall wear and tear.
  </p>
  <ul style={{ fontSize: '20px', fontWeight: 'bold' }}>
    <li>Eliminate uneven tire wear and improve longevity, saving on replacement costs</li>
    <li>Enhance steering accuracy and reduce pulling or drifting to one side</li>
    <li>Increase overall driving comfort by ensuring smoother, more consistent rides</li>
    <li>Maximize fuel efficiency by reducing unnecessary drag caused by misalignment</li>
    <li>Prevent premature wear on suspension components, extending their lifespan</li>
    <li>Maintain manufacturer-recommended settings for safety and performance</li>
  </ul>
  <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
    Regular wheel alignment is essential for keeping your vehicle in top condition. Whether you've hit a pothole, noticed uneven tire wear, or experienced changes in steering response, our alignment services ensure your vehicle drives as it should. Trust us for accurate, computerized alignment adjustments tailored to your vehicle's specifications.
  </p>
</div>

    </div>


{/* Section 2 - Brand Logos */}
<h3 className="text-center mb-4" style={{ fontSize: '46px', fontWeight: 'bold' }}>Brands We Align</h3>
<div className="row justify-content-center px-3 px-md-5">
    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
        <img src={au} alt="Audi" className="wheel-alignment-img img-fluid" />
    </div>
    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
        <img src={ja} alt="Jaguar" className="wheel-alignment-img img-fluid" />
    </div>
    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
        <img src={mb} alt="Mercedes Benz" className="wheel-alignment-img img-fluid" />
    </div>
    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
        <img src={bm} alt="BMW" className="wheel-alignment-img img-fluid" />
    </div>
    <div className="col-lg-2 col-md-4 col-6 mb-4 d-flex justify-content-center">
        <img src={be} alt="Bentley" className="wheel-alignment-img img-fluid" />
    </div>
</div>

{/* Process Overview */}
<div className="wheel-alignment-process-overview my-5 text-center p-5">
    <h3 style={{ fontSize: '46px', fontWeight: 'bold' }}>Our Wheel Alignment Process</h3>
    <p style={{ fontSize: '20px', fontWeight: 'bold' }} className="text-muted">
        Our wheel alignment process ensures optimal performance, safety, and longevity for your vehicle's tires. Every step is handled with precision to meet our high standards.
    </p>

    <div className="wheel-alignment-process-steps row mt-5">
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaSearch className="process-icon mb-3" style={{ color: "#e67e22", fontSize: "50px" }} />
                <h4 className="process-title">Step 1: Inspection</h4>
                <p>Thorough assessment of tire condition, wear patterns, and existing alignment settings.</p>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaSoap className="process-icon mb-3" style={{ color: "#1abc9c", fontSize: "50px" }} />
                <h4 className="process-title">Step 2: Cleaning & Prep</h4>
                <p>Clean and prepare tires for alignment by removing dirt and debris for accurate calibration.</p>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaTools className="process-icon mb-3" style={{ color: "#3498db", fontSize: "50px" }} />
                <h4 className="process-title">Step 3: Calibration</h4>
                <p>Utilize advanced alignment tools to adjust the angle and balance for precise alignment.</p>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaPaintBrush className="process-icon mb-3" style={{ color: "#9b59b6", fontSize: "50px" }} />
                <h4 className="process-title">Step 4: Fine Tuning</h4>
                <p>Fine-tune alignment settings to meet manufacturer specifications and driving preferences.</p>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="process-step text-center">
                <FaCheckCircle className="process-icon mb-3" style={{ color: "#2ecc71", fontSize: "50px" }} />
                <h4 className="process-title">Step 5: Final Check</h4>
                <p>Conduct a final test drive and inspection to ensure precise alignment and optimal performance.</p>
            </div>
        </div>
    </div>
</div>
</div> 
            <Footer />
        </div>

       
    );
};
export default Al;

