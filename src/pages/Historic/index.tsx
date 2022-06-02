import Container from '../../components/container'
import UserContainer from '../../components/UserContainer'
import UserAvatar from '../../components/UserAvatar'
import UserDetails from '../../components/UserDetails'
import TitleHistoric from '../../components/layout/titles/titleHistoric'
import BtnBack from '../../components/layout/buttons/btnBack'


const Historic = () => {
    const usersJson = Object.values(localStorage)
    const users = usersJson.map((user) => JSON.parse(user))
    
    return (
        <Container>
            <TitleHistoric />
            <BtnBack />
            <div>
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
            </div>
        </Container>
    )
}

export default Historic