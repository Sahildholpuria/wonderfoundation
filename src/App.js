// import logo from './logo.svg';
import './App.css';

import { Container,Form,Button } from 'react-bootstrap';

function App() {
  return (
    <Container className='p-5'>
      <h1>Registration Form</h1>
      <Form>
      <Form.Label>Partner Name</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Select</option>
      <option value="1">Adarsh Sewa Samaj</option>
      <option value="2">Sewa Sarth Samiti</option>
      <option value="3">Self</option>
      <option value="3">Jyoti Coaching Center</option>
    </Form.Select>
    <Form.Label>Course</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>Select</option>
      <option value="1">GDA Home Care</option>
      <option value="2">beautician</option>
      <option value="3">Computer Course</option>
      <option value="2">Option 1</option>
      <option value="3">Option 3</option>
    </Form.Select>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Partner Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Partner Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Candidate Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Candidate Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Father Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Father Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mother Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Mother Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="DOB" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Aadhar Card No.</Form.Label>
        <Form.Control type="number" placeholder="Enter Aadhar card no." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>WhatsApp No.</Form.Label>
        <Form.Control type="number" placeholder="Enter WhatsApp No" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Alternate No.</Form.Label>
        <Form.Control type="number" placeholder="Enter Alternate No." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email.</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registration
      </Button>
    </Form>
    </Container>
  );
}

export default App;
