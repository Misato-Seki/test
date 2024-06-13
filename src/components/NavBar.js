import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo_cat.svg';
import LinkedIn from '../assets/img/linkedin.svg';
import GitHub from '../assets/img/github.svg';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onClick = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onClick);
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', onClick);
    },[])
    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} className="d-inline-block align-top" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggle-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><img src={LinkedIn} alt="linkedin-logo" /></a>
                    <a href='#'><img src={GitHub} alt="github-logo" /></a>
                </div>
                <HashLink to='#connect'>
                  <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </HashLink>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export { NavBar };