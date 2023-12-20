import React, {useState} from 'react';
import { Container, Navbar, Nav, Button, Modal, Row, Col, Image } from 'react-bootstrap';
import Logo from '../img/logo.png'
import Me from '../img/me.jpg'
import './styles.css'

function Header(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(window.location.pathname == '/'){
        return (
            <header>
                <Navbar collapseOnSelect id="navbar-example2" expand="lg" bg="light" data-bs-theme="light" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={Logo} width="50" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Button variant="light" href="#home">Home</Button>
                            </Nav>
                            <Nav>
                                <Button variant="light" href="#conteudo">Projetos</Button>
                                <Button variant="light" href="#curriculo">Currículo</Button>
                                <Button variant="light" href="#contato">Contato</Button>
                                <Button variant="light" href="#memorando"> Memorando </Button>
                                <Button variant="light" onClick={handleShow}> Sobre </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    
                <Modal show={show} onHide={handleClose} centered size="lg" className='customOverlay'>
                    <Modal.Header closeButton>
                        <Modal.Title>Bem-vindo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={12} md={8}>
                                    <p>Olá!</p>
                                    <p>Meu nome é Otavio, tenho 25 anos.</p>
                                    <p>Venho por meio deste site divulgar um pouco do meu trabalho e dos meus conhecimentos em algumas áreas de TI.</p>
                                    <p>Sou desenvolvedor Full Stack e espero que você goste do conteúdo aqui apresentado. Se tiver alguma ideia de projeto, não hesite em entrar em contato comigo. Espero que você aprecie o que está sendo apresentado!</p>
                                    <p>Obrigado!</p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={Me} width={215} height={280} className='rounded-circle'/>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </header>
        )
    }
    else{
        return (
            <header>
                <Navbar collapseOnSelect id="navbar-example2" expand="lg" bg="light" data-bs-theme="light" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={Logo} width="50" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Button variant="light" href="/">Home</Button>
                            </Nav>
                            <Nav>
                                <Button variant="light" onClick={handleShow}> Sobre </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    
                <Modal show={show} onHide={handleClose} centered size="lg" className='customOverlay'>
                    <Modal.Header closeButton>
                        <Modal.Title>Bem-vindo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={12} md={8}>
                                    <p>Olá!</p>
                                    <p>Meu nome é Otavio, tenho 25 anos.</p>
                                    <p>Venho por meio deste site divulgar um pouco do meu trabalho e dos meus conhecimentos em algumas áreas de TI.</p>
                                    <p>Sou desenvolvedor Full Stack e espero que você goste do conteúdo aqui apresentado. Se tiver alguma ideia de projeto, não hesite em entrar em contato comigo. Espero que você aprecie o que está sendo apresentado!</p>
                                    <p>Obrigado!</p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={Me} width={215} height={280} className='rounded-circle'/>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </header>
        )
    }
}

export default Header