import styled from "styled-components"

export const Section = styled.section`
    width: 500px;
    height: auto;
    background-color: #f0f4f5;
    border-radius: 10px;
    margin-top: .3rem;
    padding: 10px 5px;
    display: flex;
    flex-wrap: wrap;
    border-top: 10px solid #513894;
    
    @media (max-width: 650px) {
        width: 90%;
    }
`