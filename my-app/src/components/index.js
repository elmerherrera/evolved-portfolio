import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopOfPage = () => {
    return(
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand>Elmer Herrera</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Aboutme">About Me</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <Nav.Link href="/Projects">Projects</Nav.Link>
                        <Nav.Link href="/Resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default TopOfPage;