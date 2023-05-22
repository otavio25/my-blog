import React from 'react';
import './styles.css'
import { Card, CardGroup, Container } from 'react-bootstrap';
import ImageHome1 from '../img/programacao.jpg'
import ImageHome2 from '../img/DevOps.png'
import ImageHome3 from '../img/banco-de-dados.jpg'

function Home(){
    return(
        <Container>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={ImageHome1} />
                    <Card.Body>
                        <Card.Title>Full Stack</Card.Title>
                        <Card.Text>
                        Sou desenvolvedor Full Stack Javascript. Possuo conhecimento em Node.js (Express), React.js e Swagger (Documentação de API).
                        Além disso possuo conhecimentos em CSS, HTML, Bootstrap, MUI.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ImageHome2} />
                    <Card.Body>
                        <Card.Title>DevOps</Card.Title>
                        <Card.Text>
                        Possuo conhecimento em algumas das principais tecnologias usadas no mundo DevOps como Kubernetes, Ansible e Docker.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ImageHome3} />
                    <Card.Body>
                        <Card.Title>Banco de dados</Card.Title>
                        <Card.Text>
                        Possuo conhecimento nos banco de dados relacionais Oracle, MySQL, Postgres.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    )
}

export default Home