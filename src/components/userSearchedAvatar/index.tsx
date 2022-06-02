import { useNavigate } from "react-router-dom";

import { ContainerSearch, ProfilePictureSearch } from "./styles";

type Props = {
    url: string
    altText: string
}

const UserSearchedAvatar = (props: Props) => {
    const navigate = useNavigate();
    const handleOnClick = (route: string) => navigate(route);

    return (
        <ContainerSearch onClick={() => handleOnClick("/userInfo")}>
            <ProfilePictureSearch src={props.url} alt={props.altText} />
        </ContainerSearch>
    )
}

export default UserSearchedAvatar
