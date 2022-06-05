import styled from "styled-components"

export const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`

export const ProfileAvatar = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 5px solid #fff;
    transition: 1s;

    &:hover {
        cursor: pointer;
        border: 5px solid #513894;
        transform: scale(1.1);
    }
`
