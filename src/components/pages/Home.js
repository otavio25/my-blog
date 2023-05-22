import React from 'react';
import './styles.css'
import { Carousel } from 'react-bootstrap';
import ImageHome1 from '../img/home1.png'
import ImageHome2 from '../img/home2.png'
import ImageHome3 from '../img/home3.png'

function Home(){
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageHome1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageHome2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={ImageHome3} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    )
}

export default Home