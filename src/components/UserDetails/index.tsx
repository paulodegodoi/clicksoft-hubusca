import {Container, Name, Username, Location,Span, Id} from './styles'

type Props = {
    name: string
    login: string
    id?: number
    location: string
}

const UserDetails = ({name, login, id, location}: Props) => (
    <Container>
        <Name>{name}</Name>
        <Username>{login}</Username>
        {id && (
            <Span>ID#<Id>{id}</Id></Span>
        )}
        <Location>{location}</Location>
    </Container>
)

export default UserDetails