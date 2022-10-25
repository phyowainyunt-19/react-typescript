import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    // explicitly specify the type for useState
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'PWN',
            email: 'pwn@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {user?.name && user?.email ? <><div>User name is {user.name}.</div>
                <div>User email is {user.email} .</div></> : 'Logged out!'}

        </div>
    )
}

export default User