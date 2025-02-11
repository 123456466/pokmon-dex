import styled from "styled-components";

const GlobalBtn = styled.button`
    background-color: tomato;
    color: white;
    margin: 1.5vmin;
    border: 0.3vmin solid tomato;
    border-radius: 0.7vmin;
    &:hover {
        background-color: white;
        color: tomato;
        margin: 1.5vmin;
        border: 0.3vmin solid;
        border-radius: 0.7vmin;
    }
`;

export default GlobalBtn;
