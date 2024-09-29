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

const Dashboard = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className='flex h-screen overflow-hidden'>
      <SideBar data={users} onSelectUser={setSelectedChat} />
      <ChatArea data={selectedChat} />
    </div>
  );
};

export default Dashboard;
