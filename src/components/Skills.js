import { Container, Row, Col, Tab} from "react-bootstrap";
import { Card } from "./SkillCard";
import TrackVisibility from 'react-on-screen';
import pythoN from "../assets/img/python.png";
import jv from "../assets/img/java.png";
import c from "../assets/img/c.png";
import rust from "../assets/img/rust.png";
import js from "../assets/img/js.png";
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
        description: "Experienced in the Python language and its libraries for a variety of applications, including data analysis, computer vision, and web development.",
        imgUrl: pythoN,
      },
      {
        title: "Java",
        description: "Proficient at developing applications from scratch with Java, such as object-oriented programming and graphics.",
        imgUrl: jv,
      },
      {
        title: "C",
        description: "Proficient in C programming, with experience in systems programming and low-level development.",
        imgUrl: c,
      },
      {
        title: "C#",
        description: "Proficient in C# for developing Windows applications, games, and web services.",
        imgUrl: csh,
      },
      {
        title: "Rust",
        description: "Skilled at using Rust to program safe and efficient software.",
        imgUrl: rust,
      },
      {
        title: "OCaml",
        description: "Experienced in functional programming with OCaml.",
        imgUrl: ocaml,
      },
      {
        title: "JavaScript",
        description: "Proficient in building web applications with JavaScript.",
        imgUrl: js,
      },
      {
        title: "React",
        description: "Skilled in building web applications with React.",
        imgUrl: react,
      },
      {
        title: "Django",
        description: "Skilled in building web applications with Django.",
        imgUrl: dj,
      },
      {
        title: "HTML/CSS",
        description: "Able to create visually appealing and responsive front end using HTML and CSS.",
        imgUrl: htmlcss,
      },
      {
        title: "SQL",
        description: "Experienced in SQL for database management and data manipulation.",
        imgUrl: sql,
      },
      {
        title: "AWS",
        description: "Skilled in using AWS services for cloud deployment, hosting, storage, and more.",
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