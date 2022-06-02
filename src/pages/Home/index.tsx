import React, { useContext } from "react"

import { Warning } from './styles'

import Container from "../../components/container"
import Nav from '../../components/Nav'
import UserContainer from '../../components/UserContainer'
import UserDetails from '../../components/UserDetails'

import { UserContext } from '../../context'
import BtnHistoric from "../../components/layout/buttons/btnHistoric"
import UserSearchedAvatar from "../../components/userSearchedAvatar"

const Home = () => {
    const { userData } = useContext(UserContext)
    const { name, avatar_url, login, location } = userData
    return (
        <Container>
            <BtnHistoric />
            <Nav />
                {name ? (
                    <UserContainer>
                        <UserSearchedAvatar url={avatar_url} altText={login} />
                        <UserDetails name={name} login={login} location={location} />
                    </UserContainer>
                ) : <Warning>Digite o username do GitHub</Warning>}
        </Container>
    )
}

export default Home