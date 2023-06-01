import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Logo from '../img/logo.png'

function Header(){
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} width="50" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Button variant="dark" href='/' size="lg">Home</Button>
                        </Nav>
                        <Nav>
                            <Button variant="dark" href='/curriculo' size="lg">Currículo</Button>
                            <Button variant="dark" href='/contato' size="lg">Contato</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header