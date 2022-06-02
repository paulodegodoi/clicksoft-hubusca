import styled from "styled-components";

export const Section = styled.section`
    width: 400px;
    height: auto;
    background-color: #f0f4f5;
    border-bottom: 10px solid #513894;
    border-radius: 10px;
    margin-top: -15px;
    padding-left: 15px;
    padding-bottom: .5rem;
`;

export const Title = styled.h1`
    font-weight: 700;
    margin-top: 10px;
    text-align: center;
`;

export const ListOfReposContainer = styled.div`
    height: 300px;
    margin-top: 1rem;
    overflow-y: scroll;
`;

export const Repo = styled.div`
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: .5rem;
    padding: 10px 10px 20px 10px;
    padding-top: 0;
    margin-bottom: 10px;
    overflow: hidden;
    box-shadow: 1px 1px 2px black;
`;

export const RepoTitle = styled.h2`
    font-size: 18px;
    width: 100%;
    margin-top: .5rem;
    overflow: hidden;

    &:hover {
        cursor: pointer;
        color: #513894;
        text-decoration: underline;
    }
`;

export const RepoInfo = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: #777;
    width: 50%;
    overflow: hidden;
    margin-top: 5px;
`;

export const RepoDescription = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #777;
    width: 100%;
    height: 30px;
    margin-top: 5px;
    line-height: 1.2;
    margin-top: 10px;
`;
