import { Section } from "./styles"

type Props = {
    children: JSX.Element[]
}

const UserContainer = (props: Props) => <Section>{props.children}</Section>

export default UserContainer
