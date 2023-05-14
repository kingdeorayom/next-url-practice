import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const VehicleDetails = () => {

    const router = useRouter()
    console.log(router.query)

    return (
        <>
            <Navbar />
            {/* <h1>{router.query.id}</h1> */}
            <h1>Vehicle page</h1>
        </>
    )
}

export default VehicleDetails