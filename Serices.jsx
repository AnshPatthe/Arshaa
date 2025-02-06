import React from "react";
import './css/Services.css'
import { Container,Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imgg2 from '../assets/images.jpeg'
import Imgg3 from '../assets/download.png'

function Services()

{
    return(
        <>
        
                <center> <h3 id="head-ser">SERVICES</h3>
                <p id="para-ser">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p></center>
            <Row >
                <Col id="Col-servi">
                <Card  id="card1">
                <Card.Img src={Imgg2} id="Servi-img" />
                <Card.Body>
                    <Card.Title id="card-titles">Lorem Ipsum</Card.Title>
                    <Card.Text>
                    Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                    </Card.Text>
                  
                </Card.Body>
                </Card>
                </Col>
                <Col id="Col-servi">
                <Card id="card1">
                <Card.Img  src={Imgg3} id="Servi-img" />
                <Card.Body>
                    <Card.Title id="card-titles">Sed ut perspici</Card.Title>
                    <Card.Text>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    </Card.Text>
                   
                </Card.Body>
                </Card>
                </Col>
                <Col id="Col-servi">
                <Card id="card1">
                <Card.Img src={Imgg2} id="Servi-img" />
                <Card.Body>
                    <Card.Title id="card-titles">Magni Dolores</Card.Title>
                    <Card.Text>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </Col>
                <Col id="Col-servi">
                <Card id="card1">
                <Card.Img src={Imgg3} id="Servi-img" />
                <Card.Body>
                    <Card.Title id="card-titles">Nemo Enim</Card.Title>
                    <Card.Text>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
            </Row>
       
        </>
    );
}

export default Services;