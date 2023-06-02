import React from 'react';
import {BsLinkedin, BsInstagram, BsWhatsapp, BsGithub, BsFacebook} from 'react-icons/bs'
import { Container } from 'react-bootstrap';

function Footer(){
    return(
        <footer class="py-3 my-4">
            <Container>
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item">
                        <a id='instagram' href='https://www.instagram.com/x.otavio.x/' target="_blank" rel="noopener noreferrer"><BsInstagram size={30}/></a>
                    </li>
                    <li class="nav-item">
                        <a id='linkedin' href='https://www.linkedin.com/in/ot%C3%A1vio-souza-827516183/' target="_blank" rel="noopener noreferrer"><BsLinkedin size={30}/></a>
                    </li>
                    <li class="nav-item">
                        <a id='github' href='https://github.com/otavio25' target="_blank" rel="noopener noreferrer"><BsGithub size={30}/></a>
                    </li>
                    <li class="nav-item">
                        <a id='facebook' href='https://www.facebook.com/profile.php?id=100022442240678' target="_blank" rel="noopener noreferrer"><BsFacebook size={30}/></a>
                    </li>
                    <li class="nav-item">
                        <a id='whastapp' href='https://wa.me/5561999055506' target="_blank" rel="noopener noreferrer"><BsWhatsapp size={30}/></a>
                    </li>
                </ul>
                <p class="text-center text-muted">© 2023 - Todos os Direitos Reservados</p>
            </Container>
        </footer>
    )
}

export default Footer