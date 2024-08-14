import React from 'react'
import Friendlist from './assets/home/Friendlist/Friendlist'
import Chat from './assets/home/Chatsection/Chat'
import Nav from './assets/home/Navbar/Nav'


const App = () => {
  return (
    <div className='flex items-center'>
      <Nav/>
      <Friendlist/>
      <Chat/>
    </div>
  )
}

export default App;