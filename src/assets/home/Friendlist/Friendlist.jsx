import React from 'react'
import Search from './Search';
import Users from './Users';

const Friendlist = () => {
  return (
    <div className='w-[25vw] h-[100vh] px-[2vw]' >
      <div className='h-[5vw]  flex items-center  border-b border-black'>
        <h1 className='text-[1.5vw] font-medium'>Chat</h1>
      </div>
      <Search/>
      <Users/>
    </div>
  )
}

export default Friendlist;