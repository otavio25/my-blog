import React from 'react';
import './styles.css'
import { Carousel } from 'react-bootstrap';
import ImageHome1 from '../img/programacao.jpg'
import ImageHome2 from '../img/devops.jpg'
import ImageHome3 from '../img/banco-de-dados.png'

function Home(){
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageHome1} alt="First slide" />
                <Carousel.Caption>
                    <h3 className='texto-home'>Full Stack</h3>
                    <p className='texto-home'> 
                        Sou desenvolvedor Full Stack Javascript. Possuo conhecimento em Node.js (Express), React.js e Swagger (Documentação de API).
                        Além disso possuo conhecimentos em CSS, HTML, Bootstrap, MUI.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageHome2} alt="Second slide" />
                <Carousel.Caption>
                    <h3 className='texto-home' >DevOps</h3>
                    <p className='texto-home' >Possuo conhecimento em algumas das principais tecnologias usadas no mundo DevOps como Kubernetes, Ansible e Docker.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageHome3} alt="Third slide" />
                <Carousel.Caption>
                    <h3 className='texto-home' >Banco de dados</h3>
                    <p className='texto-home' >Possuo conhecimento nos banco de dados relacionais Oracle, MySQL, Postgres.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Home