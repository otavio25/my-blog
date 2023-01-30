import React from 'react';
import { FcDownRight} from "react-icons/fc";
import {BsLinkedin, BsInstagram, BsWhatsapp, BsGithub, BsFacebook} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'

function Contato(){
    return(
        <div>
            <div className='div-h1-contato'>
                <h1 id='h1-contato'>Entre em Contato</h1>
            </div>
            <div className='container-contato'>
                <div className='div-social-contato'>
                    <p><FcDownRight/>Redes Sociais</p>
                    <a id='instagram' href='https://www.instagram.com/x.otavio.x/'><BsInstagram size={30}/></a>
                    <a id='linkedin' href='https://www.linkedin.com/in/ot%C3%A1vio-souza-827516183/'><BsLinkedin size={30}/></a>
                    <a id='github' href='https://github.com/otavio25'><BsGithub size={30}/></a>
                    <a id='facebook' href='https://www.facebook.com/profile.php?id=100022442240678'><BsFacebook size={30}/></a>
                </div>
                <div className='div-email-contato'>
                    <p><FcDownRight/>E-mail</p>
                    <p><CgMail/>oliveiraotavio2525@gmail.com</p>
                </div>
                <div className='div-telefone-contato'>
                    <p><FcDownRight/>Telefone</p>
                    <p><BsWhatsapp/> (61)999055506</p>
                </div>
            </div>
        </div>
    )
}

export default Contato