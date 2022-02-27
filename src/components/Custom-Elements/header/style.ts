import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;

    width: 100vw;
    height: 10vh;

    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    justify-content: space-between;

    border-radius: 0px 5px;
`;

export const ContainerHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;

    width: 20%;

    align-items: center;

    cursor: pointer;
`;

export const ContainerSearch = styled.div`
    
`;

export const Logo = styled.img`
    border-radius: 10px;
    border: 2px solid white;

    width: 30%;
    height: 100%;
`;

export const Title = styled.h1`
    padding-left: 10px;
    color: white;
`;