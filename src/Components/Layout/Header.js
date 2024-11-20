import React, { useEffect, useState } from "react";

// logo
import paisabazaarLogo from "../../Assets/paisabazaarLogo.svg";

const WrapperStyle = {
  display: "block",
  position: "fixed",
  width: "100%",
  zIndex: "999",
};

const Header = () => {
  const [activeStyle, setActiveStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setActiveStyle({
          boxShadow: "0 8px 24px 0 rgba(23, 50, 101, .3)",
        });
      } else {
        setActiveStyle({});
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ ...WrapperStyle, ...activeStyle }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div>
            <img
              style={{ marginLeft: "75px" }}
              src={paisabazaarLogo}
              alt=""
              width="154px"
              height=""
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul style={{ paddingLeft: "10%" }} className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  All Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Learn & Resource
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/"
                  tabindex="-1"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
