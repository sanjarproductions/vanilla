import { useEffect, useState } from 'react'
import instance from "../../api/axios"
import { useNavigate } from 'react-router-dom';
import "./Login.css"

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [isloading, setIsLoading] = useState(false)

    function submitForm(e) {
        e.preventDefault()

        setIsLoading(true)
        instance.post("/auth/login", {
            username,
            password
        })
            .then(response => {
                localStorage.setItem("admin-auth-token", response.data.token);
                setIsLoading(false)
                toast.success("Success")
                navigate("/admin")
            })
            .catch(err => {
                console.log(err)
                toast.error(err.response.data.message)
                setIsLoading(false)
            })
        setUsername("")
        setPassword("")
    }

    useEffect(() => {
        if (localStorage.getItem("admin-auth-token")) {
            navigate("/admin")
        }
    }, [])

    return (
        <div className='admin'>
            <div className="container">
                <div className="flex">
                    <div className="inputs wrapper">
                        <h1>Login</h1>
                        <form className='admin-form' onSubmit={submitForm}>
                            <input value={username} type="text" placeholder='Enter Username' className='username-input' onChange={(e) => setUsername(e.target.value)} required />
                            <div className='flex password-wrapper'>
                                <input value={password} type={passwordVisible ? "text" : "password"} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
                                {passwordVisible ? <FaEyeSlash onClick={() => setPasswordVisible(false)} /> : <FaEye onClick={() => setPasswordVisible(true)} />}
                            </div>
                            <button disabled={isloading ? true : false} className='submit-btn'>
                                {isloading ? <AiOutlineLoading className='loading-spin' /> : "Login"}
                            </button>
                        </form>
                    </div>
                    <img src="https://midoshriks-school.netlify.app/assets/sing/imgs/login-form-img.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
