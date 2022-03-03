import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 5fr 10fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "image title action"
    "image arrival departure";

    width: 30em;
    height: 8em;

    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.8);

    cursor: pointer;

    &:hover{
        box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.8);
    }

    & .icon-item{
        width: 1.5em;
        height: 1.5em;        
    }
`;

export const ImageContainer = styled.img`
    grid-area: image;

    width: 90%;
    height: 85%;

    margin: 10px;

    border: 2px solid gray;
    border-radius: 10px;
`;

export const DataContainer = styled.div`
    margin: 10px;
`;

export const Title = styled.h2`
    grid-area: title;
    text-transform: capitalize;
`;

export const Arrival = styled.p`
    grid-area: arrival;
    color: green;
`;

export const Departure = styled.p`
    grid-area: departure;
    color: red;
`;

export const Action = styled.span`
    grid-area: action;

    cursor: pointer;

    &:hover{      
        transition: 0.5s;
        color: red;
    }

    & .icon-item{
        width: 1.5em;
        height: 1.5em;
    }
`;

