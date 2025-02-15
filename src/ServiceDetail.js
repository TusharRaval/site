import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceDetail.css";

const serviceData = {
  "alloy-wheel-repair": {
    title: "Alloy Wheel Repair",
    description: "Repair your alloy wheels and restore their original condition.",
    imageBefore: "/images/alloy_before.jpg",
    imageAfter: "/images/alloy_after.jpg",
  },
  "custom-paint": {
    title: "Custom Paint",
    description: "Personalize your wheels with unique paint finishes.",
    imageBefore: "/images/custom_before.jpg",
    imageAfter: "/images/custom_after.jpg",
  },
  "powder-coating": {
    title: "Powder Coating",
    description: "Durable and high-quality powder coating for your wheels.",
    imageBefore: "/images/powder_before.jpg",
    imageAfter: "/images/powder_after.jpg",
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData[id];

  if (!service) {
    return <h2 className="text-center mt-5">Service Not Found</h2>;
  }

  return (
    <div className="service-detail container py-5">
      <h2 className="text-center mb-3">{service.title}</h2>
      <p className="text-center">{service.description}</p>

      <div className="text-center">
        <img src={service.imageBefore} alt="Before" className="before-after-img" />
        <img src={service.imageAfter} alt="After" className="before-after-img" />
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={() => navigate("/services")}>
          Back to Services
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
