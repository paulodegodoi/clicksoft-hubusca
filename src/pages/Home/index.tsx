import React, { useContext } from "react"

import { Warning } from './styles'

import Container from "../../components/container"
import Nav from '../../components/Nav'
import UserContainer from '../../components/UserContainer'
import UserAvatar from '../../components/UserAvatar'
import UserDetails from '../../components/UserDetails'

import { UserContext } from '../../context'

const Home = () => {
    const { userData } = useContext(UserContext)
    return (
        <Container>
            <Nav />
                {userData?.name ? (
                    <UserContainer>
                        <React.Fragment>
                            <UserAvatar url={userData.avatar_url} altText={userData.login}/>
                            <UserDetails name={userData.name} login={userData.login} location={userData.location} />
                        </React.Fragment>
                    </UserContainer>
                ) : <Warning>Digite o username do GitHub</Warning>}
        </Container>
    )
}

export default Home