import React, { useEffect, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/account/authActions";
// import { toast } from "react-toastify";

export default function LogIn() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  useEffect(() => {
    // eslint-disable-next-line
    const userauth = localStorage.getItem("token");
    if (userauth && userauth !== "undefined") {
      history.push("/");
    }
  }, [history]);

  function handleSubmit(e) {
    e.preventDefault();
    if (user.email.includes("@nexxbase.com")) {
      dispatch(signIn(user.email, user.password));
      setUser({ email: "", password: "" });
    } else {
      setError("Enter a valid Email");
      setInterval(() => {
        setError("");
      }, 4500);
    }
  }

  if (auth.email) return <Redirect to="/" />;

  return (
    <>
      <Card className="bar">
        <h1 className="font-weight-bold text-info">Noise Dashboard</h1>
        {auth.error && (
          <Alert variant="danger" dismissible="true">
            {auth.error}
          </Alert>
        )}
        <Card.Body className="w-50">
          {/* <h2 className="text-center mb-4">Sign In</h2> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
              {error && <Alert variant="warning">{error}</Alert>}
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </Form.Group>
            <Button className="w-40 btn btn-dark" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
