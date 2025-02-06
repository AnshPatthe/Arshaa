import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './css/portfolio.css'
import { Container, Row, Col } from "react-bootstrap";
import img11 from '../assets/all-1.jpg'
import img12 from '../assets/all-2.jpg'
import img13 from '../assets/all-3.jpg'
import img14 from '../assets/all-4.jpg'
import img15 from '../assets/all-5.jpg'
import img16 from '../assets/all-6.jpg'
import img17 from '../assets/all-7.jpg'
import img18 from '../assets/all-8.jpg'
import img19 from '../assets/all-9.jpg'

function Portfolio()

{
    return(
        <>
         <center> <h3 id="head-port">PORTFOLIO</h3>
         <p id="para-ser">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p></center><br/><br/>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 tab-port"
      justify
    >
      <Tab eventKey="home" title="All">
       <Container>
        <Row>
          <Col id="col-port">
          <img id="img11" src={img11}/>
          <br/><br/>
          <img id="img12" src={img12}/>
          </Col>
          <Col id="col-port">
          <img id="img13" src={img13}/>
          <br/><br/>
          <img id="img14" src={img14}/>
          <br/><br/>
          <img id="img15" src={img15}/>
          </Col>
          <Col id="col-port">
          <img id="img16" src={img16}/>
          <br/><br/>
          <img id="img17" src={img17}/>
          <br/><br/>
          <img id="img18" src={img18}/>
          <br/><br/>
          <img id="img19" src={img19}/>
          <br/><br/>
          </Col>
        </Row>
       </Container>
      </Tab>
      <Tab eventKey="profile" title="App">
      <Container>
        <Row>
          <Col id="col-port">
          <img id="img11" src={img11}/>
          <br/><br/>
          <img id="img12" src={img12}/>
          </Col>
          <Col id="col-port">
          <img id="img16" src={img16}/>
          <br/><br/>
          <img id="img17" src={img17}/>
          <br/><br/>
          <img id="img18" src={img18}/>
          <br/><br/>
          <img id="img19" src={img19}/>
          <br/><br/>
          </Col>
          <Col id="col-port">
          
          <img id="img13" src={img13}/>
          <br/><br/>
          <img id="img14" src={img14}/>
          <br/><br/>
          <img id="img15" src={img15}/>
          </Col>
        </Row>
       </Container>
      </Tab>
      <Tab eventKey="longer-tab" title="Card">
      <Container>
        <Row>
          <Col id="col-port">
          <img id="img16" src={img16}/>
          <br/><br/>
          <img id="img17" src={img17}/>
          <br/><br/>
          <img id="img18" src={img18}/>
          <br/><br/>
          <img id="img19" src={img19}/>
          <br/><br/>
          </Col>
          <Col id="col-port">
          
          <img id="img13" src={img13}/>
          <br/><br/>
          <img id="img14" src={img14}/>
          <br/><br/>
          <img id="img15" src={img15}/>
          </Col>
          <Col id="col-port">
          <img id="img11" src={img11}/>
          <br/><br/>
          <img id="img12" src={img12}/>          
          </Col>
        </Row>
       </Container>
      </Tab>
      <Tab eventKey="contact" title="Web" >
      <Container>
        <Row>
          <Col id="col-port">
          <img id="img13" src={img13}/>
          <br/><br/>
          <img id="img14" src={img14}/>
          <br/><br/>
          <img id="img15" src={img15}/>
          </Col>
          <Col id="col-port">
          <img id="img16" src={img16}/>
          <br/><br/>
          <img id="img17" src={img17}/>
          <br/><br/>
          <img id="img18" src={img18}/>
          <br/><br/>
          <img id="img19" src={img19}/>
          <br/><br/>
          </Col>
          <Col id="col-port">
          <img id="img11" src={img11}/>
          <br/><br/>
          <img id="img12" src={img12}/>
          </Col>
        </Row>
       </Container>
      </Tab>
    </Tabs>
        </>
    );


}

export default Portfolio;