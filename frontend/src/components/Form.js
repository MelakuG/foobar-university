import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col} from "react-bootstrap";

const AddForm = ({formHeader}) => {
    return(
        <Form className="mt-4 p-1 bg-light border">
          <div className="mt-4 row gx-0 col-4" style={{padding:"0rem"}}>
            <Form.Group as={Row} className="mb-3"controlId="formPlaintextFirst Name">
              <p className="mr-0 mb-4" style={{fontSize:25, fontWeight:"bold"}}>{formHeader}</p>
              <Form.Label className="mr-0" column sm="4" style={{fontWeight:"bold"}}>First Name:</Form.Label>
                <Col sm="8">
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextLast Name">
              <Form.Label column sm="4" style={{fontWeight:"bold"}}>Last Name: </Form.Label>
                <Col sm="8">
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Col>
            </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="4" style={{fontWeight:"bold"}}>Email:</Form.Label>
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
                <Button  variant="secondary" type="submit" size="lg">
                  Save
                </Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                <Link className="mt-4 mb-2" to={"/"}> Back to the main page</Link>
            </Form.Group>
          </div>
      </Form>
    );

}

export default AddForm;