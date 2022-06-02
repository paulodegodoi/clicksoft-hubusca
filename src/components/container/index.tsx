import { ReactNode } from 'react'
import { Container } from './styles'

type Props = {
    children: ReactNode
}

const MainContainer = (props: Props) => (
    <Container>{props.children}</Container>
)

export default MainContainer