import React from 'react'
import './Services.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Services() {
    let navigate=useNavigate()
 let gotoTech=()=>{
  navigate("/Services");
 }  
  return (
    <div >
       <div className='parent2 mt-5'>
            <div  className='col mx-3'>
               <div className='card card-body '>
                        <h1 className='text-center'>VEHICLE</h1>
                       <div > <img className='image w-5'src='data:image/jpeg;base64,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'></img></div>
                       <Link className='nav-item text-center' to="/Vehicle">
             <button  className='btn btn-success mx-1'   onClick={gotoTech}>VEHICLE  REGISTRATION</button>
          </Link>
                    </div>  
            </div>
             
             
           
           <div  className='col mx-3'>
              <div className='card card-body  '>
                       <h1  className='text-center'>LAND</h1>
                       <img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8n70dQOg1uj-q4H8ZJv1pgMJQ1u2tQHqKVDpnm5rSSxTquF-xmBnRc7JBQQqord7KNi1RZ182PqI&usqp=CAU&ec=48665701'></img>
                       <Link className='nav-item text-center' to="/Land">
             <button  className='btn btn-success mx-1 mt-3'   onClick={gotoTech}>LAND  REGISTRATION</button>
          </Link>
              </div>  
           </div>
            
           
           <div  className='col mx-3'>
              <div className='card card-body '>
                       <h1  className='text-center'>FACTORY</h1>
                       <img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4OIViLGietWMHyf3dmkZqyy8EwiF6Hzer3yAWn3flA&usqp=CAU&ec=48665701'></img>
                       <Link className='nav-item text-center' to="/Factory">
             <button  className='btn btn-success mx-1'   onClick={gotoTech}>FACTORY  REGISTRATION</button>
          </Link>
               </div>  
           </div>
            

            </div>

      
    </div>
  )
}

export default Services
