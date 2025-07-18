
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headpic from "../assets/img/headpic.jpg";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = [ ". . ." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Joshua Zhu</span>
                <h1>{`CS @ University of Maryland`} 
                    <br />
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer" ]'><span className="wrap">{text}</span></span>
                </h1>
                  <br />
                  <p>Hi! I'm Josh Zhu. I am a 3rd year undergraduate B.S. Computer Science student at the University of Maryland. 
                    <br />
                    <br />
                    I am passionate about computer science, especially how it intersects with the real world, such as with computer vision, machine learning, and data science.
                  </p>
              </div>}
            </TrackVisibility>
          </Col>
        
          <Col xs={12} md={6} xl={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={headpic} alt="Headshot" className="banner-image" />
              </div>}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}
