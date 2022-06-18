import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: linear-gradient(120deg, #0f0c29, #302b63, #24243e);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;

    @media (max-width: 650px) {
        justify-content: flex-start;
        padding-top: 25px;
    }
`

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 30px;
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