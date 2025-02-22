import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PickAndDrop.css";

const PickAndDrop = () => {
  return (
    <div className="pick-drop-container text-white text-center"  id="p">
      <div className="container py-5">
        <h2 className="mb-4">Pick and Drop Facility Available On Request</h2>

        <div className="row" >
          <div className="col-6 col-md-3 mb-4">
            <i className="fas fa-car pick-drop-icon"></i>
            <h5 className="mt-2">Easy Pick Up</h5>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <i className="fas fa-shipping-fast pick-drop-icon"></i>
            <h5 className="mt-2">Fast Delivery</h5>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <i className="fas fa-truck pick-drop-icon"></i>
            <h5 className="mt-2">Hassle Free Pick Up</h5>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <i className="fas fa-handshake pick-drop-icon"></i>
            <h5 className="mt-2">Flexible Drop Facility</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickAndDrop;
