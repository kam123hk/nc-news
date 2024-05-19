import { createContext, useState } from "react";

export const LoginContext = createContext()

function LoginProvider({ children }) {
    const [user, setUser] = useState('');

    return (
        <LoginContext.Provider value={{user, setUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;