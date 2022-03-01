import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;

    width: 80%;
    height: 80%;

    z-index: 100;

    background: gray;
    border-radius: 10px;
    border: 1px solid black;

    position: absolute;
`;

export const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;

    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    text-transform: uppercase;
`;

export const Close = styled.div`

    &:hover{      
        transition: 0.5s;
        color: red;
    }

    & .btn-icon{
        width: 2em;
        height: 2em;
    }
`;

export const Content = styled.div`
    overflow: auto;
`;