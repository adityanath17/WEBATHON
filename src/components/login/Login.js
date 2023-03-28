import React from 'react'
import {useForm} from 'react-hook-form'
import { Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import './Login.css'
import Services from '../Services/Services'

function Login() {
  let {register,handleSubmit,formState:{errors}}=useForm()

     let submitform=(data)=>{

      console.log(data)
     }

let navigate=useNavigate()
 let gotoTech=()=>{
  navigate("/Services");
 }   

  return (
    <div className='container'>
     <div className='row mt-5'>
      <div className='col col-11 col-sm-8 col-md-6 mx-auto bg-light'>
        <form onSubmit={handleSubmit(submitform)} >
          <input type='text' className='form-control mt-3' {...register('name')} placeholder='ENTER YOUR NAME' />
          <input type='text' className='form-control mt-3'{...register('eid')} placeholder='E-ID' />
          <Link className='nav-item' to="/Services">
             <button  className='btn btn-success mt-3 fs-5 mb-3'   onClick={gotoTech}>Login</button>
          </Link>
        </form>
      
      </div>
      <Outlet />
     </div>
   
    </div>
  )
}

export default Login
