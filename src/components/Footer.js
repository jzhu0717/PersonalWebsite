import { Container, Row, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

// import logo from "../assets/img/logo.svg";
import gitub from "../assets/img/gitub.png";
import linkdn from "../assets/img/linkdn.png";
import gmail from "../assets/img/gmail.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <Nav.Link href="https://github.com/jzhu0717" target="_blank" rel="noopener noreferrer">
                    <img src={gitub} alt="GitHub" style={{ width: '18px', height: '18px' }} />
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/joshua-zhu-82bb601b4/" target="_blank" rel="noopener noreferrer">
                    <img src={linkdn} alt="LinkedIn" style={{ width: '18px', height: '18px' }} />
                </Nav.Link>
                <Nav.Link href="mailto:joshuazjzhu@gmail.com" >
                    <img src={gmail} alt="Gmail" style={{ width: '18px', height: '18px' }} />
                </Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}