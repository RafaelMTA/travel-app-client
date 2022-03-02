import styled from 'styled-components';
import Template from 'components/Template/index';

export const Container = styled(Template)`
    
`;

export const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;

    gap: 15px;
`; 

export const InputContainer = styled.div`
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