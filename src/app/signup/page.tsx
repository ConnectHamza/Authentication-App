"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SignupPage = () => {

const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",

})

const onSubmit = async () => {

}

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <h1>Signup</h1>

        <label className='mt-4' htmlFor="username">username</label>
        <input 
        className='border-2 border-gray-300 rounded-md p-2 my-2'
        type='text'
        name='username'
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder='Username'
        />  

         <label className='mt-4' htmlFor="email">email</label>
        <input 
        className='border-2 border-gray-300 rounded-md p-2 my-2'
        type='text'
        name='email'
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder='email'
        />  

         <label className='mt-4' htmlFor="password">password</label>
        <input 
        className='border-2 border-gray-300 rounded-md p-2 my-2'
        type='password'
        name='password'
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder='password'
        />  

        <button className='bg-blue-500 text-white rounded-md p-2 my-4 cursor-pointer' onClick={onSubmit}>Signup</button>
        <Link href="/login" className='text-blue-500 hover:underline'>Already have an Account? Login</Link>
    </div>
  )
}

export default SignupPage