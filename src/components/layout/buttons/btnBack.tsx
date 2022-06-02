import { useNavigate } from "react-router-dom"

import { Btn } from "./btnBackStyles"

export default function BtnBack() {
    const navigate = useNavigate()
    const handleOnClick = (route: string) => navigate(route)

    return <Btn onClick={() => handleOnClick("/")}>Voltar</Btn>
}
