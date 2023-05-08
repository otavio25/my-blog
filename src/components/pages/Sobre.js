import React from 'react';
import './styles.css'
import { Card } from 'react-bootstrap';
import Computer from '../img/home3.png'

function Sobre(){
    return(
        <Card className="bg-dark text-white">
            <Card.Img src={Computer} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Quem é o Otávio?</Card.Title>
                    <Card.Text>
                    Sou desenvolvedor Full Stack Javascript (React + Node.js + JS). Possuo conhecimento
em algumas das principais tecnologias usadas no mundo DevOps como Kubernetes, Ansible e Docker.
Possuo conhecimento em banco de dados relacionais Oracle, MySQL, Postgres.
                    </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Sobre