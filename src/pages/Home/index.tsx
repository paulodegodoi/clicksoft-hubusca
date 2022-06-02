import React, { useContext } from "react"

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
            <UserContainer>
            <UserAvatar url={userData.avatar_url} altText={userData.login}/>
            <UserDetails name={userData.name} login={userData.login} location={userData.location} />
            </UserContainer>
        </Container>
    )
    }

export default Home