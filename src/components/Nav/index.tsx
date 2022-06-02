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

const Nav = () => {
    return (
        <NavSection>
            <ImgClicksoft src={Clicksoft} />
            <NavTitle>HUBusca 
            </NavTitle>
            <NavInputContainer>
                <NavInput/>
                <NavSearchButton>
                    <FcSearch size={20} />
                </NavSearchButton>
            </NavInputContainer>
        </NavSection>
    )
}

export default Nav