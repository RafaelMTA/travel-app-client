import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;

    justift-content: center;
    align-items: center;
`;

export const List = styled.ul`
    list-style: none;

    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: auto;

    gap: 30px;
`;