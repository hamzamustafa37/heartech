import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../componentsStyles/city.css";
const Topcities = () => {
  const cityArray = [
    {
      image: "/assets/califor.png",
      name: "California",
    },
    {
      image: "/assets/newyork.png",
      name: "NewYork",
    },
    {
      image: "/assets/los.png",
      name: "Los Angeles",
    },

    {
      image: "/assets/chicago.png",
      name: "Chicago",
    },
  ];
  return (
    <div className="mt-5">
      <div className="text-center text-primary">
        <p style={{ fontSize: "22px", fontWeight: "bolder" }}>Top Cities</p>
      </div>
      <div className="text-center">
        <p
          className="Dark link"
          style={{ fontSize: "33px", fontWeight: "bolder" }}
        >
          Top Partners
        </p>
      </div>
      <Row style={{ margin: "0px" }} className="custom-row">
        {cityArray.map((item, key) => {
          return (
            <Col className="mb-5" sm={6} md={3} lg={3}>
              <div className="shade">
                <div key={key} className="city-image">
                  <img src={item?.image} style={{ maxWidth: "100%" }} />
                </div>
                <div className="city-name">
                  <p>{item?.name}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <img src="/assets/logos.png" style={{ maxWidth: "50%" }} />
      </div>
    </div>
  );
};

export default Topcities;
