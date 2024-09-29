import React, { useEffect, useState } from 'react'
import phone from "../assets/phone.svg"
import video from "../assets/video.svg"
import search from "../assets/search.svg"
import ChatBox from './ChatBox'
import whatsappIcon from "../assets/whatsapp.svg"
import TextBox from './TextBox'
import VideoCallWindow from './VideoCallWindow'
import Profile from './Profile'
import { fetchUserMessages} from '../api/api'
const ChatArea = ({ data, fetchAllUsers}) => {
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const openVideoCall = () => {
    setIsVideoCallOpen(true);
  };

  const closeVideoCall = () => {
    setIsVideoCallOpen(false);
  };

  const openPopUp =()=>{
    setIsPopupOpen(true);
  }

  const closePopUp = () => {
    setIsPopupOpen(false);
  };

  const fetchMessages = async () => {
    if (data) {
      const fetchedMessages = await fetchUserMessages(data.id);
      setMessages(fetchedMessages);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [data]);

  return (
    <>
      {data !== null ? <div className={`flex h-full flex-col overflow-y-auto ${isPopupOpen ? "w-[45%]" : "w-[70%]"}`} id='chatarea'>
        <div className={`fixed z-30 flex items-center justify-between h-20 gap-5 px-6 py-6 bg-white ${isPopupOpen ? "w-[45%]" : "w-[70%]"}`}>
          <div className='flex gap-5'>
            <img src={data?.profilePhoto} className='rounded-full cursor-pointer h-14' onClick={openPopUp} />
            <div>
              <div className='text-xl font-bold text-gray-700 tracking-[1px]'>{data?.name}</div>
              {data?.isOnline && <div className='text-sm text-gray-500'>online</div>}
            </div>
          </div>
          <div className='flex'>
            <div className='flex gap-6 pr-6 mr-6 border-r-2'>
              <img src={phone} className='h-5' />
              <img src={video} className='h-5 cursor-pointer' onClick={openVideoCall}/>
            </div>
            <img src={search} className='h-5 pr-6' />
          </div>
        </div>
        <ChatBox messages={messages}/>
        <TextBox isPopupOpen={isPopupOpen} userId={data?.id} fetchMessages={fetchMessages} fetchAllUsers={fetchAllUsers}/>
        {isVideoCallOpen && (
        <VideoCallWindow 
          userData={data}
          onClose={closeVideoCall}
        />
      )}
      {isPopupOpen && <Profile isPopupOpen={isPopupOpen} data={data} onClose={closePopUp}/>}
      </div> :
        <div className='w-[70%] flex h-full flex-col overflow-hidden items-center justify-center'>
          <img src={whatsappIcon} className='w-52 h-52' />
        </div>}
    </>
  )
}

export default ChatArea