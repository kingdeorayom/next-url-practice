import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <Link href='/'><h3>Home</h3></Link>
            <Link href='/about'><h3>About</h3></Link>
            <Link href='/contact'><h3>Contact</h3></Link>
        </nav>
    )
}

export default Navbar