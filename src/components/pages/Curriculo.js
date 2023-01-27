import React from 'react';
import { FcDownRight, FcApproval } from "react-icons/fc";
import Conhecimento from "../img/conhecimento.png";

function Curriculo(){
    return(
        <div className='container-curriculo'>
            <div className='div-h1-curriculo'>
                <h1 id='h1-curriculo'>Minha Formação</h1>
            </div>
            <div className='container-div-curriculo'>
                <div>
                    <div className='div-formacao-curriculo'>
                        <p><FcDownRight/> Formação</p>
                        <p><FcApproval/> Bacharel em Ciência da Computação pela Universidade de Brasília, 2023</p>
                    </div>
                    <div className='div-exp-curriculo'>
                        <p><FcDownRight/> Experiência Profissional</p>
                        <p><FcApproval/> DevOps junior na DATAPREV - 1 ano de experiência como estagiário</p>
                        <p><FcApproval/> DevWeb/nalista de dados/Suporte na ANAC - 2 anos de experiência como estagiário</p>
                    </div>
                    <div className='div-conhecimentos-curriculo'>
                        <p><FcDownRight/> Conhecimentos</p>
                        <p><FcApproval/> Conhecimentos em C, C++, Python, Javascript, yaml, SQL, PLSQL, banco de dados relacionais, git, API Rest </p>
                        <p><FcApproval/>Desenvolvedor Full Stack javascript (Node.js + React + Javascript + Swagger)</p>
                        <p><FcApproval/>Conhecimentos nas tecnologias mais usadas atualmente no mundo DevOps como kubernetes, docker e ansible</p>
                        <p><FcApproval/>Especialista em desenvolvimento Web utilizando framework Oracle Apex</p>
                    </div>
                </div>
                <div className='div-img-curriculo'>
                    <img id='id-img-curriculo' src={Conhecimento} />
                </div>
            </div>
        </div>
    )
}

export default Curriculo