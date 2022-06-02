import React, {useState, useContext} from "react"

import { FcSearch } from "react-icons/fc"

import Clicksoft from '../../img/clicksoft.jpg'

import {
    NavSection,
    NavTitle,
    ImgClicksoft,
    NavInputContainer,
    NavInput,
    NavSearchButton
} from './styles'

import client from '../../services/client'
import { UserContext } from "../../context"

const Nav = () => {
    const ctx = useContext(UserContext)
    const [nameSearched, setNameSearched] = useState('')

    async function getUserData() {
        try {
            const response = await client.get(`/${nameSearched}`)
            const userRepos = await client.get(`${nameSearched}/repos`)

            ctx.setUserData(response.data)
            ctx.setUserRepos(userRepos.data)

            setUserLocalStorage(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    interface Data {
        avatar_url: string
        name: string
        login: string
        location: string
    }

    function setUserLocalStorage({avatar_url, name, login, location}: Data) {
        const user = {
            avatar: avatar_url,
            name: name,
            login: login,
            location: location,
        }

        localStorage.setItem(`${user.login}`, JSON.stringify(user))
    }

    return (
        <NavSection>
            <ImgClicksoft src={Clicksoft} alt="Clicksoft"/>
            <NavTitle>HUBusca</NavTitle>
            <NavInputContainer>
                <NavInput value={nameSearched} onChange={e => setNameSearched(e.target.value)}/>
                <NavSearchButton onClick={getUserData}>
                    <FcSearch size={20} />
                </NavSearchButton>
            </NavInputContainer>
        </NavSection>
    )
}

export default Nav