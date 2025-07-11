import { Container, Row, Col, Tab} from "react-bootstrap";
import { Card } from "./Card";
import projImg1 from "../assets/img/p3img.gif";
import projImg2 from "../assets/img/p3img.gif";
import projImg3 from "../assets/img/p3img.gif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Project name",
      description: "description",
      imgUrl: projImg1,
    },
    {
      title: "Proj name",
      description: "description",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
                <h2>Projects</h2>
                <p>Personal projects I have worked on and developed!</p>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Row className="g-4">
                        {
                            projects.map((project, index) => {
                            return (
                                <Card key={index}
                                {...project}/>
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