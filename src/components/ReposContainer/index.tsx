import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    RepoTitle,
    RepoInfo,
    RepoDescription,
    Span
} from "./styles"

import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

type Props = {
    userRepos: []
}

interface Repo {
    id: number
    html_url: string
    name: string
    language: string
    created_at: string
    pushed_at: string
    description: string
}

const ReposContainer = (props: Props) => {

    return (
        <Section>
            <Title>Repositórios:</Title>
            <ListOfReposContainer>
                {(props?.userRepos).map(({
                    id,
                    html_url,
                    name,
                    language,
                    created_at,
                    pushed_at,
                    description
                }: Repo) => {

                    const formattedCreatedAt = format(
                        new Date(created_at),
                        "dd MMM yyyy",
                        {
                            locale: ptBR
                        }
                    )
                    const formattedPushedAt = format(
                        new Date(pushed_at),
                        "dd MMM yyyy | HH:mm:ss",
                        {
                            locale: ptBR
                        }
                    )

                    return (
                        <Repo key={id}>
                            <RepoTitle href={html_url} target={"_blank"}
                            >
                                {name}
                            </RepoTitle>
                            {language ? (
                                <RepoInfo>Linguagem: <Span>{language}</Span></RepoInfo>
                            ) : <RepoInfo>Linguagem: <Span>Não definida</Span></RepoInfo>}
                            <RepoInfo>Criado em: <Span>{formattedCreatedAt}</Span></RepoInfo>
                            <RepoInfo>
                                Último push: <Span>{formattedPushedAt}</Span>
                            </RepoInfo>
                            <RepoDescription>
                                {description}
                            </RepoDescription>
                        </Repo>
                    )
                })}
            </ListOfReposContainer>
        </Section>
    )
}

export default ReposContainer
