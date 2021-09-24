import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Alert} from 'react-bootstrap';
import { Redirect,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { signIn } from '../redux/account/authActions';

export default function LogIn() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [error,setError]= useState()
    
    useEffect(() => {
        const userauth = localStorage.getItem('token') 
   if (userauth && userauth !== 'undefined') {
      history.push('/')
   }
    }, [])
    

    // function validateEmail() { 
    //     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if(re.test(user.email)){
    //         //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
    //         if(user.email.indexOf("@nexxbase.com", user.email.length - "@nexxbase.com".length) !== -1){
    //             //VALID
    //             console.log("VALID");
    //         }
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();
        if(user.email.includes("@nexxbase.com")){
            dispatch(signIn(user.email, user.password));
            setUser({ email: "", password: "" });
        }
        else{
            setError("Enter a valid Email");
            setInterval(() => {
                setError("")
              }, 5000)
        }
    }
  
    if (auth.email) return <Redirect to="/" />;

    return (
        <>
            <Card className="bar">
                <h1 className="font-weight-bold text-info">Noise Dashboard</h1>
                <Card.Body className="w-50" >
                    {/* <h2 className="text-center mb-4">Sign In</h2> */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                            {error && <Alert variant="danger">{error}</Alert>}
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                        </Form.Group>
                        <Button className="w-40 btn btn-dark" type='submit'>Sign In</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}