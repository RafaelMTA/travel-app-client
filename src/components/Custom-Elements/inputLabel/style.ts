import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

export const Input = styled.input`
    width: 28em;
    height: 3em;

    border-radius: 10px;

    box-shadow: inset 2px 2px 0px 0px rgba(0,0,0,0.8);

    background: #ededed;

    outline: 0;

    padding-left: 10px;
`;

export const TextArea = styled.textarea`
    width: 31em;
    height: 10em;

    border-radius: 10px;

    box-shadow: inset 2px 2px 0px 0px rgba(0,0,0,0.8);

    background: #ededed;

    outline: 0;

    padding-left: 10px;
    padding-top: 10px;
`;

export const Label = styled.label`
    text-transform: capitalize;
    font-weight: bold;
`;