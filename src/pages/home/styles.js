import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    color: #000;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled(Link)`
    width: 120px;
    height: 50px;

    border-radius: 20px;
    font-size: 20px;
    text-decoration: none;
    color: #000;
    background: #3ac5d2;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
        background: #5beaf7;
    }
`;
