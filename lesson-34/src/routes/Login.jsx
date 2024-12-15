import { useState } from 'react'
import axios from "axios"

const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "", })

    //"john@mail.com",
    //"changeme"

    function submit(e) {
        e.preventDefault()

        axios.post("https://api.escuelajs.co/api/v1/auth/login", userData)
            .then(response => console.log(response.data))
            .catch(err => console.log(err))

        console.log(userData)
    }

    return (
        <>
            <form onSubmit={submit}>
                <input type="email" required placeholder='Email' onChangeCapture={e => setUserData({ email: e.target.value, password: userData.password })} />
                <input type="password" required placeholder='Password' onChangeCapture={e => setUserData({ email: userData.email, password: e.target.value })} />
                <button>Login</button>
            </form>
        </>
    )
}

export default Login
