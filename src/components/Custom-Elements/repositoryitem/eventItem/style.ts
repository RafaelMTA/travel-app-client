import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;

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
    width: 30%;

    margin: 8px;

    border: 2px solid gray;
    border-radius: 10px;
`;

export const DataContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 2fr 2fr 2fr;
    grid-template-areas: 
    "title title action"
    "description description description"
    "date_initial date_end date_remain";
`;

export const Title = styled.h1`
    grid-area: title;
    text-transform: capitalize;
`;

export const Description = styled.p`
    grid-area: description;
    text-transform: capitalize;

    place-self: center start;
`;

export const DateInitial = styled.span`
    grid-area: date_initial;
    display: flex;
    flex-flow: row nowrap;

    align-items: center;

    color: green;
`;

export const DateEnd = styled.span`
    grid-area: date_end;
    display: flex;
    flex-flow: row nowrap;

    align-items: center;

    color: red;
`;

export const DateRemain = styled.span`
    grid-area: date_remain;
    display: flex;
    flex-flow: row nowrap;

    align-items: center;
`;

export const Action = styled.span`
    grid-area: action;

    place-self: start end;

    &:hover{
        cursor: pointer;
        transition: 0.5s;
        color: red;
    }

    & .icon-item{
        width: 1.5em;
        height: 1.5em;
    }
`;

