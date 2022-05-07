import React,{useEffect, useState} from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import DealsCard from "./DealsCard";
import {blogs} from "../DummyBlogs"
import "../../componentsStyles/card.css";
const Deals = () => {
  const [data, setData]=useState(blogs);
	let location = useLocation();
console.log(location)
  const cardArray = [
    {
      id:"1",
      image: "/assets/doctor.png",
      title: "Lorem ipsum dolor ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa ipsum, at quis.",
    },
    {
      id:'2',
      image: "/assets/teeth.png",
      title: "Lorem ipsum dolor ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa ipsum, at quis.",
    },
    {
      id:'3',
      image: "/assets/injection.png",
      title: "Lorem ipsum dolor ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa ipsum, at quis.",
    },
    {
      id:'4',
      image: "/assets/lab.png",
      title: "Lorem ipsum dolor ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa ipsum, at quis.",
    },
  ];
useEffect(()=>{
  if(location.pathname ==="/blog"){
    setData(blogs)
  }
  else{
    setData(cardArray)
  }
},[])

  return (

    <>
    { location.pathname === "/blog"? "" : (
    <div className="">
      <div className="text-center text-primary">
        <p style={{ fontSize: "22px", fontWeight: "bolder" }}>Deals</p>
      </div>
      <div className="text-center">
        <p
          className="Dark link"
          style={{ fontSize: "33px", fontWeight: "bolder" }}
        >
          Lorem ipsum dolor sit amet, constent
        </p>
      </div>
    </div>
    )
}
      <div className="card-container ">
        <Row style={{ margin: "0px" }} className="custom-row">
          {data.map((item, key) => {
            return (
              <Col className="mb-5">
                {" "}
                <DealsCard key={key} item={item} location={location} />
              </Col>
            );
          })}
          <div className="showMore d-flex justify-content-center">Show More <i className="bi bi-chevron-compact-right"></i></div>
        </Row>
      </div>
    </>
  );
};

export default Deals;
