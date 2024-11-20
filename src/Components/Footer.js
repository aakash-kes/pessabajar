import React from "react";
import "../Components/Layout/style.css";

const Footer = () => {
  return (
    <>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>
            CIN No. U74900HR2011PTC044581 © Copyright 2014-2024
            <strong> Pessabajar.com</strong>. All Rights Reserved.
          </p>
        </div>
        <div className="footer-right">
          <span role="img" aria-label="Indian Flag">🇮🇳</span>
          <p>
            Built with Love <br /> Made in India
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
