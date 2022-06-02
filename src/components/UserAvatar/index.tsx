import React from 'react';
import { useNavigate } from 'react-router-dom';

import {Container, ProfileAvatar} from './styles';

type Props = {
    url: string;
    altText: string;
}

const UserAvatar = (props: Props) => {
    const navigate = useNavigate();
    const handleOnclick = (route: string) => navigate(route)
    
    return (
        <Container onClick={() => handleOnclick('/userInfo')}>
            <ProfileAvatar src={props.url} alt={props.altText}/>
        </Container>
    )
}


export default UserAvatar