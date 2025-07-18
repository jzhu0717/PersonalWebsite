import { Container, Row, Col, Tab} from "react-bootstrap";
import { Card } from "./SkillCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import pythoN from "../assets/img/python.png";
import jv from "../assets/img/java.png";
import c from "../assets/img/c.png";
import rust from "../assets/img/rust.png";
import cpp from "../assets/img/cpp.png";
import csh from "../assets/img/csh.png";
import ocaml from "../assets/img/ocaml.png";
import react from "../assets/img/react.png";
import sql from "../assets/img/sql.png";
import dj from "../assets/img/dj.png";
import aws from "../assets/img/aws.png";
import htmlcss from "../assets/img/htmlcss.png";

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
        imgUrl: jv,
      },
      {
        title: "C",
        description: "skill2",
        imgUrl: c,
      },
      {
        title: "Rust",
        description: "skill2",
        imgUrl: rust,
      },
      {
        title: "C++",
        description: "skill2",
        imgUrl: cpp,
      },
      {
        title: "C#",
        description: "skill2",
        imgUrl: csh,
      },
      {
        title: "OCaml",
        description: "skill2",
        imgUrl: ocaml,
      },
      {
        title: "React",
        description: "skill2",
        imgUrl: react,
      },
      {
        title: "HTML/CSS",
        description: "skill2",
        imgUrl: htmlcss,
      },
      {
        title: "SQL",
        description: "skill2",
        imgUrl: sql,
      },
      {
        title: "Django",
        description: "skill2",
        imgUrl: dj,
      },
      {
        title: "AWS",
        description: "skill2",
        imgUrl: aws,
      },
    ];

  return (
     <section className="project" id="skills">
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