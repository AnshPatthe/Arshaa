import React, { useState } from "react";
import './css/ContactUs.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import axios from "axios";

function ContactUs() {
  const [fname, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [result, setResult] = useState("")


  async function handleSubmit(e) {
    e.preventDefault()
    const newData = {
      fname: fname,
      phone: phone,
      email: email,
      result:result,
    };

    try {
      const response = await axios.post('http://localhost:8000/contact_add', newData);
      console.log(response.data);
      alert('Data Add Successfully!');
    }
    catch (err) {
      console.log(err);
    }

    setName("")
    setPhone("")
    setEmail("")
    setResult("")

  }

  return (
    <>
    <h3 id="head-con">Contact Us</h3>
    <Form id="Contact-form" noValidate onSubmit={handleSubmit}>

        
        <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control value={fname} required
                    onChange={(e) => setName(e.target.value)} />
        </InputGroup>
        <Form.Label>
            Mobile No.
          </Form.Label>
          <Col>
            <Form.Control type="number" value={phone} required
                        onChange={(e) => setPhone(e.target.value)} />
          </Col>
          <Form.Label>
            E-mail
          </Form.Label>
          <Col>
            <Form.Control type="email" value={email} required
                        onChange={(e) => setEmail(e.target.value)}/>
          </Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe your problem</Form.Label>
        <Form.Control as="textarea" rows={3} value={result} required
                        onChange={(e) => setResult(e.target.value)} />
        </Form.Group>
        <br/>
        <Button as="input" type="submit" value="Submit" variant="outline-dark"/>
   </Form>
   </>
  );
}

export default ContactUs;