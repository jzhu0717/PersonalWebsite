import { Col } from "react-bootstrap";
import React from "react";


export const Card = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={6} lg={6} className="proj-col">
      <div className="proj-imgbx">
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