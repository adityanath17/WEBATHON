import React from 'react'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import { Outlet,Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Rootlayout() {
  return (
    <div>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />

    </div>
  )
}

export default Rootlayout
