import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
function UserList() {
 let [data,setdata]=useState([])
 let [search,setsearch]=useState('')
 let {register,handleSubmit,formState:{errors}}=useForm();
    let submitForm=(userObj)=>{
            setsearch(userObj.organ)
         } 
  useEffect(()=>{
   axios.get(" http://localhost:4000/hospitals")
   .then(res=>setdata(res.data))
   .catch(err=>console.log(err))
  },[]) 
  
  return (
    <div className='container'> 

      {/* <center>
        <form>
          <input type={'text'} className='' placeholder='Enter City' value={search} onChange={(e)=>setsearch(e.target.value)}></input>
          </form>
          {
            [...arr,dat.filter(b=>{
                
                console.log(b[value])
            }
                ).hname]
          }
            {/* {search===dat.map(function(b)
            {
                if(b.kidney>0)
                {
                 setb1(b)
                    return "kidney";
                }
            }) && <h1>{b1.hname}</h1>} */}
         {/* {dat.filter((a)=>a.hname.toLowerCase().includes(search.toLowerCase())).map(a=>{ return<h1 key={a.id}>{a.hname}</h1>})} */}
         {
            // console.log(arr)
            // arr.map(stri=><h1>{stri}</h1>)
         }
      {/* </center> */} 
     
      <form onSubmit={handleSubmit(submitForm)}>
      <select {...register("organ")} className="form-select mt-3" defaultValue={"DEFAULT"}>

                <option value="DEFAULT" disabled>Choose organ</option>
                <option value="kidney">kidney</option>
                <option value="heart">heart</option>
                <option value="liver">liver</option>
                <option value="lungs" >lungs</option>
                <option value="pancreas" >pancreas</option>

         </select>
         <button type="submit" className="btn btn-danger opacity-75 mt-3 mb-5">Search</button>
      </form>
    
    
    {
      search==='' &&
    <table className="table table-striped text-center">
      <thead className='bg-danger opacity-75'>
        <tr  className='text-light'>
        <th>Id</th>
        <th>Hospital Name</th>
        <th>Hospital Email</th>
        <th>Phone Number</th>

<th>Blood Group</th>
        </tr>
        
      </thead>
      <tbody>
        {
           data.map((obj)=>
          
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.hname}</td>
              <td>{obj.email}</td>
              <td>{obj.phno}</td>
              <td>{obj.bloodgrp}</td>
            </tr>
          )
        
            // search==='kidney' && data.filter((a)=>a.kidney>0).map(a=> <tr key={a.id}>
            // <td>{a.id}</td>
            // <td>{a.hname}</td>
            // <td>{a.email}</td>
            // <td>{a.phno}</td>
            // <td>{a.bloodgrp}</td>
            // <td>kidney</td></tr>)  

            // ?
            // search==='heart' && data.filter((a)=>a.heart>0).map(a=> <tr key={a.id}>
            //   <td>{a.id}</td>
            //   <td>{a.hname}</td>
            //   <td>{a.email}</td>
            //   <td>{a.phno}</td>
            //   <td>{a.bloodgrp}</td>
            //   <td>heart</td></tr>) 
            // :
            // <p></p>

          
        }
      </tbody>

      
     </table>
}
{
  search==='kidney'&&
  <table className="table table-striped text-center">
  <thead className='bg-danger opacity-75'>
        <tr  className='text-light'>
        <th>Id</th>
        <th>Hospital Name</th>
        <th>Hospital Email</th>
        <th>Phone Number</th>
<th>Blood Group</th>
<th>Organ</th>
        </tr>
        
      </thead>
  <tbody>
    {
       
     data.filter((a)=>a.kidney!=="0").map(a=> <tr key={a.id}>
        <td>{a.id}</td>
        <td>{a.hname}</td>
        <td>{a.email}</td>
        <td>{a.phno}</td>
        <td>{a.bloodgrp}</td>
        <td>kidney</td></tr>)  

        // ?
        // search==='heart' && data.filter((a)=>a.heart>0).map(a=> <tr key={a.id}>
        //   <td>{a.id}</td>
        //   <td>{a.hname}</td>
        //   <td>{a.email}</td>
        //   <td>{a.phno}</td>
        //   <td>{a.bloodgrp}</td>
        //   <td>heart</td></tr>) 
        // :
        // <p></p>

      
    }
  </tbody>

  
 </table>
}

{
  search==='heart'&&
  <table className="table table-striped text-center">
 <thead className='bg-danger opacity-75'>
        <tr  className='text-light'>
        <th>Id</th>
        <th>Hospital Name</th>
        <th>Hospital Email</th>
        <th>Phone Number</th>
<th>Blood Group</th>
<th>Organ</th>
        </tr>
        
      </thead>
  <tbody>
    {
       
     data.filter((a)=>a.heart!=="0").map(a=> <tr key={a.id}>
        <td>{a.id}</td>
        <td>{a.hname}</td>
        <td>{a.email}</td>
        <td>{a.phno}</td>
        <td>{a.bloodgrp}</td>
        <td>heart</td></tr>)  

        
      
    }
  </tbody>

  
 </table>
}

{
  search==='lungs'&&
  <table className="table table-striped text-center">
  <thead className='bg-danger opacity-75'>
        <tr  className='text-light'>
        <th>Id</th>
        <th>Hospital Name</th>
        <th>Hospital Email</th>
        <th>Phone Number</th>
<th>Blood Group</th>
<th>Organ</th>
        </tr>
        
      </thead>
  <tbody>
    {
       
     data.filter((a)=>a.lungs!=="0").map(a=> <tr key={a.id}>
        <td>{a.id}</td>
        <td>{a.hname}</td>
        <td>{a.email}</td>
        <td>{a.phno}</td>
        <td>{a.bloodgrp}</td>
        <td>lungs</td></tr>)  

        
      
    }
  </tbody>

  
 </table>
}


{
  search==='liver'&&
  <table className="table table-striped text-center">
  <thead className='bg-danger opacity-75'>
        <tr  className='text-light'>
        <th>Id</th>
        <th>Hospital Name</th>
        <th>Hospital Email</th>
        <th>Phone Number</th>
<th>Blood Group</th>
<th>Organ</th>
        </tr>
        
      </thead>
  <tbody>
    {
       
     data.filter((a)=>a.liver!=="0").map(a=> <tr key={a.id}>
        <td>{a.id}</td>
        <td>{a.hname}</td>
        <td>{a.email}</td>
        <td>{a.phno}</td>
        <td>{a.bloodgrp}</td>
        <td>liver</td></tr>)  

        
      
    }
  </tbody>

  
 </table>
}

{
  search==='pancreas'&&
  <table className="table table-striped text-center">
  <thead className='bg-danger opacity-75'>
        <tr  className='text-light'>
        <th>Id</th>
        <th>Hospital Name</th>
        <th>Hospital Email</th>
        <th>Phone Number</th>
<th>Blood Group</th>
<th>Organ</th>
        </tr>
        
      </thead>
  <tbody>
    {
       
     data.filter((a)=>a.pancreas!=="0").map(a=> <tr key={a.id}>
        <td>{a.id}</td>
        <td>{a.hname}</td>
        <td>{a.email}</td>
        <td>{a.phno}</td>
        <td>{a.bloodgrp}</td>
        <td>pancreas</td></tr>)  

        
      
    }
  </tbody>

  
 </table>
}
     

    </div>
  )
}

export default UserList;