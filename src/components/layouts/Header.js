import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../img/logo.png'

function Header(){
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/curriculo">Currículo</Nav.Link>
                            <Nav.Link href="/sobre">Sobre</Nav.Link>
                            <Nav.Link href="/contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header