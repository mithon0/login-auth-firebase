import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {getAuth} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const auth =getAuth(app);

const Register = () => {
    const [error,setError]=useState('');
    const [success,setSuccsess]=useState('');
    const submiteHeandler=event=>{ 
        setSuccsess('');
        event.preventDefault();
        const email =event.target.email.value;
        const password =event.target.password.value;
       

        // firebase setup 
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser);
            setSuccsess('User register Successfully')
            setError('');
        })
        .catch(error =>{
            console.error(error.message);
            setError(error.message);
        })
    }


    // const passHeandler =event=>{
    //     // console.log(event.target.value);
    // }
    // const emailHeandler=event=>{
    //     // console.log(event.target.value);
    // }
    return (
        <div>
             <Form onSubmit={submiteHeandler} className='w-50 mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p className='text-danger'>{error}</p>
      <p className='text-success'>{success}</p>
    </Form>
    
        </div>
    );
};

export default Register;