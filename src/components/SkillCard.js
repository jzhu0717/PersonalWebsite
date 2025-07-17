import { Col } from "react-bootstrap";
import React from "react";


export const Card = ({ title, description, imgUrl }) => {
  return (
    <Col xs={4} sm={4} md={3} lg={3} className="proj-col">
      <div className="skill-imgbx">
        <img src={imgUrl} alt="img"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
            {line}
            <br />
            </React.Fragment>
            ))}
          </span>
        </div>
      </div>
    </Col>
  )
}