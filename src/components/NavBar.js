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
      <Navbar expand="md" className={`flex justify-center w-full ${scrolled ? "scrolled" : ""}`}>
        <Container fluid className="d-flex justify-content-around align-items-center">
      
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-around align-items-center flex-wrap w-100">
            <Nav className="d-flex justify-content-around align-items-center flex-wrap w-100">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              
              <div class="d-flex justify-content-center">
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
              </div>
              
              <div class="d-flex justify-content-center">
                <Nav.Link href="https://github.com/jzhu0717" target="_blank" rel="noopener noreferrer" className="navbar-link">
                  <img src={gitub} alt="GitHub" style={{ width: '18px', height: '18px' }} />
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/joshua-zhu-82bb601b4/" target="_blank" rel="noopener noreferrer" className="navbar-link">
                  <img src={linkdn} alt="LinkedIn" style={{ width: '18px', height: '18px' }} />
                </Nav.Link>
              </div>
              
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </Router>
  )
}
