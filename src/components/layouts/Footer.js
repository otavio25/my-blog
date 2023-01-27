import React from 'react';
import './styles.css'
import Copy from '../img/copy.png'

function Footer(){
    return(
        <footer>
            <h1 className='TextoFooter'>Todos os direitos reservados</h1>
            <img src={Copy} className='copy'/>
        </footer>
    )
}

export default Footer