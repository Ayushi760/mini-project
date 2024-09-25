import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ChatArea from '../components/ChatArea'
import { userData } from '../utility/data'
const Dashboard = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div className='flex h-screen overflow-hidden'>
        <SideBar data={userData} onSelectUser={setSelectedChat}/>
        <ChatArea data={selectedChat}/>
    </div>
  )
}

export default Dashboard