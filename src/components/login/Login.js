import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate,Link} from 'react-router-dom'
import {auth} from '../../firebase-cofig'
import {useState} from 'react'

import {signInWithEmailAndPassword} from 'firebase/auth'
import './Login.css'

function Login(props) {
  // let [login,setLogin]=useState(0)
  let [err,setErr]=useState(0);
  let navigate=useNavigate();
  let {register,handleSubmit,formState:{errors}}=useForm();
   let submitForm= async (userObj)=>{
   console.log(userObj);
    try{
    const user= await signInWithEmailAndPassword(auth,userObj.username,userObj.password);
    
    navigate('/createUser');
      
   }catch(err)
    {
      setErr(1);
      console.log(err.message);
    }
   }
 
  return (
    <div className='form' >
      
      <div className="row ">
      {/* <div className="col-11 col-sm-8 col-md-8 mx-auto  mt-5 p-2">
      <div className="container  rounded w-2 bg-white">
        <div className="row"> */}
         
         <div className=" ">
     
   
 
      <form onSubmit={handleSubmit(submitForm)} className="mt-5 fo me-auto shadow">
      <h1 className="mb-3 text-danger opacity-75 fw-bold fs-1 display-5 mb-5 ">LOGIN </h1>
        
      <input type="text" className="form-control mb-3 p-3 inp" placeholder="Username" 
        {...register("username",{required:true,minLength:"4"})}/>

        {errors.username?.type==="required" && <p className="text-danger ">*Username is required</p>}
        {errors.username?.type==="minLength" && <p className="text-danger ">*minimum 4 characters are required</p>}
        {errors.username?.type==="maxLength" && <p className="text-danger ">*maximum 8 characters are required</p>}

        <input type="password" className="form-control mb-3 p-3 inp" placeholder="Password" 
        {...register("password",{required:true,minLength:"4"})}/>
        {errors.password?.type==="required" && <p className="text-danger ">*Password is required</p>}
        {errors.password?.type==="minLength" && <p className="text-danger ">*minimum 4 characters are required</p>}
        {errors.password?.type==="maxLength" && <p className="text-danger ">*maximum 8 characters are required</p>}
        {
          err==1 && <p className='text-danger '>Invalid User</p>
        }
        <div className=''>
        <button type="submit" className="btn btn-danger mt-3 ">LOGIN</button>
        <div className=''>
        <p className=''>Don't Have An Account?</p>
        <Link className="reg"  to="/register">Register</Link>
        </div>
        </div>
        </form>

         </div>
        </div>
        
      </div>  
    
  )
}

export default Login