import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjCard } from "./ProjCard";
import employsim from "../assets/img/proj1logo.png";
import projImg2 from "../assets/img/p3img.gif";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Object Detector / Profiler",
      description: "WORK IN PROGRESS! :)\n\nBuilt with Python",
      imgUrl: projImg2,
      link: "https://github.com/jzhu0717/brainrotCamera"
    },
    {
      title: "Employee Storage Manager",
      description: "Created a program to oversee employees and their data in a hypothetical (or not!) management system.\n\nBuilt with Node.js, MySQL",
      imgUrl: employsim,
      link: "https://github.com/jzhu0717/EmployeeManagmentSim"
    },
    // {
    //   title: "proje3",
    //   description: "description",
    //   imgUrl: projImg3,
    // },

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
                                <ProjCard key={index}
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