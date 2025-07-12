import { Col } from "react-bootstrap";

// lowkey this is a copy of Card but with a link 
export const ProjCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col xs={12} sm={6} md={6} lg={6} className="proj-col">
      <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="img" />
          <div className="proj-overlay">
            <span>View Project</span>
          </div>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>
              {description.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </div>
        </div>
      </a>
    </Col>
  );
};
