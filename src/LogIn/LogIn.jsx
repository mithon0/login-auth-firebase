import { EmailAuthCredential, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const LogIn = () => {
  const [error, setError] = useState('');
  const [showpass, setShowpass] = useState(false);
  const [success, setSuccess] = useState('')

  const passwordShoeHeandlar = () => {
    if (showpass == false) {
      setShowpass(true);
    } else {
      setShowpass(false);

    }
  }

  //   logIn
  const logInHeandler = (event) => {
    setSuccess('');
    setError('');
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setSuccess('Login successfully');
      })
      .catch(error => {
        setError(error.message);
      })
  }
  return (
    <div>
      <h1 className='text-center'>Please LogIn</h1>
      <Form onSubmit={logInHeandler} className='w-50 mx-auto'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={showpass ? "text" : "password"} name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={passwordShoeHeandlar} type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
        <p className='text-danger'>{error}</p>
        <p className='text-success'>{success}</p>
      </Form>
    </div>
  );
};

export default LogIn;