import { ReactNode } from "react";
import { Container, Footer, Link } from "./styles";

type Props = {
    children: ReactNode;
};

const MainContainer = (props: Props) => (
    <Container>
        {props.children}
        <Footer>
            Developed by{" "}
            <Link href="https://github.com/paulodegodoi" target="_blank">
                Paulo Godoi &#169;
            </Link>
        </Footer>
    </Container>
);

export default MainContainer;
