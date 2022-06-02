import { JsxElement } from 'typescript'
import { Container } from './styles'

type Props = {
    children: JSX.Element | JSX.Element[]
}

const MainContainer = (props: Props) => (
    <Container>{props.children}</Container>
)

export default MainContainer