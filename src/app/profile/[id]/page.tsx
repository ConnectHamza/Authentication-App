import React from 'react'

const userProfile = ({params}: any) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <h1>Profile</h1>
        <p>Profile Page <span className='bg-orange-400 text-black font-600 px-4 py-1 rounded-md'>{params.id}</span></p>
    </div>
  )
}

export default userProfile