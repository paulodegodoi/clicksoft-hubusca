import { Container, NumberContainer, NumberInfo, NameInfo } from "./styles"

type Props = {
    reposNumber : number
    following: number
    followers: number
}

const UserNumber = (props: Props) => (
    <Container>
        <NumberContainer>
            <NumberInfo>{props.reposNumber}</NumberInfo>
            <NameInfo>Repositórios</NameInfo>
        </NumberContainer>
        <NumberContainer>
            <NumberInfo>{props.following}</NumberInfo>
            <NameInfo>Seguindo</NameInfo>
        </NumberContainer>
        <NumberContainer>
            <NumberInfo>{props.followers}</NumberInfo>
            <NameInfo>Seguidores</NameInfo>
        </NumberContainer>
    </Container>
)

export default UserNumber