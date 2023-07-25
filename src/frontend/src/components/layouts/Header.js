import React, {useState} from 'react';
import { Container, Navbar, Nav, Button, Modal } from 'react-bootstrap';
import Logo from '../img/logo.png'

function Header(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(window.location.pathname === '/'){
        return (
            <header>
                <Navbar collapseOnSelect id="navbar-example2" expand="lg" bg="light" data-bs-theme="light">
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
                                <Button variant="light" href="#conteudo">Conteúdo</Button>
                                <Button variant="light" href="#curriculo">Currículo</Button>
                                <Button variant="light" href="#contato">Contato</Button>
                                <Button variant="light" onClick={handleShow}> Sobre </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Modal show={show} onHide={handleClose} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Bem-vindo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Olá!</p>
                        <p>Meu nome é Otavio, tenho 25 anos.</p>
                        <p>Venho por meio deste site divulgar um pouco do meu trabalho e dos meus conhecimentos em algumas áreas de TI.</p>
                        <p>Sou desenvolvedor FullStack em Nodejs e espero que você goste do conteúdo aqui apresentado, e caso tenha uma ideia de projeto ou sugestões para melhorias, ambas são bem-vindas.</p>
                        <p>Obrigado!</p>
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
        return(
            <header>
                <Navbar collapseOnSelect id="navbar-example2" expand="lg" bg="light" data-bs-theme="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Button variant="light" href="/">Home</Button>
                                <Button variant="light" onClick={handleShow}> Sobre </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Modal show={show} onHide={handleClose} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Bem-vindo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Olá!</p>
                        <p>Meu nome é Otavio, tenho 25 anos.</p>
                        <p>Venho por meio deste site divulgar um pouco do meu trabalho e dos meus conhecimentos em algumas áreas de TI.</p>
                        <p>Sou desenvolvedor FullStack em Nodejs e espero que você goste do conteúdo aqui apresentado, e caso tenha uma ideia de projeto ou sugestões para melhorias, ambas são bem-vindas.</p>
                        <p>Obrigado!</p>
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