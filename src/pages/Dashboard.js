import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ChatArea from '../components/ChatArea'
import { userData } from '../utility/data'
import { groupData } from '../utility/data'
const Dashboard = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedGroupChat, setSelectedGroupChat] = useState(null);
  return (
    <div className='flex h-screen overflow-hidden'>
        <SideBar data={userData} onSelectUser={setSelectedChat} groupdata={groupData}/>
        <ChatArea data={selectedChat} groupdata={selectedGroupChat}/>
    </div>
  )
}

export default Dashboard