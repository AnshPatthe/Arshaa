import React from "react";
import './css/team.css'
import { Container, Row, Col } from "react-bootstrap";
import Profile1 from '../assets/pro1.jpeg'
function Team()
{
    return(
        <>
         <center> <h3 id="head-team">TEAM</h3>
         <p id="para-ser">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p></center><br/><br/>
        <Container >
            <Row className="row1">
                <Col className="col-md-6">   
                        <div>
                            <img id="pro1" src={Profile1}/>
                            <div>
                            <p>Walter White</p>
                            <p>Chief Executive Officer</p>
                            <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                            </div>
                        </div>
                   
                </Col>
                <Col className="col-md-6"   >
                <div>
                        <div>
                            <img id="pro2" src={Profile1}/>
                        </div>
                        <div id="pro2-info">
                            <p>Walter White</p>
                            <p>Chief Executive Officer</p>
                            <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Team;