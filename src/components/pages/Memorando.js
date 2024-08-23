import React from 'react';
import './styles.css'
import { Container } from 'react-bootstrap';
//import Memorando_html from 'html-loader!./Memorando_6398728.html'
import Memorando_html from '/static/media/Memorando_6398728.html'

function Memorando(){
    return (
        <Container id='container-memorando'>
            <div dangerouslySetInnerHTML={ {__html: Memorando_html} } className='div-memorando'/>
        </Container>
    )
}

export default Memorando