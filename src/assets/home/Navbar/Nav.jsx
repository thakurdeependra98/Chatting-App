import React from 'react'
import Profile from './Profile'
import Logout from './Logout'

const Nav = () => {
  return (
    <div className='w-[4vw] h-[100vh] flex flex-col justify-between items-center py-[1vw] border-r-2'>
      <Profile/>
      <Logout/>
    </div>
  )
}

export default Nav