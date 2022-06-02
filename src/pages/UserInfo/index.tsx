import React, { useContext } from "react"

import Container from '../../components/container'
import ReposContainer from "../../components/ReposContainer"
import { UserContext } from "../../context"

const UserInfo = () => {
    const { userData, userRepos } = useContext(UserContext)

    return (
        <Container>
            <ReposContainer userRepos={userRepos} />
        </Container>
    )
}


export default UserInfo