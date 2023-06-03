import React from 'react';
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import Logo from '../img/logo.png'

function Header(){
    if(window.location.pathname === '/'){
        return (
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Button variant="dark" href="#home">Home</Button>
                            </Nav>
                            <Nav>
                                <Button variant="dark" href="#curriculo">Currículo</Button>
                                <Button variant="dark" href="#contato">Contato</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
    else{
        function handleDevops(){
            return <DevOps titulo={titulo}/>
        }

        return(
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Button variant="dark" href="/">Home</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default Header