import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login } = useLogin();
  const navigate = useNavigate();

  const loginUser = (event) => {
    //console.log('login user function issue');
    event.preventDefault();
    //console.log('login user function issue')
    login(email, password);
    navigate('/')
  }

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <Container className="login_cont">
      <h1>로그인</h1>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required value={email} onChange={handleData} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required value={password} onChange={handleData} />
        </Form.Group>

        <Button variant="danger" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
