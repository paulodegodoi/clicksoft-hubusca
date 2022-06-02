import React, { useContext } from "react"

import Container from '../../components/container'
import UserContainer from "../../components/UserContainer"
import UserAvatar from "../../components/UserAvatar"
import UserDetails from "../../components/UserDetails"
import UserNumber from "../../components/UserSocialDetails"
import ReposContainer from "../../components/ReposContainer"
import { UserContext } from "../../context"

const UserInfo = () => {
    const { userData, userRepos } = useContext(UserContext)

    return (
        <Container>
            <UserContainer>
                <UserAvatar
                    url={userData.avatar_url}
                    altText={userData.login}
                    login={userData.login}
                />
                <UserDetails
                    name={userData.name}
                    login={userData.login}
                    location={userData.location}
                    id={`id#${userData.id}`}
                />
                <UserNumber
                    reposNumber={userData.public_repos}
                    following={userData.following}
                    followers={userData.followers}
                />
            </UserContainer>
            <ReposContainer userRepos={userRepos} />
        </Container>
    )
}


export default UserInfo