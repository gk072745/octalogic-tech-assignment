import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../redux/AuthReducer/Actions'

const Signup = () => {
    const { isSignup, isError, isLoading } = useSelector((store) => store.AuthReducer)
    const navigate = useNavigate()
    const signupRef = useRef({ email: "", password: "", confirmPassword: "" })
    const dispatch = useDispatch()




    const handleSubmit = (e) => {
        e.preventDefault()
        const { email, password, confirmPassword } = signupRef.current
        if (password !== confirmPassword) {
            alert("Password is not matching with Current Password!")
        } else {
            dispatch(signup({ email, password }))
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        signupRef.current = { ...signupRef.current, [name]: value }
    }

    useEffect(() => {
        if (isSignup) {
            const { email, password } = signupRef.current
            sessionStorage.setItem("signupData", JSON.stringify({ email, password }))
            navigate("/login")
        } else if (isError) {
            alert("Signup failed, Try again!")
        }
    }, [isError, isSignup, isLoading])

    return (
        <>
            <div className='w-full flex justify-center items-center'>

                <form action="" onSubmit={handleSubmit} className='bg-primary-background p-8 rounded-sm flex flex-col gap-y-2'>

                    <h1 className="text-secondary font-custom font-primary text-md">Create an account</h1>

                    <div>
                        <label for="email" className="block mb-2 text-sm font-secondary text-gray-90">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50  text-primary-foreground rounded-md 
                   block w-full p-1.5  outline-none " placeholder="name@example.com" onChange={handleChange} required={true} />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-secondary text-gray-90">Password</label>
                        <input type="password" name="password" id="password" placeholder="•••••678" onChange={handleChange}
                            className="bg-gray-50  text-primary-foreground rounded-md 
                   block w-full p-1.5  outline-none" required={true} />
                    </div>
                    <div>
                        <label for="confirm-password" className="block mb-2 text-sm font-secondary text-gray-90">Confirm password</label>
                        <input type="confirm-password" name="confirmPassword" id="confirm-password" placeholder="••••••••" className="bg-gray-50  text-primary-foreground rounded-md 
                   block w-full p-1.5  outline-none"  onChange={handleChange} required="" />
                    </div>
                    <div className="flex items-start text-sm">
                        <div className="flex items-center h-5 relative ">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                            <label for="terms" className="ml-2 font-light text-gray-500">I accept the <Link className="font-medium text-primary-600 hover:underline" to="#">Terms and Conditions</Link></label>

                        </div>

                    </div>
                    <button type="submit" className="w-full text-secondary bg-gray-100  rounded-md p-1 mt-4 hover:bg-custom-grayBg ">Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline">Login here</Link>
                    </p>

                </form>
            </div>
        </>
    )
}

export default Signup