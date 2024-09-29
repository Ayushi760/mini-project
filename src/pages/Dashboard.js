// import React, { useState } from 'react'
// import SideBar from '../components/SideBar'
// import ChatArea from '../components/ChatArea'
// import { userData } from '../utility/data'
// import { groupData } from '../utility/data'
// const Dashboard = () => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [selectedGroupChat, setSelectedGroupChat] = useState(null);
//   return (
//     <div className='flex h-screen overflow-hidden'>
//         <SideBar data={userData} onSelectUser={setSelectedChat} groupdata={groupData}/>
//         <ChatArea data={selectedChat} groupdata={selectedGroupChat}/>
//     </div>
//   )
// }

// export default Dashboard

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../components/SideBar';
import ChatArea from '../components/ChatArea';
import { fetchUsers } from '../api/api';
const Dashboard = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    const response = await fetchUsers();
    setUsers(response);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className='flex h-screen overflow-hidden'>
      <SideBar data={users} onSelectUser={setSelectedChat} />
      <ChatArea data={selectedChat} fetchAllUsers={fetchAllUsers}/>
    </div>
  );
};

export default Dashboard;
