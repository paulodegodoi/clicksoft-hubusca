import React, { useContext } from "react"

import { Warning } from './styles'

import Container from "../../components/container"
import Nav from '../../components/Nav'
import UserContainer from '../../components/UserContainer'
import UserAvatar from '../../components/UserAvatar'
import UserDetails from '../../components/UserDetails'

import { UserContext } from '../../context'
import BtnHistoric from "../../components/layout/buttons/btnHistoric"
import UserSearchedAvatar from "../../components/userSearchedAvatar"

const Home = () => {
    const { userData } = useContext(UserContext)
    return (
        <Container>
            <BtnHistoric />
            <Nav />
                {userData?.name ? (
                    <UserContainer>
                        <UserSearchedAvatar url={userData.avatar_url} altText={userData.login} />
                        <UserDetails name={userData.name} login={userData.login} location={userData.location} />
                    </UserContainer>
                ) : <Warning>Digite o username do GitHub</Warning>}
        </Container>
    )
}

export default Home