import React, {useState, createContext, ReactNode} from "react";

type Props = {
    children: ReactNode
}

// interface UserContextType {
//     userData: Object,
//     setUserData: Object
// }

// interface User {
//     login: string
//     id: number
//     avatar_url: string
// }

export const UserContext = createContext([] as any);

export const UserContextProvider = (props: Props) => {
    const [userData, setUserData] = useState({});

    return (
        <UserContext.Provider value={{
            userData,
            setUserData
        }}>
            {props.children}
        </UserContext.Provider>
    )
}