import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'

export const SignInView = () => {


    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenticatedUser(username)
    }

    return (
        <div>
            <h2>Please sign in.</h2>
            <span>Username: </span><input onChange={event => setUsername(event.target.value)} />
            <span>Password: </span><input type="password" onChange={event => setPassword(event.target.value)} />
            <button onClick={() => login()}>Login</button>
            <button onClick={() => alert(authenticatedUser)}>Display username</button>
        </div>
    )

}