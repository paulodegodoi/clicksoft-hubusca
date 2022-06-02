import React, {useState, createContext, ReactNode} from "react";

type Props = {
    children: ReactNode
}

export const UserContext = createContext([] as any);

export const UserContextProvider = (props: Props) => {
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState({});

    return (
        <UserContext.Provider value={{
            userData,
            userRepos,
            setUserData,
            setUserRepos
        }}>
            {props.children}
        </UserContext.Provider>
    )
}