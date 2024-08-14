import React from 'react'

const Chatuser = () => {
  return (
    <div className='flex items-center justify-between px-[2vw] border-b border-black'>
        <div className='h-[3.8vw] flex items-center gap-[1vw] '>
            <img className='object-cover w-[2.5vw] h-[2.5vw] rounded-full hover:' src="https://images.unsplash.com/photo-1722532622176-9fc70dbf6360?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div>
                <h1 className='text-[1.2vw] font-medium'>Deependra Singh</h1>
                <h4 className='text-[0.9vw] text-green-600 font-medium'>Online</h4>
            </div>
        </div>
        <div>
            <i class="ri-more-2-fill"></i>
        </div>
    </div>
  )
}

export default Chatuser