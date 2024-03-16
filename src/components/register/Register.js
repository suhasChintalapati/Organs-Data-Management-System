import React from 'react'
import {useForm} from 'react-hook-form'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase-cofig'
import {useNavigate} from 'react-router-dom'
import './Register.css'
function Register(props) {
  const navigate=useNavigate();
    let {register,handleSubmit,formState:{errors}}=useForm();
   let submitForm= async(userObj)=>{
            console.log(userObj);
            try{
            const user= await createUserWithEmailAndPassword(auth,userObj.email,userObj.password);
            navigate('/createUser');
              
            }catch(err)
            {
              console.log(err.message);
            }

        }  

   
  return (
    <div className='register' >
    <div className="row ">
    {/* <div className="col-11 col-sm-8 col-md-8 mx-auto  mt-5 p-2">
    <div className="container  rounded w-2 bg-white">
      <div className="row"> */}
     
       <div className=" ">
 

    <form onSubmit={handleSubmit(submitForm)} className="mt-5 fo ms-auto shadow">
    <h1 className="mb-3 text-danger opacity-75 fw-bold fs-1 display-5 mb-5 ">REGISTER</h1>
    
    <input type="text" className="form-control mb-3 p-3 inp" placeholder="Username" 
      {...register("email",{required:true,minLength:"4"})}/>

      {errors.username?.type==="required" && <p className="text-danger ">*Username is required</p>}
      {errors.username?.type==="minLength" && <p className="text-danger ">*minimum 4 characters are required</p>}
      {errors.username?.type==="maxLength" && <p className="text-danger ">*maximum 8 characters are required</p>}

      <input type="password" className="form-control mb-3 p-3 inp" placeholder="Password" 
      {...register("password",{required:true,minLength:"4"})}/>
      {errors.password?.type==="required" && <p className="text-danger ">*Password is required</p>}
      {errors.password?.type==="minLength" && <p className="text-danger ">*minimum 4 characters are required</p>}
      {errors.password?.type==="maxLength" && <p className="text-danger ">*maximum 8 characters are required</p>}
      
      <div className=''>
      <button type="submit" className="btn btn-danger mt-3 mb-5 ">Register</button>
      </div>
      </form>

       </div>
      </div>
    </div>  
    // <div className='register1'>
    //   <div className="row  ">
    //   <div className="col-11 col-sm-8 col-md-8 m-auto  p-2">
    //   <div className="container box rounded w-2 bg-white ">
    //     <div className="row">
    //      <div className="col-md-6 im">
          
    //      </div>
    //      <div className="">
          
      
    //    <h1 className="mb-3 text-success display-5">Register</h1>
   
 
    //   <form onSubmit={handleSubmit(submitForm)} className="mt-5 formmm" >
    //      <div className=''>
    //     <input type="email" className="form-control p-3 mb-3" placeholder="Email" 
    //     {...register("email",{required:true})}/>
    //     {errors.email?.type==="required" && <p className="text-danger ">*Email is required</p>}

    //     <input type="password" className="form-control p-3 mb-3" placeholder="Password" 
    //     {...register("password",{required:true,minLength:"4"})}/>
    //     {errors.password?.type==="required" && <p className="text-danger ">*Password is required</p>}
    //     {errors.password?.type==="minLength" && <p className="text-danger ">*minimum 4 characters are required</p>}
       
       
    //     </div>
        
        
    //     <button type="submit" className="btn btn-success mt-3">Register</button>
    //     </form>
    //      </div>
    //     </div>
    //   </div>  
    //   </div>
    //   </div>
      
        
       


    // </div>
  )
}

export default Register;