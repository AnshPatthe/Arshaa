import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import './css/AboutUs.css'
import Accordion from "react-bootstrap/Accordion";
import AboutImage from '../assets/HomePage.png'
import AboutImage1 from '../assets/About.png'
import ProgressBar from 'react-bootstrap/ProgressBar';

function AboutUs()
{
    const [Title, setTitle] = useState(["Voluptatem dignissimos provident quasi corporis voluptas"]);
    const [Title1, setTitle1]= useState(["Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quasi culpa non, earum hic enim mollitia doloremque tempora autem error aliquid pariatur ratione amet accusantium unde illum impedit eos odit"]);
    return (
        <>
        <center><h3 id="H3-about">About Us</h3></center>
        <Container>
        <Row id="Cont-about">
            <Col>
            <p id="About-para-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In aperiam atque tempora rem excepturi nobis nisi quia ipsam. Recusandae libero minus atque ab consequatur ut officia aliquid amet possimus deserunt.
            </p>
            <ul>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo</li>
            </ul>
            </Col>
            <Col>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button variant="outline-primary">Read More ></Button>
            </Col>
        </Row>
       
        </Container>
        <Row id="Row-2">
            <Col id="Col-about">
            <h3 id="head-h3">Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, earum. Accusamus aliquid perspiciatis itaque, enim totam, repudiandae id quasi natus quia maxime odit saepe ea quas explicabo iure, placeat aspernatur.</p>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header id="head-1">01 Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
                    <Accordion.Body>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </Accordion.Body>
                </Accordion.Item><br/>
                <Accordion.Item eventKey="2">
                    <Accordion.Header id="head-1">02 Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</Accordion.Header>
                    <Accordion.Body>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </Accordion.Body>
                </Accordion.Item><br/>
                <Accordion.Item eventKey="3">
                    <Accordion.Header id="head-1">03 Dolor sit amet consectetur adipiscing elit pellentesque?</Accordion.Header>
                    <Accordion.Body>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Col>
            <Col>
                 <img id='About-Image1' src = {AboutImage}></img>
            </Col>
        </Row>
        <Row id="Row-3">
       
            <Col>
                 <img id='About-Image2' src = {AboutImage1}></img>
            </Col>
            <Col id="Col-about">
            <h3 id="head-h3"><strong>{Title}</strong></h3>
            <p>{Title1}</p>
            
            <div>
                <h6>HTML</h6>
                <ProgressBar  now={100} /><br/>
                <h6>CSS</h6>
                <ProgressBar now={75} /><br/>
                <h6>JAVASCRIPT</h6>
                <ProgressBar now={50} /><br/>
                <h6>PHOTOSHOP</h6>
                <ProgressBar now={25} /><br/>
            </div>
            </Col>
      
        </Row>
       
        </>
    );
}

export default AboutUs;