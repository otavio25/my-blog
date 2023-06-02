import React, {useState, useEffect} from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { BsEye } from 'react-icons/bs'

function BancodeDados(){
    const [texto, setTexto] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3333/textos?classificacao=bancodedados`)
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
                        <td class="text-center"><a href={"/texto?titulo=" + texto.titulo + "&classificacao=" + texto.classificacao}><BsEye size={40}/></a></td>
                        <td class="text-center">{texto.titulo}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>
    )
}

export default BancodeDados