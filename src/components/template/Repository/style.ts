import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`

`;

export const SearchContainer = styled.div`
    position: fixed;
    margin: 10px;
    top: 0;
    right: 0;
`;

export const Button = styled(Link)`
    position: fixed;

    background: #56ab2f;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #a8e063, #56ab2f);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #a8e063, #56ab2f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    border-radius: 50%;
    border: 1px solid black;

    bottom: 0;
    right: 0;
    margin: 30px;

    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.8);

    & .btn-icon{
        color: white;
        width: 3em;
        height: 3em;
    }
`;
