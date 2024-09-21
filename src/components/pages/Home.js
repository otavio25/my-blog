import React, {useState} from 'react';
import './styles.css'
import { Card, CardGroup, Container, Button, Form, Carousel, Figure } from 'react-bootstrap';
import emailjs from '@emailjs/browser'
import ImageHome from '../img/home.png'
import ImageHome2 from '../img/home2.png'
import ImageHome3 from '../img/home3.png'
import ImageCard1 from '../img/logo_sistema_aeroportos.png'
import ImageCard2 from '../img/faas.jpg'
import ImageCard3 from '../img/programacao.jpg'
import ImageCard4 from '../img/sistema_gerenciamento_equipamento.png'
import ImageCard5 from '../img/scan_vuknerabilidade_wp.png'
import Curriculo from '../img/curriculo.png'
import Swal from 'sweetalert2'

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
                <hr class="featurette-divider"/>

                <div class="container marketing" id="conteudo">
                    <div class="row text-center">
                        <div class="col-lg-4">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={ImageCard1} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                            <h2>Sistema para Serviços de Aeroporto</h2>
                            <p>Projeto que permite todo o gerenciamento de pessoal incluindo cursos, documentos e certificados. Para acessar o sistema utilize username = teste e senha = teste1234 e brinque à vontade.</p>
                            <p><a class="btn btn-secondary" href='https://apex.oracle.com/pls/apex/r/network_app/msc-controle-de-treinamento/login?session=17545323933662' target="_blank" rel="noopener noreferrer">Ver detalhes »</a></p>
                        </div>
                        <div class="col-lg-4">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={ImageCard2} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                            <h2>Trabalho de Conclusão de Curso</h2>
                            <p>Monografia apresentada como requisito parcial para conclusão do Bacharelado em Ciência da Computação na Universidade de Brasília.</p>
                            <p><a class="btn btn-secondary" href='https://drive.google.com/file/d/1jneZc-Vy_SOZX8TlUlgYqXiaIyd7eqnn/view?usp=sharing' target="_blank" rel="noopener noreferrer">Ver detalhes »</a></p>
                        </div>
                        <div class="col-lg-4">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={ImageCard3} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                            <h2>QSA Info</h2>
                            <p>Projeto voltado aos dados do QSA, retorna uma listagem de empresas e seus sócios e mostra um gráfico desse relacionamento.</p>
                            <p><a class="btn btn-secondary" href='https://github.com/otavio25/qsa-info' target="_blank" rel="noopener noreferrer">Ver detalhes »</a></p>
                        </div>
                    </div>
                    <hr class="featurette-divider"/>
                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">Scan Vulnerabilidade WP </h2>
                            <p class="lead">Este sistema tem o objetivo de retornar dados do banco de dados CVE (Common Vulnerabilities and Exposures), especificamente relacionados a sites desenvolvidos com WordPress. Isso inclui a exibição de quaisquer vulnerabilidades associadas a temas, plugins e versões do WordPress encontrados no site alvo.</p>
                            <p><a class="btn btn-secondary" href='https://github.com/otavio25/frontend-scan-vulnerabilidade-wp' target="_blank" rel="noopener noreferrer">Ver detalhes »</a></p>
                        </div>
                        <div class="col-md-5">
                            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={ImageCard5} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        </div>
                    </div>
                    <hr class="featurette-divider"/>
                    <div class="row featurette">
                        <div class="col-md-7 order-md-2">
                            <h2 class="featurette-heading">Sistema de Gerenciamento de Equipamentos</h2>
                            <p class="lead">Sistema de gerenciamento de equipamentos de aeroportos. O sistema permite o cadastro de vários tipos de equipamento e seus gerenciamento desde a abertura de Ordens de Serviço quanto ao seu custo. Para acessar o sistema utilize username = teste e senha = teste1234 e brinque à vontade.</p>
                            <p><a class="btn btn-secondary" href='https://apex.oracle.com/pls/apex/r/network_app/sm/login?session=5858922611615' target="_blank" rel="noopener noreferrer">Ver detalhes »</a></p>
                        </div>
                        <div class="col-md-5 order-md-1">
                            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={ImageCard4} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        </div>
                    </div>
                </div>

                <hr class="featurette-divider"/>

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

                <hr class="featurette-divider"/>

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