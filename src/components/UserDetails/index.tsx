import React from 'react'

import {Container, Name, Username, Location, Id} from './styles'

type Props = {
    name: string;
    login: string;
    id?: number;
    location: string;
}

const UserDetails = ({name, login, id, location}: Props) => (
    <Container>
        <Name>{name}</Name>
        <Username>{login}</Username>
        <Id>{id}</Id>
        <Location>{location}</Location>
    </Container>
)

export default UserDetails