import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './About.css';
import aboutImage1 from './images/ie95id6g.png';
import aboutImage2 from './images/stzj44q1.png';


const About = () => {
    return (
        
        <div className="about">
        
    {/* Additional About Content */}
    <section className="about-content">
        <div className="container">
            <div className="row">
                <h2 className='a'>About Us</h2>
                <div className="col-md-6">
                    <img src={aboutImage2} alt="Our Mission" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <p>
                        Welcome to <strong>WheelCrafters</strong>, your trusted partner in premium alloy wheels! We are a dynamic startup dedicated to revolutionizing the automotive industry by offering both <strong>new</strong> and <strong>refurbished alloy wheels</strong> that combine style, durability, and performance. Whether you're looking to upgrade your vehicle's look or restore its wheels to their former glory, we’ve got you covered.
                    </p>
                    <p>
                        At WheelCrafters, we believe that every vehicle deserves to shine. That’s why we meticulously craft and refurbish alloy wheels to meet the highest standards of quality. Our team of experts uses cutting-edge technology and sustainable practices to ensure that every wheel we deliver is not only visually stunning but also built to last.
                    </p>
                    <p>
                        Our mission is simple: to provide our customers with <strong>affordable</strong>, <strong>eco-friendly</strong>, and <strong>high-performance</strong> alloy wheels that exceed expectations. Whether you're a car enthusiast, a professional racer, or someone who simply values quality, we’re here to help you find the perfect wheels for your ride.
                    </p>
                    <p>
                        Join us on this exciting journey as we redefine what it means to drive in style. Let’s roll together!
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>
    );
};

export default About;