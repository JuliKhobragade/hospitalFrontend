import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>
              Hospital Management System
              <br />
              Country, Postal Code
              <br />
              Phone: 911-777-555
              <br />
              Email: hospitalmanagement@gmail.com
            </p>
          </div>
          <div className="col-md-6">
            <h4>Social</h4>
            <p>
              Facebook
              <br />
              Twitter
              <br />
              LinkedIn
              <br />
              Youtube
              <br />
              Github
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
