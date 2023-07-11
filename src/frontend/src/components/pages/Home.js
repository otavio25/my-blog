import React, {useState} from 'react';
import './styles.css'
import { Card, CardGroup, Container, Button, Form, Carousel, Figure } from 'react-bootstrap';
import emailjs from '@emailjs/browser'
import ImageCard1 from '../img/programacao.jpg'
import ImageCard2 from '../img/DevOps.png'
import ImageCard3 from '../img/banco-de-dados.jpg'
import ImageHome from '../img/home.png'
import ImageHome2 from '../img/home2.png'
import ImageHome3 from '../img/home3.png'
import Curriculo from '../img/curriculo.jpg'

function Home(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const service_id = process.env.REACT_APP_SERVICE_ID
    const template_id = process.env.REACT_APP_TEMPLATE_ID
    const publickey = process.env.REACT_APP_PUBLICKEY

    console.log("imprime porra: ", publickey)
    
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

        emailjs.send(service_id, template_id, templateParams, publickey)
        .then(()=>{
            alert("Mensagem enviada com sucesso!")
            setName('')
            setEmail('')
            setMessage('')
        })
    }

    return(
        <div>
            <Carousel id="home">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImageHome}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImageHome2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImageHome3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <Container id='div-principal-scroll'>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                    <CardGroup id="conteudo">
                        <Card>
                            <Card.Img variant="top" src={ImageCard1} width="100" height="250"/>
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
                            <Card.Img variant="top" src={ImageCard2} width="100" height="250"/>
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
                            <Card.Img variant="top" src={ImageCard3} width="100" height="250"/>
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

                    <div class="mb-4">
                        <hr class="solid"/>
                    </div>

                    <div id='curriculo' className='div-h1-curriculo'>
                        <h1 id='h1-curriculo'>Minha Formação</h1>
                    </div>

                    <Figure>
                        <Figure.Image
                            width={1241}
                            height={1755}
                            alt="..."
                            src={Curriculo}
                        />
                    </Figure>

                    <div class="mb-4">
                        <hr class="solid"/>
                    </div>

                    <div className='div-h1-contato' id='contato'>
                        <h1 id='h1-contato'>Entre em Contato</h1>
                    </div>

                    <Form className='formulario-contato' onSubmit={sendEmail}>
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
                            <Form.Control as="textarea" rows={3} placeholder="Motivo do contato" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" size="lg">
                                Enviar
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Home