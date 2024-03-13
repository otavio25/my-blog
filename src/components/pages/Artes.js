import React from 'react';
import './styles.css'
import { Container, Col, Image, Row } from 'react-bootstrap';
import Post1 from '../img/post1.png'
import Post2 from '../img/post2.png'
import Post3 from '../img/post3.png'
import logo from '../img/logo.png'
import Post4 from '../img/post4.png'
import Post5 from '../img/post5.png'

function Artes(){
    return (
        <div className='div-artes'>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <Image src={Post1} thumbnail className='mb-4'/>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Image src={Post2} thumbnail className='mb-4'/>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Image src={Post3} thumbnail className='mb-4'/>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Image src={logo} thumbnail className='mb-4'/>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Image src={Post4} thumbnail className='mb-4'/>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Image src={Post5} thumbnail className='mb-4'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Artes