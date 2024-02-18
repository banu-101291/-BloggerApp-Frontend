import React from 'react';
import { Container,Form } from 'react-bootstrap';


const Login = () => {
  
  const [FormData,SetFormData] = useState({

  email:"",
  password:''

})
const handleChange =() =>{

}
  return(
    <Container>
      <h4>Login</h4>
    <Form>
     <Form.Group>
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name="email"  value={FormData.name} onChange={handleChange} required/>
    </Form.Group>
    <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password"  value={FormData.name} onChange={handleChange} required/>
    </Form.Group>
</Form>
</Container>
  )
}



export default Login;