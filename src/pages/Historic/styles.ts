import styled from "styled-components"

export const HistoricContainer = styled.div`
    height: auto;
    height: 400px;
    width: 550px;
    background: #302b63;
    /* padding: 1rem; */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    @media (max-width: 650px) {
        width: 90%;
        height: 70%;
    }
`