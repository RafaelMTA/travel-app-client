import styled from 'styled-components';

const iconClassName = 'icon-item';

export const NavContainer = styled.nav`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 100vh;

    & span{
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
    }

    & .${iconClassName}{
        width: 2em;
        height: 2em;
    }

    & p {        
        font-size: 1.2em;
        padding-left: 0.7em;
    }
`;

export const NavBody = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 80vh;
    background-color: black;
    width: 4.1em;

    border-radius: 0 10px 20px 0;

    justify-content: space-between;

    transition: 0.5s;
    overflow-x: hidden;

    &:hover{
        width: 15em;
    }
`;

export const NavList = styled.div`

`;

export const NavFooter = styled.div`

`;