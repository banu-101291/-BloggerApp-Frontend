import React, { useState } from 'react';
import {Button, Container, Form} from 'react-bootstrap';
//import '../styles/SignUp.css';
//import {Link,useNavigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const SignUp = () => {
    const [FormData,SetFormData] = useState({
        name:"",
        email:"",
        password:''

    })
    const navigate = useNavigate();
    const handleChange =() =>{

    }

    return(
       <Container>
        <h4>SignUp</h4>
        <Form>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={FormData.name} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={FormData.email} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={FormData.email} onChange={handleChange} required/>
            </Form.Group>
            <Button variant="primary" type="submit">Register</Button>
            <p>Already have an account</p><Link to = '/Login'>Login</Link>
        </Form>
       </Container>
    )
}




export default SignUp;