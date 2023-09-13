import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login, signup } from '../redux/AuthReducer/Actions'

const Login = () => {

    const { isLogin, isError, isLoading } = useSelector((store) => store.AuthReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }


    useEffect(() => {
        let autofill = JSON.parse(sessionStorage.getItem("signupData"))
        setEmail(autofill.email)
        setPass(autofill.password)

    }, [])

    useEffect(() => {
        if (isLogin) {
            navigate("/")
        } else if (isError) {
            alert("Login failed, try again!")
        }

    }, [isError, isLogin, isLoading])


    return (
        <>
            <div className='w-full flex justify-center items-center'>

                <form action="" onSubmit={handleSubmit} className='bg-primary-background p-8 rounded-sm flex flex-col gap-y-2'>

                    <h1 className="text-secondary font-custom font-primary text-md">Login Dashboard</h1>

                    <div>
                        <label for="email" className="block mb-2 text-sm font-secondary text-gray-90">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50  text-primary-foreground rounded-md 
                   block w-full p-1.5  outline-none " placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-secondary text-gray-90">Password</label>
                        <input type="password" name="password" id="password" placeholder="•••••678" value={password} onChange={(e) => setPass(e.target.value)}
                            className="bg-gray-50  text-primary-foreground rounded-md 
                   block w-full p-1.5  outline-none" required={true} />
                    </div>

                    <div className="flex items-start text-sm">
                        <div className="flex items-center h-5 relative ">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                            <label for="terms" className="ml-2 font-light text-gray-500">I accept the <Link className="font-medium text-primary-600 hover:underline" to="#">Terms and Conditions</Link></label>

                        </div>

                    </div>
                    <button type="submit" className="w-full text-secondary bg-gray-100  rounded-md p-1 mt-4 hover:bg-custom-grayBg ">Login</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        New User? <Link to="/signup" className="font-medium text-primary-600 hover:underline">Signup here</Link>
                    </p>

                </form>
            </div>
        </>
    )


}

export default Login