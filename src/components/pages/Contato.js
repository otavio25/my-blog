import React from 'react';
import { FcDownRight} from "react-icons/fc";
import {BsLinkedin, BsInstagram, BsWhatsapp, BsGithub, BsFacebook} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'
import { Container, ListGroup } from 'react-bootstrap';

function Contato(){
    return(
        <Container>
            <div className='div-h1-contato'>
                <h1 id='h1-contato'>Entre em Contato</h1>
            </div>
            <ListGroup id='lista-contato'>
                <ListGroup.Item>
                    <h2><FcDownRight/>Redes Sociais</h2>
                    <a id='instagram' href='https://www.instagram.com/x.otavio.x/'><BsInstagram size={30}/></a>
                    <a id='linkedin' href='https://www.linkedin.com/in/ot%C3%A1vio-souza-827516183/'><BsLinkedin size={30}/></a>
                    <a id='github' href='https://github.com/otavio25'><BsGithub size={30}/></a>
                    <a id='facebook' href='https://www.facebook.com/profile.php?id=100022442240678'><BsFacebook size={30}/></a>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2><FcDownRight/>E-mail</h2>
                    <p><CgMail/>oliveiraotavio2525@gmail.com</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2><FcDownRight/>Telefone</h2>
                    <p><BsWhatsapp/> (61)999055506</p>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default Contato