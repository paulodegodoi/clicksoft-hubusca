import { useNavigate } from "react-router-dom"

import { Btn } from "./btnBackStyles"

export default function BtnHistoric() {
    const navigate = useNavigate()
    const handleOnClick = (route: string) => navigate(route);

    return <Btn onClick={() => handleOnClick("/historic")}>Histórico</Btn>
}
