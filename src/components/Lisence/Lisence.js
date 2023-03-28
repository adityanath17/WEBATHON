import React from 'react'
import {useForm} from 'react-hook-form'
function Lisence() {
    let {register,handleSubmit,formState:{errors}}=useForm();
 
  

    let submitData=(data)=>{
      fetch('http://localhost:4000/users', {
           method: 'POST',
         
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
           body: JSON.stringify(data)
        })
           .then((res) => res.json())
           .then((data) => {
               console.log(data)
           })
           .catch((err) => {
              console.log(err.message);
           });
  
    }
    
    return (
    
      
      <div className='container'>
              <div className='row mt-5'>
                  <div className='col col-11 col-sm-8 col-md-6 mx-auto bg-light'>
                      <form onSubmit={handleSubmit(submitData)} className='mt-4'>
  
                         
  
                          <input type="text" placeholder='License number' className='form-control mt-3' {...register('Phone', {
                              required: "License number is required",
                              maxLength: {
                                  value: 10,
                                  message: 'Max length is 10!'
                              },
                              pattern: {
                                  value: /^[0-9]+$/,
                                  message: 'Invalid License number format'
                              }
                              
                          })} />
                          {errors.Phone && <p className='text-danger mt-1'>{errors.Phone.message}!</p>}
  
                      
                         
  
      
  
                          
  
  
                          <button type="submit"  className='btn btn-info mt-3 mb-2'>Submit</button>
                          
                      </form>
  
                  </div>
              </div>
  
             
  
          </div>
    )
}

export default Lisence
