import React, { useEffect } from 'react'
import logout from "../assets/logout.svg"
import logo from "../assets/logo.svg"
import home from "../assets/home.svg"
import courses from "../assets/course.svg"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout as logoutFc } from '../redux/AuthReducer/Actions'

const Navbar = () => {
    const isLogin = useSelector((store) => store.AuthReducer.isLogin)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = (e) => {
        dispatch(logoutFc())
    }

    return (
        <div>
            <aside id="sidebar"
                className="sticky left-0 top-20 z-40 h-full w-24 transition-transform" aria-label="Sidebar">
                <div className="bg-primary-background  text-primary-foreground flex justify-between items-center h-full flex-col border-r py-2">

                    <div className='flex items-center gap-y-12 flex-col justify-between '>

                        <div className='cursor-pointer' onClick={() => navigate("/")}>
                            <img src={logo} alt="logo" />
                        </div>


                        <div className='flex items-center gap-y-4 flex-col  cursor-pointer justify-between '>
                            <div onClick={() => navigate("/")} className='flex items-center flex-col bg-custom-pinkBg hover:bg-pink-200 w-[72px] h-[50px] p-1 rounded-md'>
                                <img src={home} alt="dashboard" />
                                <p className='font-custom font-secondary text-xs text-pink-800'>Home</p>
                            </div>

                            <div onClick={() => navigate("/courses")} className='flex items-center flex-col cursor-pointer bg-custom-grayBg hover:bg-gray-300 w-[72px] h-[50px] p-1 rounded-md'>
                                <img src={courses} alt="courses" />
                                <p className='font-custom font-secondary text-xs'>Courses</p>
                            </div>
                        </div>
                    </div>

                    {
                        isLogin && <div onClick={handleLogout} className='flex items-center flex-col cursor-pointer hover:bg-gray-100 w-[72px] h-[50px] p-1 rounded-md' >
                            <img src={logout} alt="Logout" />
                            <p className='font-custom font-secondary text-xs'>Logout</p>
                        </div>
                    }
                </div>
            </aside >
        </div >

    )
}

export default Navbar