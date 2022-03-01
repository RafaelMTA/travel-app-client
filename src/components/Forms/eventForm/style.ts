import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

export const Form = styled.form`

`; 

export const InputContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;

    padding-bottom: 15px;
`;

export const Button = styled.button`
    width: 28em;
    height: 4em;

    border-radius: 10px;
    cursor: pointer;

    color: white;
    letter-spacing: 5px;    

    background: linear-gradient(to top right, #00cc00 11%, #66ff66 100%);

    &:hover{
        background: linear-gradient(to top right, #33cc33 30%, #99ff66 96%);
    }
`;