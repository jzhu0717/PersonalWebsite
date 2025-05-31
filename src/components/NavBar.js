import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import gitub from '../assets/img/gitub.png';
import linkdn from '../assets/img/linkdn.png';
import gmail from '../assets/img/gmail.svg';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // scroll event listener
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // when navbar link is clicked, highlight
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    // navbar look
    return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container fluid className="justify-content-center">
      
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              
              {/* embed resume later down on the page */}
              <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>

              <Nav.Link href="https://github.com/jzhu0717" target="_blank" rel="noopener noreferrer" className="navbar-link">
                <img src={gitub} alt="GitHub" style={{ width: '24px', height: '24px' }} onClick={'www.google.com'}/>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/joshua-zhu-82bb601b4/" target="_blank" rel="noopener noreferrer" className="navbar-link">
                <img src={linkdn} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
              </Nav.Link>
              <Nav.Link href="mailto:joshuazjzhu@gmail.com" className="navbar-link">
                <img src={gmail} alt="Gmail" style={{ width: '24px', height: '24px' }} />
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
