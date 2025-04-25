import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({childern}) => {
    const [user,setUser] = useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {childern}
        </UserContext.Provider>
    )
}

export default UserContextProvider