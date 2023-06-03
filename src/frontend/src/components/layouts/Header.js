import React, {useState} from 'react';
import { Container, Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import Logo from '../img/logo.png'

function Header(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                <Button variant="dark" onClick={handleShow}> Sobre </Button>
                            </Nav>
                            <Navbar.Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Sobre mim e o site!</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                Some text as placeholder. In real life you can have the elements you
                                have chosen. Like, text, images, lists, etc.
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
    else{
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
                            <Nav>
                                <Button variant="dark" onClick={handleShow}> Sobre </Button>
                            </Nav>
                            <Navbar.Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Sobre mim e o site!</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                Some text as placeholder. In real life you can have the elements you
                                have chosen. Like, text, images, lists, etc.
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default Header