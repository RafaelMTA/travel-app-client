import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 20px;
`;

export const Input = styled.input`
    width: 28em;
    height: 3em;

    padding-left: 35px;
    border-radius: 5px;

    outline: 0;

    border: 1px solid black;

    box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.8);
`;

export const Icon = styled.div`
    padding-left: 10px;
    position: absolute;
`;

export const Button = styled.button`
    cursor: pointer;
    width: 3em;
    height: 3em;
    box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.8);
    opacity: 0.9;
    border: 0;
    border-radius: 0px 10px 10px 0px;
    outline: 0;

    color: white;
    transition: .5s;

    &:hover{
        opacity: 1;
    }
`;
