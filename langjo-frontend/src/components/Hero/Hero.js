import React from "react";
import "./Hero.css";
import langJoH from "../Images/LangJO-02-01.png";

function Hero() {
  return (
    <section className="background ">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className=" col-sm-6 row img-fluid back-img">
          <img src={langJoH} alt="Sample" />
        </div>
        <div className="col-sm-6 row p-5">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Learn English online for free with LangJo
          </h1>
          <p className="lead">
            Get ready for real-world interactions in English with support from
            our online
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="button-bt rounded btn-lg px-4 me-md-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
