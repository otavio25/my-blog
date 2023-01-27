import React from 'react';
import { FcDownRight} from "react-icons/fc";
import {BsLinkedin, BsInstagram, BsWhatsapp, BsGithub} from 'react-icons/bs'
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
                    <p><BsInstagram/> x.otavio.x </p>
                    <p><BsLinkedin/> Otávio Souza</p>
                    <p><BsGithub/> otavio25 </p>
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