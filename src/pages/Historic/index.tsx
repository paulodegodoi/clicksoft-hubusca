import Container from '../../components/container'
import UserContainer from '../../components/UserContainer'
import UserAvatar from '../../components/UserAvatar'
import UserDetails from '../../components/UserDetails'


const Historic = () => {
    const usersJson = Object.values(localStorage);
    const users = usersJson.map((user) => JSON.parse(user));
    console.log(users)
    return (
        <Container>
            {users.map((user, index) => {
                return (
                    <UserContainer key={index}>
                        <UserAvatar
                            url={user.avatar}
                            altText={user.login}
                            login={user.login}
                        />
                        <UserDetails
                            name={user.name}
                            login={user.login}
                            location={user.location}
                        />
                    </UserContainer>
                )
            })}
        </Container>
    )
}

export default Historic