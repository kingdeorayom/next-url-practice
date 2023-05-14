import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Brand = () => {

    const router = useRouter()

    const slug1 = 'toyota-corolla'
    const slug2 = 'toyota-innova'
    const slug3 = 'toyota-fortuner'

    console.log(router)

    return (
        <>
            <Navbar />
            <h1>Showing all vehicles of {router.query.brand}</h1>
            <div className="vehicles">
                <Link
                    href={{
                        pathname: `/brands/${router.query.brand}/${slug1}`,
                        // query: { id: 1 }
                    }}
                    as={`/brands/${router.query.brand}/${slug1}`}
                >
                    <div className='vehicle'>
                        <p>Corolla</p>
                    </div>
                </Link>
                <Link
                    href={{
                        pathname: `/brands/${router.query.brand}/${slug2}`,
                        // query: { id: 2 }
                    }}
                    as={`/brands/${router.query.brand}/${slug2}`}
                >
                    <div className='vehicle'>
                        <p>Innova</p>
                    </div>
                </Link>
                <Link
                    href={{
                        pathname: `/brands/${router.query.brand}/${slug3}`,
                        // query: { id: 3 }
                    }}
                    as={`/brands/${router.query.brand}/${slug3}`}
                >
                    <div className='vehicle'>
                        <p>Fortuner</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Brand