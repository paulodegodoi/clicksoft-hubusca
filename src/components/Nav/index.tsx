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
            ctx.setUserData(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <NavSection>
            <ImgClicksoft src={Clicksoft} />
            <NavTitle>HUBusca 
            </NavTitle>
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