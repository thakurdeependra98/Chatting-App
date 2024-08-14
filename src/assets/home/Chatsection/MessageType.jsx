import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";

const MessageType = () => {
  return (
    <div className='w-full px-[2vw] '>
        <div className='w-full search bg-white flex items-center gap-3 rounded-lg'>
            <input
                type="text"
                placeholder="Write Your Message..."
                className="w-[87%] h-[3vw] border-none outline-none px-[2vw] rounded-lg" /> 
                <MdOutlineEmojiEmotions />
                <FiPaperclip />
                <div className='bg-gray-400 p-2 rounded-md '>
                <RiSendPlaneFill />
                </div>
        </div>
    </div>
  )
}

export default MessageType