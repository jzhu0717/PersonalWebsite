
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm(
      'SERVICEKEY',
      'TEMPKEY',
      e.target, // form element
      'PERSONALKEY'
    ).then((result) => {
      console.log(result.text);
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormDetails(formInitialDetails);
    }, (error) => {
      console.error(error.text);
      setStatus({ success: false, message: "Something went wrong. Try again later." });
    }).finally(() => {
      setButtonText("Send");
    });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact!</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" value={formDetails.firstName} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
          {/* resume section */}
          <Col size={12} md={6}>
            <h2>Resume</h2>
            <object data="/jzhuResume.pdf" type="application/pdf" width="100%" height="600px">
              <p>
                Your browser doesn't support PDFs.
              </p>
            </object>
            <a href="/jzhuResume.pdf" download className="btn btn-primary" style={{ marginTop: "1rem" }}>Download</a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
