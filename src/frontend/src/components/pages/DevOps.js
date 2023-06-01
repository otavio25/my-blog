import React, {useState, useEffect} from 'react';
import { Container, Button, Table } from 'react-bootstrap';

function DevOps(){
    const [texto, setTexto] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3333/textos?classificacao=devops`)
        .then(res=>res.json())
        .then(
            (res)=>{
                setTexto(res)
            }
        )
    })

    return (
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                    </tr>
                </thead>
                <tbody>
                { texto.map(texto =>
                    <tr>
                        <td><Button variant="danger" href={"/texto?titulo=" + texto.titulo + "&classificacao=" + texto.classificacao} size="lg" >Veja</Button></td>
                        <td>{texto.titulo}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>
    )
}

export default DevOps