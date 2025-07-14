import { Container, Row, Col, Tab} from "react-bootstrap";
import { Card } from "./SkillCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import exp1 from "../assets/img/exp1.jpg";
import pythoN from "../assets/img/python.png";

export const Skills = () => {
    const skills = [
      {
        title: "Python",
        description: "desc",
        imgUrl: pythoN,
      },
      {
        title: "Java",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "C",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "OCaml",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "Rust",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "JavaScript",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "C++",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "C#",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "HTML",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "CSS",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "SQL",
        description: "skill2",
        imgUrl: exp1,
      },
      {
        title: "AWS",
        description: "skill2",
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
                    <h2>Skills</h2>
                    <p>Skills and Technologies that I am familar with!</p>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Row className="g-4">
                            {
                                skills.map((exp, index) => {
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
        </section>
  )
}