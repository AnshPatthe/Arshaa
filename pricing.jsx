import React, {useState, useEffect} from "react";
import './css/pricing.css'
import { Container, Row, Col } from "react-bootstrap";
import  Card  from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import axios from "axios";

function Pricing(){
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/product_details')
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
    return(
        <>
        <center> <h3 id="head-pri">PRICING</h3>
         <p id="para-ser">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p></center><br/><br/>
        <Container>
            <Row>
            {data.map((a) => (
                <Col >
                <Card style={{ width: '22rem' }} id="Cardd">
                <Card.Body>  
                    <Card.Subtitle id="subb" className="mb-2">{a.pname}</Card.Subtitle><br/>
                    <Card.Title id="card-titlee"> <sup>$</sup>{a.price}<span id="monthh"></span> </Card.Title><br/>
                    <Card.Text>
                      <label>Ratings :</label>   {a.ratings}
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                  ))}
            </Row>
            <Row>
            <center> <h3 id="head-pri">TESTIMONIALS</h3>
                     <p id="para-ser">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p></center><br/><br/>
       
            </Row>
        </Container>
        </>
    );
}

export default Pricing;