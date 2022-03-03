import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Hr = styled.hr`
    width: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;

    align-items: center;

    border: 1px solid black;    
    border-radius: 10px;  
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.8);
`;

export const Title = styled.h1`
    text-transform: uppercase;
    margin: 20px;
`;

export const Register = styled(Link)`
    text-decoration: none;
`;

export const SignIn = styled.button`
    width: 28em;
    height: 4em;

    border-radius: 10px;

    background-color: #28c627;
    background-image: linear-gradient(164deg, #28c627 20%, #54af3b 50%, #439c3c 100%);    

    color: white;
    text-transform: uppercase;

    margin: 20px;
    opacity: 0.9;

    &:hover{
        cursor: pointer;
        opacity: 1;
    }
`;