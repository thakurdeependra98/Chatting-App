import React from 'react'

const User = () => {
  return (
    <div>
        <div className='w-[100%] h-[4vw] hover:bg-teal-100 rounded-sm px-[1vw] flex items-start pt-[0.5vw] justify-between'>
            <div className='flex gap-[1vw]'>
              <img className='object-cover w-[2vw] h-[2vw] rounded-full' src="https://images.unsplash.com/photo-1722532622176-9fc70dbf6360?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div>
                <h1 className='text-[1.1vw] font-semibold' >Deependra Singh</h1>
                <p className='text-[0.9vw] text-gray-500 '>I am deependra</p>
              </div>
            </div>
            <div>
              <p className='text-[1vw]'>7:30</p>
            </div>
        </div>
    </div>
  )
}

export default User