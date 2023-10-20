import { googleLogout, useGoogleLogin } from "@react-oauth/google"
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [profile, setProfile] = useState([])

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed: ', error)
    })

    const logOut = () => {
        googleLogout()
        setProfile(null)
    }

    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            }).then((res) => {
                setProfile(res.data)
                console.log(profile)
            }).catch((err) => console.log(err))
        }
    }, [user])

    return (
        <UserContext.Provider value={{
            user, profile, login, logOut
        }}>
            {children}
        </UserContext.Provider>
    )
}