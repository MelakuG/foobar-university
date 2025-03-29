import React from "react";
// import { Nav } from "react-bootstrap";
import { Button} from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Form from "./Form";
// const buttonStyle = {
//   marginLeft : '117px',
// };

const AddStudentButton = ({toggle}) =>{
    return (
      // <Nav.Link href="./addStudent.js">
      //   <Button className="mt-4 p-1 border"  variant="secondary" size="lg" >
      //     Add Student
      //   </Button>
      // </Nav.Link>
          <Button className="mt-4 p-1 border"  onClick={toggle} variant="secondary" size="lg" >
            Add Student
          </Button>
 
      // {/* {showForm && (<Form formHeader="Add Student"/>)} */}

      );
}

export default AddStudentButton