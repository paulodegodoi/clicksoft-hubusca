import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    RepoTitle,
    RepoInfo,
    RepoDescription,
} from "./styles";

import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

type Props = {
    userRepos: []
}

type Repo = {
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
                {(props?.userRepos).map((repo: Repo) => {

                    const formattedCreatedAt = format(
                        new Date(repo.created_at),
                        "dd MMM yyyy",
                        {
                            locale: ptBR
                        }
                    )
                    const formattedPushedAt = format(
                        new Date(repo.pushed_at),
                        "dd MMM yyyy | HH:mm:ss",
                        {
                            locale: ptBR
                        }
                    )

                    return (
                        <Repo key={repo?.id}>
                            <RepoTitle
                                onClick={() =>
                                    (window.location.href = `${repo.html_url}`)
                                }
                            >
                                {repo.name}
                            </RepoTitle>
                            <RepoInfo>Linguagem: {repo.language}</RepoInfo>
                            <RepoInfo>Criado em: {formattedCreatedAt}</RepoInfo>
                            <RepoInfo>
                                Último push: {formattedPushedAt}
                            </RepoInfo>
                            <RepoDescription>
                                {repo?.description}
                            </RepoDescription>
                        </Repo>
                    )
                })}
            </ListOfReposContainer>
        </Section>
    )
}

export default ReposContainer
