import React from "react";
import "../../componentsStyles/footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="text-center mb-3">
          <img src="/assets/logo.js" style={{ height: "50px" }} />
        </div>
        <div className="row">
          <div className="col-md-3 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item ">
                <span className="footer-title text-dark">Top Cities</span>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary mt-2" href="#">
                  Lorem ipsum dolor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Lorem ipsum dolor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Lorem ipsum dolor
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title text-dark">Top Cities</span>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary mt-2" href="#">
                  Lorem ipsum dolor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Lorem ipsum dolor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Lorem ipsum dolor
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title text-dark">Top Cities </span>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link text-secondary mt-2" href="#">
                  Lorem ipsum dolor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary " href="#">
                  Lorem ipsum dolor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Lorem ipsum dolor
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title text-dark">Address </span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary mt-2"
                  href="#"
                  style={{ lineHeight: "20px" }}
                >
                  Are you a top doctor or health service? List your practice on
                  Zocdoc Learn about Zocdoc for Health Systems Become an API
                  partner
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="text-secondary">
            © 2021 Zocdoc, Inc. Terms | Privacy | Do not sell my personal
            information
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
