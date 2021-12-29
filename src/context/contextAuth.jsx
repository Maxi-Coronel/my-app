import React from "react"

const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}