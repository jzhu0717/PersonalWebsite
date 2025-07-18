import { Container, Row, Col, Tab} from "react-bootstrap";
import { Card } from "./Card";
import exp1 from "../assets/img/exp1.jpg";
import TrackVisibility from 'react-on-screen';

export const Experience = () => {

  const experience = [
    {
      title: "Software Developer Intern @ USDA",
      description: "Worked as a Software Developer Intern at USDA-APHIS from May 2024 to August 2024, developing a web application for streamlining the organization of plant virus testing.",
      imgUrl: exp1,
    },
    {
      title: "Computer Science B.S. @ University of Maryland, College Park",
      description: "Currently an undergraduate student in Computer Science at the University of Maryland with a planned graduation in 2027.",
      imgUrl: exp1,
    },
    {
      title: "IB Diploma @ Urbana High School, Maryland",
      description: "Graduated May 2023 with an International Baccalaureate (IB) Diploma from Urbana High School.",
      imgUrl: exp1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <p>A little bit about my professional background and experience!</p>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Row className="g-4">
                        {
                            experience.map((exp, index) => {
                            return (
                                <Card key={index}
                                {...exp}/>
                            )})
                        }
                    </Row>
                </Tab.Content>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}