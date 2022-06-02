import styled from "styled-components";

export const Btn = styled.button`
    width: 100px;
    padding: 10px 0;
    border: none;
    border-radius: 20px;
    font-size: 1.2rem;
    color: #000;
    background-color: #fff;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #ccc;
        transform: scale(1.1);
    }
`;
