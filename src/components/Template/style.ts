import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 1fr 6fr;
    grid-template-areas:
    "head head"
    "aside body";

    width: 100vw;
    height: 100vh;
`;

export const Aside = styled.aside`
    position: fixed;
    grid-area: aside;

    place-self: center start;
`;

export const Head = styled.div`
    position: fixed;
    grid-area: head;
    
    place-self: start start;
`;

export const Body = styled.div`
    grid-area: body;

    place-self: start center;
`;

