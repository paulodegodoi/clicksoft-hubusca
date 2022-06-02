import React, { useContext } from "react"
import { useNavigate } from 'react-router-dom'

import {Container, ProfileAvatar} from './styles'

import client from '../../services/client'
import { UserContext } from '../../context'

type Props = {
    url: string
    altText: string
    login: string
}

const UserAvatar = ({url, altText, login}: Props) => {
    const navigate = useNavigate()
    const handleOnClick = (route: string) => navigate(route)

    const ctx = useContext(UserContext)

    async function getUserData(user: string) {
        try {
            const response = await client.get(`/${user}`)
            const userRepos = await client.get(`${user}/repos`)

            ctx.setUserData(response.data)
            ctx.setUserRepos(userRepos.data)

            handleOnClick("/userInfo")
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <Container onClick={() => getUserData(login)}>
            <ProfileAvatar src={url} alt={altText}/>
        </Container>
    )
}


export default UserAvatar