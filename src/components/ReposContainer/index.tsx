import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    RepoTitle,
    RepoInfo,
    RepoDescription,
} from "./styles";

type Props = {
    userRepos: []
}

type Repo = {
    id: number
    html_url: string
    name: string
    language: string
    description: string
}

const ReposContainer = (props: Props) => {

    return (
        <Section>
            <Title>Repositórios:</Title>
            <ListOfReposContainer>
                {(props?.userRepos).map((repo: Repo) => {

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
                            <RepoInfo>Criado em: </RepoInfo>
                            <RepoInfo>
                                Último push: 
                            </RepoInfo>
                            <RepoDescription>
                                {repo?.description}
                            </RepoDescription>
                        </Repo>
                    );
                })}
                ;
            </ListOfReposContainer>
        </Section>
    );
};

export default ReposContainer;
