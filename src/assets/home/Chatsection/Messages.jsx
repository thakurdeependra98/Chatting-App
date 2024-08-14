import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='chatting h-[78vh] overflow-y-auto  w-full py-[1vw] px-[1.5vw] '>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages