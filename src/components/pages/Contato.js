import React, {useState} from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser'

function Contato(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    

    function sendEmail(e){
        e.preventDefault()

        if(name === '' || email === '' || message === ''){
            alert("Todos os campos precisam ser preenchidos!");
            return
        }
        
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        
        emailjs.send("service_a76trt7", "template_j12gjkp", templateParams, "dsMBx1C-YAITurYuF")
        .then(()=>{
            alert("Mensagem enviada com sucesso!")
            setName('')
            setEmail('')
            setMessage('')
        })
    }

    return(
        <Container>
            <div className='div-h1-contato'>
                <h1 id='h1-contato'>Entre em Contato</h1>
            </div>
            <Form id='formulario-contato' onSubmit={sendEmail}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="ex: João da Silva" value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Label>Motivo do contato</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Informe aqui sua ideia..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                        Enviar
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default Contato