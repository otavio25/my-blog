import React from 'react';
import Computer from '../img/computer.jpeg'
import './styles.css'

function Sobre(){
    return(
        <div>
            <div className='div-h1-sobre'>
                <h1 id='h1-sobre'>Quem é o Otávio?</h1> 
            </div>
            <div className='container-sobre'>
                <div className='div-p-sobre'>
                    <p id='p-sobre'>Sou desenvolvedor Full Stack Javascript (React + Node.js + JS). Possuo conhecimento
                        em algumas dsa principais tecnologias usadas no mundo DevOps como Kubernetes, Ansible e Docker.
                        Possuo conhecimento em banco de dados relacionais principalmento Oracle, MySQL, Postgres.
                    </p>
                </div>
                <div className='div-img-sobre'>
                    <img id='img-sobre' src={Computer}/>
                </div>
            </div>
        </div>
    )
}

export default Sobre