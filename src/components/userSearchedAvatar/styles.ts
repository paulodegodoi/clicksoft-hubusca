import styled from "styled-components";

export const ContainerSearch = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`;

export const ProfilePictureSearch = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 5px solid #fff;
    transition: 1s;

    &:hover {
        cursor: pointer;
        border: 5px solid #ff7a00;
        transform: scale(1.1);
    }
`;
