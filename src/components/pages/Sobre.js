import React from 'react';
import './styles.css'
import { Card, Container} from 'react-bootstrap';
import Computer from '../img/computer.jpeg'

function Sobre(){
    return(
        <Container>
            <Card className="bg-dark text-white">
                <Card.Img src={Computer} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title style={{color: '#000000'}}>Quem é o Otávio?</Card.Title>
                        <Card.Text style={{color: '#000000'}}>
                        Sou desenvolvedor Full Stack Javascript (React + Node.js + JS). Possuo conhecimento
    em algumas das principais tecnologias usadas no mundo DevOps como Kubernetes, Ansible e Docker.
    Possuo conhecimento em banco de dados relacionais principalmento Oracle, MySQL, Postgres.
                        </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
    )
}

export default Sobre