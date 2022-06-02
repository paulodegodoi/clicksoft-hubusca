import styled from "styled-components";

export const Section = styled.section`
    width: 400px;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    border-bottom: 10px solid #513894;
    margin-top: 15px;
    padding: 0px 20px 30px 35px;

    @media (max-height: 430px) {
        height: 300px;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`;

export const ListOfReposContainer = styled.div`
    height: 350px;
    padding: 10px;
    overflow-y: scroll;
`;

export const Repo = styled.div`
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
`;

export const RepoTitle = styled.h2`
    font-size: 16px;
    width: 100%;
    overflow: hidden;
    color: #444;

    &:hover {
        cursor: pointer;
        color: #777;
        text-decoration: underline;
    }
`;

export const RepoInfo = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #777;
    width: 50%;
    font-weight: 700;
    overflow: hidden;
    margin-top: 5px;
`;

export const RepoDescription = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #777;
    width: 100%;
    height: 30px;
    overflow: hidden;
    /* line-height: 1.3; */
    margin-top: 10px;
`;
