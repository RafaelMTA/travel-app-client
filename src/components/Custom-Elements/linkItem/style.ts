import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    text-decoration: none;
    color: white;

    opacity: 0.7;
    margin: 0.5em;

    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

export const Text = styled.span`
    font-size: 0.9em;
    padding-left: 0.7em;
`;