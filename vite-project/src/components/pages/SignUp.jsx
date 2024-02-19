// import React, { useState } from 'react';
// import {Button, Container, Form} from 'react-bootstrap';
// import './styles/SignUp.css';
// import {Link,useNavigate} from 'react-router-dom';
// //import { useNavigate } from 'react-router-dom';




// const SignUp = () => {
//     const [FormData,SetFormData] = useState({
//         name:"",
//         email:"",
//         password:''

//     })
//     const navigate = useNavigate();
//     const handleChange =() =>{

//     }

//     return(
//        <Container>
//         <h4>SignUp</h4>
//         <Form>
//             <Form.Group>
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" name="name" value={FormData.name} onChange={handleChange} required/>
//             </Form.Group>
//             <Form.Group>
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" name="email" value={FormData.email} onChange={handleChange} required/>
//             </Form.Group>
//             <Form.Group>
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" name="password" value={FormData.password} onChange={handleChange} required/>
//             </Form.Group>
//             <Button variant="primary" type="submit">Register</Button>
//             <p>Already have an account?<Link to = '/Login'>Login</Link></p>
//         </Form>
//        </Container>
//     )
// }




// export default SignUp;



import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/signUp.css';



const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you can perform the form submission, for example, sending data to a server
            console.log("Form data:", formData);

            // Clear the form after successful submission
            setFormData({
                name: "",
                email: "",
                password: ""
            });

        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error, if any
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h4>SignUp</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="custom-button">Register</Button>


                    <p>Already have an account?<Link to='/login' className="login-link">Login</Link></p>

                </Form>
            </div>
        </div>
    );
};

export default SignUp;
