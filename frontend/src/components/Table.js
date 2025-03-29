import React from "react";
import { Table } from "react-bootstrap";
// import Nav from 'react-bootstrap/Nav';


const List = ({students, toggleLink, handleDeleteStudent}) =>{
    return (
        <Table className='mt-4 p-1 bg-light border' striped bordered hover variant="bg-gray">
          <thead>
            <tr>
              <th className="text-center">First Name</th>
              <th className="text-center">Last Name</th>
              <th className="text-center">Email</th>
              <th className="text-center" colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
          {students.map((student, i) => (
            <tr key={i}>
              <td className="text-center">{student.FirstName}</td>
              <td className="text-center">{student.LastName}</td>
              <td className="text-center">{student.Email}</td>
              <td className="text-center">
                <a href="/components/UpdateStudent" onClick={toggleLink}>Update</a>{'  '}|{'  '}
                <a href=" " type="link" onClick={() =>handleDeleteStudent(student.id)}>Delete</a>  
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
      );
}

export default List;

