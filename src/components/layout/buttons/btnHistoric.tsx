import { Btn } from "./btnBackStyles";

import React from "react";
import { useNavigate } from "react-router-dom";

export default function BtnHistoric() {
    const navigate = useNavigate();
    const handleOnClick = (route: string) => navigate(route);

    return <Btn onClick={() => handleOnClick("/historic")}>Histórico</Btn>;
}
