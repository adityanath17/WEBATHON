import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='container'>
        <div className='parent mt-4  p-3'>
        <Link to='/home' className='nav-link'>
    <div >
    <div>
          <img className='image'width="70px"src="data:image/jpeg;base64,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"></img>
          </div>
    </div>
    </Link>
        
    <Link to='/' className='nav-link'>
    <div className='c1 '>
        Services
    </div>
    </Link>
    <Link to='/register' className='nav-link'>
    <div className='c2'>
        SignUp
    </div>
    </Link>
    <Link to='/lisence' className='nav-link'>
    <div className='c2'>
        License
    </div>
    </Link>
    <Link to='/Complaint' className='nav-link'>
    <div className='c2'>
        Help
    </div>
    </Link>
    

   </div>
    </div>
  )
}

export default Navbar
