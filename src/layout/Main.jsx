import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'
import Navbar from '../pages/Navbar'

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main