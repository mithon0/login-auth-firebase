import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {getAuth} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth"

const auth =getAuth(app);





const Register = () => {
    const [error,setError]=useState('');
    const [success,setSuccsess]=useState('');
    const [showpass,setShowpass]=useState(false);
// signUp with Google  and git hub
const googleProvider = new GoogleAuthProvider();
const gitHuProvider = new GithubAuthProvider();
const googleHeandler =()=>{
  setSuccsess('');
  signInWithPopup(auth,googleProvider)
.then(result=>{
  const user =result.user;
  console.log(user);
  setSuccsess('User register Successfully');
  setError('');
})
.catch(error=>{
  setError(error.message);
})
};
const gitHubHeandler =()=>{
  setSuccsess('');
    signInWithPopup(auth ,gitHuProvider)
    .then(result =>{
      const gitUser =result.user;
      console.log(gitUser);
      setSuccsess('User register Successfully');
      setError('');
    })
    .catch(error=>{
      setError(error.message);
    })
}

    // signUp with email password 
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

    const passwordShoeHeandlar =()=>{
      if(showpass ==false){
        setShowpass(true);
      }else{
        setShowpass(false);
      }
    }
    // const passHeandler =event=>{
    //     // console.log(event.target.value);
    // }
    // const emailHeandler=event=>{
    //     // console.log(event.target.value);
    // }
    return (
        <div>
          <h3 className='text-center'>Please register here!</h3>
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
        <Form.Control  type={showpass ?"text":"password"} name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onChange={passwordShoeHeandlar} type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p className='text-danger'>{error}</p>
      <p className='text-success'>{success}</p>
    </Form>
      <h1 className='text-center'>Or</h1>
    <hr className='w-25 mx-auto p-2' />
   <div className='w-75 h-25 mx-auto align-center text-center'>
   <button onClick={googleHeandler} className='w-25 h-25 rounded'> <img className='w-25' src="https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome-thumbnail.png" alt="" /> Sign up With Google!</button>
   <button onClick={gitHubHeandler} className='w-25 h-25 ms-4 rounded'> <img className='w-25' src="https://w7.pngwing.com/pngs/899/228/png-transparent-git-github-hub-icon-social-network-icon-thumbnail.png" alt="" /> Sign up With GitHub!</button>
   </div>
        </div>
    );
};

export default Register;