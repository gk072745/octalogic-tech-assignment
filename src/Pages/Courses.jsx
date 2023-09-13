import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'
import { getCourses } from '../redux/CourseReducer/Actions'
import searchIcon from "../assets/search.svg"
import plus from "../assets/plus.svg"
import tripalDot from "../assets/tripalDot.svg"
import tripalDotC from "../assets/thripalDotC.svg"


import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



const Courses = () => {
    const { courses, isError, isLoading } = useSelector((store) => store.CourseReducer)
    const dispatch = useDispatch()
    const [course, setCoruses] = useState([])
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch((prev) => e.target.value)

        dispatch(getCourses(search))
    }

    const handleSearch = (e) => {
        dispatch(getCourses(search))
    }





    useEffect(() => {
        dispatch(getCourses())
    }, [])


    return (
        <div className='w-full'>

            <div className='flex gap-y-8 flex-col item-center m-6'>

                <div className='flex flex-col gap-6 '> {/* Add w-full class here */}
                    <h1 className='text-primary-foreground font-custom font-primary text-lg'>
                        Overview
                    </h1>
                    <div className='flex flex-col gap-6 '> {/* Add w-full class here */}
                        <div className='flex justify-between'>
                            <h2 className='text-primary-foreground font-custom font-primary text-default'>
                                LATEST ENROLMENTS
                            </h2>
                            <div className='flex text-center gap-x-2 bg-white py-1 rounded-sm border border-grey-100 items-center px-3'>
                                <img onClick={() => handleSearch} src={searchIcon} alt="" />
                                <input onChange={handleChange} value={search} type="text" className='outline-none font-custom text-xs placeholder:text-xs placeholder:font-custom ' placeholder='Search' />
                            </div>

                        </div>

                        <div className='p-4 bg-white rounded-md'>
                            <Table>
                                <TableHeader>
                                    <TableRow >
                                        <TableHead className="text-secondary font-custom font-primary text-left">Name</TableHead>
                                        <TableHead className="text-secondary font-custom font-primary  w-[100px] ">Description</TableHead>
                                        <TableHead className="text-secondary font-custom font-primary ">Instructor</TableHead>
                                        <TableHead className="text-secondary font-custom font-primary ">Instrument</TableHead>
                                        <TableHead className="text-secondary font-custom font-primary ">Day of Week</TableHead>
                                        <TableHead className="text-secondary font-custom font-primary ">Num. of Student</TableHead>
                                        <TableHead className="text-secondary font-custom font-primary ">Price</TableHead>
                                        <TableHead className="text-secondary font-custom font-primary ">Status</TableHead>
                                        <TableHead className="text-secondary font-custom font-primary text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        courses?.map(({ courseName, description, instructor, instrument, dayOfWeek, numberOfStudents, price, status }, ind) => {

                                            return <TableRow key={ind}>
                                                <TableCell className="text-secondary font-custom font-secondary   text-left">
                                                    {courseName}

                                                </TableCell>
                                                <TableCell className="text-secondary font-custom font-secondary truncate">
                                                    <p class="truncate w-24 mr-6">{description}</p>
                                                </TableCell>
                                                <TableCell className="text-secondary font-custom font-secondary">
                                                    {instructor}
                                                </TableCell>
                                                <TableCell className="text-secondary font-custom font-secondary">
                                                    {instrument}
                                                </TableCell>
                                                <TableCell className="text-secondary font-custom font-secondary">
                                                    {dayOfWeek}
                                                </TableCell>
                                                <TableCell className="text-secondary font-custom font-secondary">
                                                    {numberOfStudents}
                                                </TableCell>
                                                <TableCell className="text-secondary font-custom font-secondary">
                                                    {price}
                                                </TableCell>
                                                <TableCell className="text-secondary font-custom font-secondary text-center">
                                                    {
                                                        status === "Archived" ?
                                                            <p className="text-xs text-primary-foreground py-0.5 rounded-sm bg-custom-archived">{status}</p> :
                                                            status === "Active" ?
                                                                <p className="text-xs text-primary-foreground py-0.5 rounded-sm bg-custom-active">{status}</p> :

                                                                <p className="text-xs text-primary-foreground py-0.5 rounded-sm bg-custom-closed">{status}</p>

                                                    }
                                                </TableCell>
                                                <TableCell className="text-secondary font-custom font-secondary flex justify-center">
                                                    {
                                                        status === "Closed" ? <img src={tripalDotC} alt="" /> :
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <img src={tripalDot} alt="" />
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-40">



                                                                    {
                                                                        status === "Active" ? <>
                                                                            <p className='font-custom text-sm py-1 text-secondary'>Edit Course</p>
                                                                            <p className='font-custom text-sm py-1 text-secondary'>Close Course</p>
                                                                            <p className='font-custom text-sm py-1 text-secondary'>Archive Course</p>
                                                                        </> :
                                                                            <p className='font-custom text-sm text-secondary'>Unarchive Course</p>

                                                                    }
                                                                </PopoverContent>
                                                            </Popover>
                                                    }

                                                </TableCell>

                                            </TableRow>
                                        })
                                    }
                                </TableBody>
                            </Table>

                        </div>
                    </div >
                </div >




            </div >

            <div className='flex w-full justify-end mb-6 mt-48'>
                <div className='flex  p-4  bg-[#fec0ca] mr-6 items-center justify-center gap-3 rounded-md'>
                    <img src={plus} alt="" />
                    <button className='text-secondary font-default font-secondary'>
                        Add Courses
                    </button>
                </div>
            </div>
        </div >


    )
}

export default Courses