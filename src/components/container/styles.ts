import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: linear-gradient(120deg, #0f0c29, #302b63, #24243e);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 650px) {
        padding-top: 2rem;
        justify-content: flex-start;
    }
`

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 50px;
    color: #fff;
    text-align: center;

    @media (max-width: 650px) {
        height: 30px;
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: #fff;
    font-weight: 700;
`