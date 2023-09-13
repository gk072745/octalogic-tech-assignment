import React, { useEffect } from 'react'
import vector from "../assets/Vector.svg"
import { useDispatch, useSelector } from 'react-redux'
import { getEnrolls, getStudents } from '../redux/StudentReducer/Actions'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'

const Home = () => {
    const { students, enroll, isError, isLoading } = useSelector((store) => store.StudentReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getStudents())
    }, [])
    useEffect(() => {
        dispatch(getEnrolls())
    }, [])





    return (
        <div className='w-full'>

            <div className='flex gap-y-8 flex-col item-center m-6'>

                <div className='flex flex-col gap-6 '> {/* Add w-full class here */}
                    <h1 className='text-primary-foreground font-custom font-primary text-lg'>
                        Overview
                    </h1>
                    <div className='flex justify-between gap-x-4 items-center '>


                        <div className='w-full bg-primary-background p-4 rounded-sm flex gap-4 items-center'>
                            <div className='p-1.5 mt-2 self-start bg-custom-tealBg rounded-full flex items-center justify-center'>
                                <img className='w-5 h-4' src={vector} alt="vector" />
                            </div>
                            <div className='flex flex-col w-full'>
                                <h1 className='text-secondary text-md'>164</h1>
                                <p className='text-primary-foreground text-xs'>total number of students</p>
                                <p className='text-pink-800 justify-end self-end text-xxs'>View</p>
                            </div>
                        </div>

                        <div className='w-full bg-primary-background p-4 rounded-sm flex gap-4 items-center'>
                            <div className='p-1.5 mt-2 self-start bg-custom-tealBg rounded-full flex items-center justify-center'>
                                <img className='w-5 h-4' src={vector} alt="vector" />
                            </div>
                            <div className='flex flex-col w-full'>
                                <h1 className='text-secondary text-md'>12</h1>
                                <p className='text-primary-foreground text-xs'>total number of Courses</p>
                                <p className='text-pink-800 justify-end self-end text-xxs'>View</p>
                            </div>
                        </div>

                        <div className='w-full bg-primary-background p-4 rounded-sm flex gap-4 items-center'>
                            <div className='p-1.5 mt-2 self-start bg-custom-tealBg rounded-full flex items-center justify-center'>
                                <img className='w-5 h-4' src={vector} alt="vector" />
                            </div>
                            <div className='flex flex-col w-full'>
                                <h1 className='text-secondary text-md'>$2000</h1>
                                <p className='text-primary-foreground text-xs'>total amount earned</p>
                                <p className='text-pink-800 justify-end self-end text-xxs'>View</p>
                            </div>
                        </div>

                        <div className='w-full bg-primary-background p-4 rounded-sm flex gap-4 items-center'>
                            <div className='p-1.5 mt-2 self-start bg-custom-tealBg rounded-full flex items-center justify-center'>
                                <img className='w-5 h-4' src={vector} alt="vector" />
                            </div>
                            <div className='flex flex-col w-full'>
                                <h1 className='text-secondary text-md'>Guitar</h1>
                                <p className='text-primary-foreground text-xs'>Best Performing Course</p>
                                <p className='text-pink-800 justify-end self-end text-xxs'>View</p>
                            </div>
                        </div>

                        <div className='w-full bg-primary-background p-4 rounded-sm flex gap-4 items-center'>
                            <div className='p-1.5 mt-2 self-start bg-custom-tealBg rounded-full flex items-center justify-center'>
                                <img className='w-5 h-4' src={vector} alt="vector" />
                            </div>
                            <div className='flex flex-col w-full'>
                                <h1 className='text-secondary text-md'>Flute</h1>
                                <p className='text-primary-foreground text-xs'>Worst Performing Course</p>
                                <p className='text-pink-800 justify-end self-end text-xxs'>View</p>
                            </div>
                        </div>



                    </div>
                </div>
                <div className='flex flex-col gap-6 '> {/* Add w-full class here */}
                    <div className='flex justify-between'>
                        <h2 className='text-primary-foreground font-custom font-primary text-default'>
                            LATEST ENROLMENTS
                        </h2>
                        <p className='text-custom-pinkClr text-sm cursor-pointer'>
                            View All Courses
                        </p>

                    </div>
                    {/* table */}
                    <div className='p-4 bg-white rounded-md'>
                        <Table>
                            <TableHeader>
                                <TableRow >
                                    <TableHead className="text-secondary font-custom font-primary text-left">Enr. No</TableHead>
                                    <TableHead className="text-secondary font-custom font-primary text-center">S. Name</TableHead>
                                    <TableHead className="text-secondary font-custom font-primary text-center">C. Name</TableHead>
                                    <TableHead className="text-secondary font-custom font-primary text-center">Fees</TableHead>
                                    <TableHead className="text-secondary font-custom font-primary text-right">Enr. Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    enroll.map(({ enrollmentNumber, studentName, courseName, fees, enrollmentDate }, ind) => {

                                        return <TableRow key={ind}>
                                            <TableCell className="text-secondary font-custom font-secondary text-left">
                                                {enrollmentNumber}
                                            </TableCell>
                                            <TableCell className="text-secondary font-custom font-secondary text-center">
                                                {studentName}
                                            </TableCell>
                                            <TableCell className="text-secondary font-custom font-secondary text-center">
                                                {courseName}
                                            </TableCell>
                                            <TableCell className="text-secondary font-custom font-secondary text-center">
                                                {fees}
                                            </TableCell>
                                            <TableCell className="text-secondary font-custom font-secondary text-right">
                                                {enrollmentDate}
                                            </TableCell>

                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>

                    </div>
                </div>
                <div className='flex flex-col gap-6 '> {/* Add w-full class here */}
                    <div className='flex justify-between'>
                        <h2 className='text-primary-foreground font-custom font-primary text-default'>
                            BEST STUDENTS                        </h2>
                        <p className='text-custom-pinkClr text-sm cursor-pointer'>
                            View All Students
                        </p>

                    </div>
                    {/* table */}
                    <div className='p-4 bg-white rounded-md'>
                        <Table>
                            <TableHeader>
                                <TableRow >
                                    <TableHead className="text-secondary font-custom font-primary text-left">Reg. No</TableHead>
                                    <TableHead className="text-secondary font-custom font-primary text-center">F. Name</TableHead>
                                    <TableHead className="text-secondary font-custom font-primary text-center">L. Name</TableHead>
                                    <TableHead className="text-secondary font-custom font-primary text-center">Course #</TableHead>
                                    <TableHead className="text-secondary font-custom font-primary text-center">Total Fees</TableHead>
                                    <TableHead className="text-secondary font-custom font-primary text-right">REg. Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    students.map(({ registrationNumber, firstName, lastName, course, totalFees, registrationDate }, ind) => {

                                        return <TableRow key={ind}>
                                            <TableCell className="text-secondary font-custom font-secondary text-left">
                                                {registrationNumber}
                                            </TableCell>
                                            <TableCell className="text-secondary font-custom font-secondary text-center">
                                                {firstName}
                                            </TableCell>
                                            <TableCell className="text-secondary font-custom font-secondary text-center">
                                                {lastName}
                                            </TableCell>
                                            <TableCell className="text-secondary font-custom font-secondary text-center">
                                                {course}
                                            </TableCell>
                                            <TableCell className="text-secondary font-custom font-secondary text-center">
                                                {totalFees}
                                            </TableCell>
                                            <TableCell className="text-secondary font-custom font-secondary text-right">
                                                {registrationDate}
                                            </TableCell>

                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>

                    </div>
                </div>


            </div>


        </div>
    )
}

export default Home