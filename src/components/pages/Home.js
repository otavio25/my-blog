import React from 'react';
import Eu from '../img/eu.jpg'
import './styles.css'

function Home(){
    return(
        <div>
            <div className='div-h1-home'>
                <h1 id='h1-home'>Bem-vindo ao meu site</h1>
            </div>
            <div className='container-home'>
                <div className='div-p-home'>
                    <p id='p-home'>Otávio | Desenvolvedor Full Stack</p>
                </div>
                <div className='div-img-home'>
                    <img id='img-home' src={Eu}/>
                </div>
            </div>
        </div>
    )
}

export default Home