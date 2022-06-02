import { Container, NumberContainer, NumberInfo, NameInfo } from "./styles"

type Props = {
    reposNumber : number
    following: number
    followers: number
}

const UserNumber = ({reposNumber, following, followers}: Props) => (
    <Container>
        <NumberContainer>
            <NumberInfo>{reposNumber}</NumberInfo>
            <NameInfo>Repositórios</NameInfo>
        </NumberContainer>
        <NumberContainer>
            <NumberInfo>{following}</NumberInfo>
            <NameInfo>Seguindo</NameInfo>
        </NumberContainer>
        <NumberContainer>
            <NumberInfo>{followers}</NumberInfo>
            <NameInfo>Seguidores</NameInfo>
        </NumberContainer>
    </Container>
)

export default UserNumber