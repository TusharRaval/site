import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurMotive.css";
import motiveImage from "./images/ala.jpeg"; // Example image, replace with your image

const OurMotive = () => {
  return (
    <div className="our-motive-page container-fluid p-5 py-5" id="om">
      <motion.h2
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        Our Motive
      </motion.h2>

      <div className="row align-items-center">
        {/* Left Image Section */}
        <motion.div
          className="col-md-6 mb-4 mb-md-0"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
        >
          <img
            src={motiveImage}
            alt="Our Motive"
            className="img-fluid rounded motive-image"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          className="col-md-6"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
        >
          <h3>Why We Do What We Do</h3>
          <p>
            At <strong>The Wheel Genius Refurbished Pvt Ltd</strong>, our
            passion is driven by the desire to provide the best alloy wheel
            solutions in the industry. Our goal is to ensure every customer
            leaves with wheels that not only perform optimally but also enhance
            their vehicle’s aesthetic appeal.
          </p>
          <p>
            Our commitment is to offer unparalleled craftsmanship and customer
            service, helping you drive with confidence and style.
          </p>
        </motion.div>
      </div>

      {/* Key Highlights Section */}
      <div className="row text-center mt-5">
        <motion.div
          className="col-md-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="motive-highlight p-4 rounded shadow-sm" whileHover={{ scale: 1.05 }}>
            <i className="fas fa-award motive-icon"></i>
            <h4 className="mt-3">Quality Craftsmanship</h4>
            <p className="text-muted">
              Each wheel is treated with precision and care to meet the highest
              standards.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="col-md-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="motive-highlight p-4 rounded shadow-sm" whileHover={{ scale: 1.05 }}>
            <i className="fas fa-smile motive-icon"></i>
            <h4 className="mt-3">Customer First</h4>
            <p className="text-muted">
              Your satisfaction is our top priority. We go the extra mile for
              every customer.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="col-md-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="motive-highlight p-4 rounded shadow-sm" whileHover={{ scale: 1.05 }}>
            <i className="fas fa-leaf motive-icon"></i>
            <h4 className="mt-3">Eco-Friendly Solutions</h4>
            <p className="text-muted">
              We use sustainable practices to reduce waste and protect the
              environment.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMotive;
