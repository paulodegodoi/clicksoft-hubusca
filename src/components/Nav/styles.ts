import styled from 'styled-components'

export const NavSection = styled.nav`
    width: 400px;
    height: 130px;
    background: #513894;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
        margin-top: 2rem;
        width: 90%;
    }
`

export const NavTitle = styled.h1`
    margin: 0;
    color: #fff;
    font-style: italic;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const ImgClicksoft = styled.img`
    width: 30px;
    border-radius: 15px;
    margin: auto;
`

export const NavInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    transition: 0.4s ease;

    &:focus {
        outline: none;
        width: 220px;
        transition: 0.4s ease;
    }

    @media (max-width: 650px) {
        width: 80%;
        height: 35px;
    }
`

export const NavSearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease 0.3s;

    &:hover {
        transform: scale(1.1);
        transition: ease 0.3s;
        cursor: pointer;
    }
`
