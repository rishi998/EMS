import React, { useState } from 'react'

const Login = () => {

  const [email, setemail]=useState('');
  const [password,setpassword]=useState('');

  const Handlesubmit=(e)=>{
    e.preventDefault();

  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-md'>
         <form onSubmit={(e)=>{
          Handlesubmit(e);
         }} 
         className='flex flex-col items-center justify-center' action="">
          <input onChange={(e)=>{
            setemail(e.target.value);
          }} required type="email" className='text-white border-2 rounded-full m-4 py-3 px-5 outline-none bg-transparent placeholder:text-white' placeholder='Enter Your Email' />
          <input onChange={()=>{
            setpassword(e.target.value);
            
          }} required type="Password" placeholder='Enter password' className='text-white border-2 rounded-full mt-4 py-3 px-5 outline-none bg-transparent mb-4 placeholder:text-white' />
          <button className='text-black border-none outline-none rounded-lg py-2 px-5 font-bold bg-blue-500 placeholder:text-white mb-3'>Log In</button>
         </form>
      </div>
      
    </div>
  )
}

export default Login;
