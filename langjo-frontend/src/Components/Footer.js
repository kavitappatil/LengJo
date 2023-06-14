import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="d-flex flex-column flex-md-row p-4 gap-5 py-md-5 align-items-center justify-content-center">
      <div
        className="position-static d-flex flex-column flex-lg-row align-items-stretch
        justify-content-start p-3 rounded-3 shadow-lg"
      >
        <nav className="">
          <ul className="list-unstyled d-flex flex-column">
            <li>
              <div>
                <p className="contact">CONTACT US</p>
                <small className="small">
                  If you have a question about the Learn English Network, <br />{" "}
                  fill out our Contact Form, and we will get back to you asap.
                </small>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="d-flex flex-column flex-md-row p-4 gap-5 py-md-5 align-items-center justify-content-center">
        &nbsp;
      </div>
      <div
        className="position-static d-flex flex-column flex-lg-row align-items-stretch
        justify-content-start p-3 rounded-3 shadow-lg"
      >
        <label className="d-flex flex-column">
          <div class="col">
            <div className="logo">LangJo</div>
            &nbsp; &nbsp;
            <div>
              <div className="col item social">
                <a href="#">
                  <i className="bi bi-facebook icon-white icon-large"></i>
                </a>
                &nbsp; &nbsp;&nbsp; &nbsp;
                <a href="#">
                  <i className="bi bi-twitter icon-white icon-large"></i>
                </a>
                &nbsp; &nbsp;&nbsp; &nbsp;
                <a href="#">
                  <i className="bi bi-linkedin icon-white icon-large"></i>
                </a>
                &nbsp; &nbsp;&nbsp; &nbsp;
                <a href="#">
                  <i className="bi bi-instagram icon-white icon-large"></i>
                </a>
              </div>
              &nbsp; &nbsp;
            </div>
            <div className="py-3">
              <div className="cookie">Privacy Policy | Cookie Notice</div>{" "}
              <br />
              ©Copyright 2023 | 2024
              <br /> All Right Reserved
            </div>
          </div>
        </label>
      </div>
    </div>
    {/* </div>
      </div> */}
    {/* </div> */}
  </footer>
);

export default Footer;
