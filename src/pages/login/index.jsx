import React from "react";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

const Login = () => (
    <Container>
        <Form className="box" action="" method="post">
            <h1>Login</h1>
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <Link to="/" className="btn-login">
                Wellcome
            </Link>
        </Form>
    </Container>
);

export default Login;
