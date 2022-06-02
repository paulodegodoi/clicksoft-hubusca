import {Container, Name, Username, Location,Span, Id} from './styles'

type Props = {
    name: string
    login: string
    id?: string
    location: string
}

const UserDetails = ({name, login, id, location}: Props) => (
    <Container>
        <Name>{name}</Name>
        <Username>{login}</Username>
        <Span>id#<Id>{id}</Id></Span>
        <Location>{location}</Location>
    </Container>
)

export default UserDetails