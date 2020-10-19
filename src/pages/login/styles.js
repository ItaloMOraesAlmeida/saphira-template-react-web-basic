import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  10% {
    opacity: 0.1;
    transform: scale(0.1);
  }
  20% {
    opacity: 0.2;
    transform: scale(0.2);
  }
  30% {
    opacity: 0.3;
    transform: scale(0.3);
  }
  40% {opacity: 0.4;
    transform: scale(0.4);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.5);
  }
  60% {
    opacity: 0.6;
    transform: scale(0.6);
  }
  70% {
    opacity: 0.7;
    transform: scale(0.7);
  }
  80% {
    opacity: 0.8;
    transform: scale(0.8);
  }
  90% {
    opacity: 0.9;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Morph = keyframes`
  0% {border-radius: 5px;}
  50% {border-radius: 50px;}
  100% {border-radius: 5px;}
`;

export const Container = styled.body`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #34495e;
`;

export const Form = styled.form`
    width: 400px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #191919;
    text-align: center;
    animation: ${FadeInAnimation} 500ms, ${Morph} 1s linear infinite;

    h1 {
        color: white;
        text-transform: uppercase;
        font-weight: 500;
    }

    input[type="text"],
    input[type="password"] {
        border: 0;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #3498db;
        padding: 14px 10px;
        width: 220px;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 0.25s;

        &:focus {
            width: 280px;
            border-color: #2ecc71;
        }
    }

    & .btn-login {
        border: 0;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #2ecc71;
        padding: 14px 40px;
        width: 180px;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 0.25s;
        cursor: pointer;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
            background: #2ecc71;
        }
    }
`;
