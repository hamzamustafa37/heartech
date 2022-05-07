import React from "react";
import { Col, Row } from "reactstrap";

const AboutUs = () => {
  return (
    <>
      <Row className="about-sec mt-3 ">
        <Col md="6" lg="6" sm="12" xs="12">
          <div className="about-us-img">
            <img
              src="./assets/img/aboutus.png"
              alt="aboutUs-img"
              height="400"
              width="100%"
            />
            <div className="d-flex flex-row justify-content-center">
              <div className=" right-btn shaddow-btn">
                <h3>5k</h3>
                <span>customer</span>
              </div>
              <div className=" mid-btn shaddow-btn">
                <h3>60+</h3>
                <span>Verified Staff</span>
              </div>
              <div className=" left-btn shaddow-btn">
                <h3>3</h3>
                <span>Clinics</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" lg="6" sm="12" xs="12">
          <div className="heading">
            <div className="title">
              <p className="abt-txt">About Us</p>
              <p className="bold-text">Lorem ipsum dolor sit amet, constent</p>
              <p className="pera">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est donec congue consequat iaculis erat. Nibh risus ipsum platea
                duis gravida maecenas sed.
              </p>
              <p className="mt-3 pera">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est donec congue consequat iaculis erat. Nibh risus ipsum platea
                duis gravida maecenas sed. Libero amet tincidunt etiam gravida
                id. Ac phasellus iaculis lacus purus, volutpat at erat.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default AboutUs;
