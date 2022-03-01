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

    background: #cecece;

    outline: 0;
`;

export const Label = styled.label`
    text-transform: capitalize;
`;