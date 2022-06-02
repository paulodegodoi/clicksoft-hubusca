import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const Name = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: #777;
    overflow: hidden;
`;

export const Username = styled.h2`
    font-size: 13px;
    font-weight: 500;
    color: #513894;
    margin-top: .5rem;
`;

export const Id = styled.h2`
    font-size: 13px;
    font-weight: 700;
    color: #777;
    margin-top: .5rem;
`;

export const Location = styled.p`
    width: 100%;
    margin: 10px 0;
    font-size: 12px;
    font-weight: 700;
    color: #777;
    margin-top: .5rem;
`;
