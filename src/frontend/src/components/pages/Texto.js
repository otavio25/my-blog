import React, {useState, useEffect} from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import ImageCard1 from '../img/fullstackcapa.png'
import ImageCard2 from '../img/devopscapa.png'
import ImageCard3 from '../img/banco-de-dados-capa.jpg'
import {useSearchParams} from 'react-router-dom'

function Texto(){
    const [texto, setTexto] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const titulo = searchParams.get('titulo')
    const classificacao = searchParams.get('classificacao')

    useEffect(()=>{
        fetch(`http://localhost:3333/texto?titulo=${titulo}`)
        .then(res=>res.json())
        .then(
            (res)=>{
                setTexto(res)
            }
        )
    })
    if(classificacao === "fullstack"){
        return(
            <Container>
                <Card>
                    <Card.Img variant="top" src={ImageCard1} width={100} height={400}/>
                    <Card.Body>
                        <Card.Title>{texto.titulo}</Card.Title>
                        <Card.Text>
                            {texto.texto}
                        </Card.Text>
                        <Button variant="primary">Voltar</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
    else if(classificacao === "devops"){
        return(
            <Container>
                <Card>
                    <Card.Img variant="top" src={ImageCard2} width={100} height={400}/>
                    <Card.Body>
                        <Card.Title>{texto.titulo}</Card.Title>
                        <Card.Text>
                            {texto.texto}
                        </Card.Text>
                        <Button variant="primary">Voltar</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
    else{
        return(
            <Container>
                <Card>
                    <Card.Img variant="top" src={ImageCard3} width={100} height={400}/>
                    <Card.Body>
                        <Card.Title>{texto.titulo}</Card.Title>
                        <Card.Text>
                            {texto.texto}
                        </Card.Text>
                        <Button variant="primary">Voltar</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Texto