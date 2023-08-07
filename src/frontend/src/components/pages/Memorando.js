import React from 'react';
import Memorando_html from 'html-loader!./Memorando_6398728.html'
import { Container } from 'react-bootstrap';
import './styles.css'

function Memorando(){
    return(
        <Container className='memorando'>
            <div dangerouslySetInnerHTML={ {__html: Memorando_html} } />
        </Container>
    )
}

export default Memorando