import React from 'react';
import { FcDownRight, FcApproval } from "react-icons/fc";
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

function Curriculo(){
    return(
        <Container>
            <div className='div-h1-curriculo'>
                <h1 id='h1-curriculo'>Minha Formação</h1>
            </div>
            <ListGroup id='lista-curriculo'>
                <ListGroup.Item>
                    <p><FcDownRight/> Formação</p>
                    <p><FcApproval/> Bacharel em Ciência da Computação pela Universidade de Brasília, 2023</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p><FcDownRight/> Experiência Profissional</p>
                    <p><FcApproval/> DevOps junior na DATAPREV - 1 ano de experiência como estagiário</p>
                    <p><FcApproval/> DevWeb/analista de dados/Suporte na ANAC - 2 anos de experiência como estagiário</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p><FcDownRight/> Conhecimentos</p>
                    <p><FcApproval/> Conhecimentos em C, C++, Python, Javascript, yaml, SQL, PLSQL, banco de dados relacionais, git, API Rest </p>
                    <p><FcApproval/>Desenvolvedor Full Stack javascript (Node.js + React + Javascript + Swagger)</p>
                    <p><FcApproval/>Conhecimentos nas tecnologias mais usadas atualmente no mundo DevOps como kubernetes, docker e ansible</p>
                    <p><FcApproval/>Especialista em desenvolvimento Web utilizando framework Oracle Apex</p>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default Curriculo