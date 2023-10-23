import React, {useState} from 'react';
import './styles.css'
import { Card, CardGroup, Container, Button, Form, Carousel, Figure } from 'react-bootstrap';
import emailjs from '@emailjs/browser'
import ImageHome from '../img/home.png'
import ImageHome2 from '../img/home2.png'
import ImageHome3 from '../img/home3.png'
import ImageCard1 from '../img/AWS-serverless.png'
import ImageCard2 from '../img/faas.jpg'
import ImageCard3 from '../img/programacao.jpg'
import Curriculo from '../img/curriculo.png'
import Swal from 'sweetalert2'
import Memorando_html from 'html-loader!./Memorando_6398728.html'

function Home(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const service_id = process.env.REACT_APP_SERVICE_ID
    const template_id = process.env.REACT_APP_TEMPLATE_ID
    const publickey = process.env.REACT_APP_PUBLICKEY
    
    function sendEmail(e){
        e.preventDefault()
        
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send(service_id, template_id, templateParams, publickey)
        .then(()=>{
            Swal.fire(
                'Sucesso',
                'Mensagem enviada com sucesso',
                'success'
            )
            setName('')
            setEmail('')
            setMessage('')
            return
        })
        .catch(() => {
            Swal.fire(
                'Oops...',
                'Erro! Não foi possível enviar a mensagem!',
                'error'
            )
            return
        })
    }

    return(
        <div id='div-principal-home' data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
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

            <Container>
                <div class="mb-4">
                    <hr class="solid"/>
                </div>
                <CardGroup id="conteudo">
                    <Card>
                        <Card.Img variant="top" src={ImageCard1} width="100" height="250"/>
                        <Card.Body>
                            <Card.Title>FaaS Node.js</Card.Title>
                            <Card.Text>
                            Projeto que trata repetições de artigos utilizando uma bordagem multi cloud e serverless.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" href='https://github.com/otavio25/faas-nodejs' target="_blank" rel="noopener noreferrer">Veja mais sobre</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ImageCard2} width="100" height="250"/>
                        <Card.Body>
                            <Card.Title>FaaS Métricas</Card.Title>
                            <Card.Text>
                            Projeto que calcula métricas de artigos, retornando as palavras mais frequentes de cada ano, função que utiliza FaaS como abordagem principal.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" href='#' target="_blank" rel="noopener noreferrer">Veja mais sobre</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ImageCard3} width="100" height="250"/>
                        <Card.Body>
                            <Card.Title>QSA Info</Card.Title>
                            <Card.Text>
                            Projeto voltado aos dados do QSA, retorna uma listagem de empresas e seus sócios e mostra um gráfico desse relacionamento.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" href='http://18.229.255.146:3000/' target="_blank" rel="noopener noreferrer">Veja mais sobre</Button>
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

                <div id='memorando' className='div-h1-memorando'>
                    <h1 id='h1-memorando'>Memorando</h1>
                </div>

                <div dangerouslySetInnerHTML={ {__html: Memorando_html} } className='div-memorando'/>

                <div class="mb-4">
                    <hr class="solid"/>
                </div>

                <div className='div-h1-contato' id='contato'>
                    <h1 id='h1-contato'>Entre em Contato</h1>
                </div>

                <Form className='formulario-contato' onSubmit={sendEmail}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nome</Form.Label>
                        <Form.Control required type="text" placeholder="ex: João da Silva" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control required type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label>Motivo do contato</Form.Label>
                        <Form.Control required as="textarea" rows={3} placeholder="Motivo do contato" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            Enviar
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Home