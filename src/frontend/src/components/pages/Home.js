import React from 'react';
import './styles.css'
import { Card, CardGroup, Container, Button } from 'react-bootstrap';
import ImageHome1 from '../img/programacao.jpg'
import ImageHome2 from '../img/DevOps.png'
import ImageHome3 from '../img/banco-de-dados.jpg'

function Home(){
    return(
        <Container>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={ImageHome1} width="100" height="250"/>
                    <Card.Body>
                        <Card.Title>Full Stack</Card.Title>
                        <Card.Text>
                        Em mundo globalizado onde as informações correm de maneira fácil e rápida, se especializar em uma única tecnologia ou ferramenta de trabalho, ou não conseguir se adaptar ao uso de novas tecnologias é um grande problema nos dias hoje, principalmente pra quem quer adentrar no mercado de TI.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" href='/fullstack'>Veja mais sobre</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ImageHome2} width="100" height="250"/>
                    <Card.Body>
                        <Card.Title>DevOps</Card.Title>
                        <Card.Text>
                        Não basta só desenvolver aplicações! É necessário desenvolver e operar as aplicações. Integrando e monitorando suas atividades para buscar um desempenho mais otimizado e simplificado.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" href='/devops'>Veja mais sobre</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ImageHome3} width="100" height="250"/>
                    <Card.Body>
                        <Card.Title>Banco de dados</Card.Title>
                        <Card.Text>
                        Além de armazenar dados. Como organizar os dados? Porque organizar os dados? Que tipo de banco de dados é necessário pra determinado tipo de aplicação? Alguns dos questionamentos que se deve fazer a um profissional de TI.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" href='/bancodedados'>Veja mais sobre</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    )
}

export default Home