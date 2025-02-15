import React, { useRef, useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
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
import Footer from './Footer';
import OurMotive from './OurMotive';
import PickAndDrop from './PickAndDrop';
import UseScrollToSection from './UseScrollToSection';
import Info from './Info';
 import l1 from './images/l1.png';
 import l2 from './images/l2.png';
 import l3 from './images/l3.png';
 import l4 from './images/l4.png';
 import lan from './images/lan.jpg';

const LandingPage = () => {

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
    const infRef = useRef(null);

    const scrollToSection = (ref) => {
        
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileNavbar(); // Close navbar when navigating
    };

    return (
        <div className="landing-page" id='l'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
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
                                <button className="nav-link" onClick={() => scrollToSection(homeRef)}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(aboutRef)}>About</button>
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
                                    <Link className="dropdown-item" to="/ti" onClick={closeMobileNavbar}>Tyre Sales</Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(moRef)}>Our Motive</button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(teamRef)}>Our Team</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(piRef)}>Picup</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(infRef)}>info</button>
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

            <section className="hero-section text-center text-lg-start hero-background" style={{color:"#ffffff"}} id="l">
  <div className="container d-flex flex-column flex-lg-row align-items-center py-5">
    {/* Content */}
    <div className="hero-text me-lg-5 text-center text-lg-start">
      <h1 className="fw-bold">Revive Your Ride – Premium Refurbished Alloy Wheels</h1>
      <p className="text-muted">
        Transform your wheels with expertly refurbished alloy options that offer both style and performance.
        Experience like-new looks and enhanced driving dynamics, all at a fraction of the cost of new wheels.
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
        <a href="/resume.pdf" download="Alloy-Wheels-Brochure.pdf" className="btn btn-primary me-sm-3 my-2">
          Download Brochure
        </a>
        <a href="https://wa.me/8980662985" target="_blank" rel="noopener noreferrer" className="btn btn-success my-2">
          WhatsApp Us
        </a>
      </div>
    </div>

    <div className="youtube-video mt-4 col-lg-6">
    <h3 className="text-center">Watch Our Alloy Wheel Transformation</h3>
    <iframe
      width="100%"
      height="415"
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      title="Alloy Wheel Transformation"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  </div>
</section>



            
            <section id='ab' ref={aboutRef}><AboutUs /></section>
            <section id='s' ref={servicesRef}><ServicesPage /></section>
            <section id='om' ref={moRef}><OurMotive /></section>
            <section id='ot' ref={teamRef}><OurTeam /></section>
            <section id='p' ref={piRef}><PickAndDrop /></section>
            <section id='f' ref={contactRef}><Form /></section>
            <section id='f' ref={infRef}><Info /></section>
            <Footer />
        </div>
    );
};

export default LandingPage;

