import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import CountUp from "react-countup";
import { motion } from "framer-motion"; // Importing Framer Motion
import oip from './images/cco5.jpeg';
import w from './images/o.jpg';
import LandingPage from "./LandingPage";

const AboutUs = () => {
  return (
    
    <div className="about-us container py-5" id="ab">
    
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        About Us
      </motion.h2>

      {/* Who We Are Section */}
      <div className="row align-items-center mb-5" style={{ textAlign: "left" }}>
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <h3>Who We Are</h3>
          <p>
            Whether you’re seeking alloy wheel restoration, you can count on our
            expert advice and superior craftsmanship. If this sounds as exciting to
            you as it does to us, it’s time to bring your vehicle to our alloy wheel
            service center in Ahmedabad, located in Naroda GIDC. Only THE Wheel
            Genius Refurbished Pvt Ltd deliver exceptional customer care,
            high-quality finishes, and long-lasting durability—typically with a
            48-hour turnaround time—all at a fraction of the cost of replacing your
            wheels.
          </p>
        </motion.div>
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img src={oip} alt="Refurbishing Wheels" className="img-fluid rounded" />
        </motion.div>
      </div>

      {/* What We Do Section */}
      <div className="row align-items-center mb-5 flex-md-row-reverse" style={{ textAlign: "left" }}>
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <h3>What We Do</h3>
          <p>We offer complete alloy wheel refurbishment, including:</p>
          <ul>
            <li>Wheel Straightening</li>
            <li>Cosmetic Repairs</li>
            <li>Full Alloy Refurbishment</li>
            <li>Diamond Cutting Finishes</li>
            <li>Custom Wheel Personalization</li>
          </ul>
        </motion.div>
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <img src={w} alt="Refurbishment Process" className="img-fluid rounded" />
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="row text-center">
        <motion.div
          className="col-md-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <h3>
            <CountUp start={0} end={5000} duration={10} />+
          </h3>
          <p>Happy Customers</p>
        </motion.div>
        <motion.div
          className="col-md-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <h3>
            <CountUp start={0} end={6} duration={8} />+
          </h3>
          <p>Years of Experience</p>
        </motion.div>
        <motion.div
          className="col-md-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <h3>
            <CountUp start={0} end={99} duration={8} />%
          </h3>
          <p>Customer Satisfaction</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
