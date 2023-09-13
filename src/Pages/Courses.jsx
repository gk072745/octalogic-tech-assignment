import React, { useEffect } from 'react'
import vector from "../assets/Vector.svg"
import { useDispatch, useSelector } from 'react-redux'
import { getEnrolls, getStudents } from '../redux/StudentReducer/Actions'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'


const Courses = () => {
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
                    <div className='flex flex-col gap-6 '> {/* Add w-full class here */}
                        <div className='flex justify-between'>
                            <h2 className='text-primary-foreground font-custom font-primary text-default'>
                                LATEST ENROLMENTS
                            </h2>
                            <p className='text-custom-pinkClr text-sm cursor-pointer'>
                                Course List
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
                </div>




            </div>


        </div>
    )
}

export default Courses