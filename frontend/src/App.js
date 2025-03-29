import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import List from './components/Table';
import AddStudentButton from './components/AddStudentButton';
import { Container} from 'react-bootstrap';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import { Route, Routes,} from 'react-router-dom';


const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';
const App = () => {
  const[students, setStudents] = useState([]);
  // const[id, setId] = useState(0);
  const[firstName, setFirstName] = useState([""]);
  const[lastName, setLastName] = useState([""]);
  const[email, setEmail] = useState([""]);

  const [isClicked, setIsClicked] = useState(false);
  const [isLinkClicked, setIsLinkCliked] = useState(false);

  // const [showForm, setShowForm] = useState(false);
  // const navigate = useNavigate();

  // const handleshowForm = () =>{
  //   setShowForm(!showForm);
  // }

  // const navigateToAddStudent = () =>{
  //   navigate("/addStudent")
  // }

  // const navigateToUpdateStudent = () =>{
  //   navigate("/updateStudent")
  // }

  const toggle = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  const toggleLink = () => {
    setIsLinkCliked((isLinkClicked) => !isLinkClicked);
  };
  
  const getSavedStudents = async () => {
    try {
      const res = await axios.get(`${API_URL}/students`);
      setStudents(res.data || []);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    getSavedStudents();
  }, []);

  const handleAddStudent = async (e) => {
    // const studentToBeSaved = students.find((student) => student.id === id);
    try {
      const res = await axios.post(`${API_URL}/students`, { firstName:firstName,
      lastName:lastName, email:email });
      console.log(res);
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/students/${id}`);
      if (res.data?.deleted_id) {
        setStudents(students.filter((student) => student.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // setStudents([...students]);
 
  return (
    <div className="d-grid gap-3">
      <Header title='X-Academy Registrar' />
      {isClicked ? (<AddStudent firstName={firstName} lastName={lastName} 
                                email={email} setFirstName={setFirstName}
                                setLastName={setLastName} setEmail={setEmail} 
                                handleAddStudent={handleAddStudent}/>):(   
      <Container>
        <Routes>
          <Route path="/" element={App}/>
          <Route path="/addStudent" element={<AddStudent/>} n/>
          <Route path="/updatestudent" element={<UpdateStudent/>} n/> 
        </Routes>
       { !isLinkClicked ?(
        <>
          <AddStudentButton toggle={toggle}/>
          <List toggleLink={toggleLink} students={students} 
                getSavedStudents={getSavedStudents} 
                handleDeleteStudent={handleDeleteStudent}/> 
          </>
          ) : (
            <UpdateStudent/>
        ) }  
      </Container>
      )}
    </div>

  );
}

export default App;
