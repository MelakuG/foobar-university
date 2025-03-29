import React from "react";
// import axios from 'axios';
// import { useState } from 'react';
import { Button, Form, Row, Col, Container} from 'react-bootstrap';


// const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const AddStudent = (firstName, lastName, email, setFirstName, setLastName, setEmail, handleAddStudent) => {
  // const[id, setId] = useState(0);
  // const[firstName, setFirstName] = useState([""]);
  // const[lastName, setLastName] = useState([""]);
  // const[email, setEmail] = useState([""]);

  // const handleAddStudent = async (e) => {
  //   e.preventDefault();
  //   // const studentToBeSaved = students.find((student) => student.id === id);
  //   try {
  //     const res = await axios.post(`${API_URL}/students`, { firstName:firstName,
  //     lastName:lastName, email:email });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return(
    <div className="d-grid gap-3">
        <Container>
          <Form className="mt-4 p-1 bg-light border" onSubmit={handleAddStudent}>
            <div className="mt-4 row gx-0 col-4" style={{padding:"0rem"}}>
              <Form.Group as={Row} className="mb-3"controlId="formPlaintextFirst Name">
                <p className="mr-0 mb-4" style={{fontSize:25, fontWeight:"bold"}}>Add Student</p>
                <Form.Label className="mr-0" column sm="4" 
                  style={{fontWeight:"bold"}} value={firstName}
                  onChange={(e) => {setFirstName(e.target.value)}}>First Name:</Form.Label>
                  <Col sm="8">
                    <Form.Control type="text" placeholder="Enter First Name" />
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextLast Name">
                <Form.Label column sm="4" style={{fontWeight:"bold"}} value={lastName}
                  onChange={(e) => {setLastName(e.target.value)}}>Last Name: </Form.Label>
                  <Col sm="8">
                    <Form.Control type="text" placeholder="Enter Last Name" />
                  </Col>
              </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="4" style={{fontWeight:"bold"}} value={email}
                    onChange={(e) => {setEmail(e.target.value)}}>Email:</Form.Label>
                    <Col sm="8">
                      <Form.Control type="text" placeholder="Enter Email" />
                    </Col>
              </Form.Group>
              <Form.Group as={Row}  className="mb-3" controlId="formBasicEmail">
                <Col sm="10">
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                <Col sm="4">
                  <Button variant="secondary" type="submit button" size="lg">
                    Submit
                  </Button>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                <a href="/"className="mt-4 mb-2" > Back to the main page</a>
              </Form.Group>
            </div>
          </Form>
        </Container>
    </div>
    );
}

export default AddStudent;