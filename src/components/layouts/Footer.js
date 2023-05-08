import React from 'react';
import {BsLinkedin, BsInstagram, BsWhatsapp, BsGithub, BsFacebook} from 'react-icons/bs'

function Footer(){
    return(
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <a id='instagram' href='https://www.instagram.com/x.otavio.x/'><BsInstagram size={30}/></a>
                </li>
                <li class="nav-item">
                    <a id='linkedin' href='https://www.linkedin.com/in/ot%C3%A1vio-souza-827516183/'><BsLinkedin size={30}/></a>
                </li>
                <li class="nav-item">
                    <a id='github' href='https://github.com/otavio25'><BsGithub size={30}/></a>
                </li>
                <li class="nav-item">
                    <a id='facebook' href='https://www.facebook.com/profile.php?id=100022442240678'><BsFacebook size={30}/></a>
                </li>
                <li class="nav-item">
                    <a id='whastapp' href='https://wa.me/5561999055506'><BsWhatsapp size={30}/></a>
                </li>
            </ul>
            <p class="text-center text-muted">© 2022 Company, Inc</p>
        </footer>
    )
}

export default Footer