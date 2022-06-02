import { useNavigate } from "react-router-dom"

import { ContainerSearch, ProfilePictureSearch } from "./styles"

type Props = {
    url: string
    altText: string
}

const UserSearchedAvatar = ({url, altText}: Props) => {
    const navigate = useNavigate();
    const handleOnClick = (route: string) => navigate(route)

    return (
        <ContainerSearch onClick={() => handleOnClick("/userInfo")}>
            <ProfilePictureSearch src={url} alt={altText} />
        </ContainerSearch>
    )
}

export default UserSearchedAvatar
