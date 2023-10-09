import React, {useState, useEffect} from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { BsEye } from 'react-icons/bs'

function FullStack(){
    const [texto, setTexto] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3333/textos?classificacao=fullstack`)
        .then(res=>res.json())
        .then(
            (res)=>{
                setTexto(res)
            }
        )
    }, [])

    if(texto.length > 0){
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
    else{
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="text-center">Não há conteúdo ainda</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default FullStack