import React from "react";
import { FiArrowRight } from "react-icons/fi";
// import { Button } from "react-bootstrap";

import { Container, Button } from "./styles";

const Home = () => (
    <Container>
        {/* <Button variant="primary">Teste</Button> */}
        <Button to="/login">
            <strong>LOGIN</strong>
            <FiArrowRight size={30} color="#000" />
        </Button>
    </Container>
);

export default Home;
