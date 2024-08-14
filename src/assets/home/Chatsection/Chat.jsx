import React from 'react'
import Chatuser from './Chatuser';
import Messages from './Messages';
import MessageType from './MessageType';

const Chat = () => {
  return (
    <div className='w-[70vw] h-[95vh] bg-teal-100 rounded-xl'>
      <Chatuser/>
      <Messages/>
      <MessageType/>
    </div>
  )
}

export default Chat;