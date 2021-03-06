import styled from "styled-components"

export const Section = styled.section`
    width: 500px;
    background-color: #f0f4f5;
    border-bottom: 10px solid #513894;
    border-radius: 10px;
    margin-top: -15px;
    padding-bottom: 10px;

    @media (max-width: 650px) {
        width: 90%;
        height: 45%;
    }
`

export const Title = styled.h1`
    font-weight: 700;
    margin-top: 10px;
    text-align: center;
`

export const ListOfReposContainer = styled.div`
    height: 250px;
    margin: 10px;
    padding: .5rem;
    overflow-y: scroll;

    @media (max-width: 650px) {
        height: 85%;
    }
`

export const Repo = styled.div`
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    margin-bottom: 5px;
    box-shadow: 1px 1px 2px black;
    overflow: hidden;

    @media (max-width: 650px) {
        padding: 0 15px;
        margin-bottom: 12px;
        transform: scale(1.03);
    }
`

export const RepoTitle = styled.a`
    font-size: 18px;
    width: 100%;
    color: #444;
    font-weight: 700;
    margin-top: .5rem;
    overflow: hidden;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: #513894;
        text-decoration: underline;
    }
`

export const RepoInfo = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: #444;
    width: 50%;
    overflow: hidden;
    margin-top: 5px;
`

export const RepoDescription = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #444;
    width: 100%;
    height: 30px;
    margin-top: 5px;
    line-height: 1.2;
    margin-top: 10px;
`

export const Span = styled.span`
    color: #513894;
    font-weight: 700;
`