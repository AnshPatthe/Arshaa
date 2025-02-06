import React from "react";
import { Row, Col } from "react-bootstrap";
import './css/HomePage.css'
import HomeImage from '../assets/HomePage.png'

function HomePage()
{
    return(
        <Row id='Row2'>
        <Col >
        <h1 id='Heading-1' class="fw-bold">
        Better Solutions For Your Business
        </h1>
        <p id='Heading-1-2'>
        We are team of talented designers making websites with Bootstrap
        </p>
        </Col>
        <Col>
          <img id='Home-Image' src = {HomeImage}></img>
        </Col>
    </Row>
    );
}

export default HomePage;