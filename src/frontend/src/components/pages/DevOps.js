import React, {useState, useEffect} from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { BsEye } from 'react-icons/bs'

function DevOps(props){
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

    console.log("props? ", props.titulo)

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
                        <td class="text-center"><a href={"/texto?titulo=" + texto.titulo + "&classificacao=" + texto.classificacao}><BsEye size={40}/></a></td>
                        <td class="text-center">{texto.titulo}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>
    )
}

export default DevOps