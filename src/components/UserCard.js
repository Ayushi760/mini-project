import React from 'react'
import { MdInsertPhoto } from "react-icons/md";
const UserCard = ({ data, onSelectUser }) => {
  const handleUnreadCount = () => {

    let unreadCount = 0;
    let foundLastYouMessage = false;

    if (data?.chat?.messages) {
      for (let i = data.chat.messages.length - 1; i >= 0; i--) {
        const msg = data?.chat?.messages[i];
        if (msg?.sender === "You") {
          foundLastYouMessage = true;
          break;
        }
        else {
          unreadCount++;
        }
      }
    }
    return foundLastYouMessage ? unreadCount : 0;
  }
  const unreadMsg = handleUnreadCount();
  return (
    <div className='flex w-full gap-5 cursor-pointer' onClick={() => onSelectUser(data)}>
      <img src={data?.profilePhoto} className='rounded-full h-14' />
      <div className='flex flex-col w-full'>
        <div className='flex items-center justify-between w-full'>
          <div className='font-bold text-gray-700 tracking-[1px] text-lg'>{data?.name}</div>
          {unreadMsg !== 0 ? <div className='text-xs text-green-500'>
            {data?.chat?.messages[data?.chat?.messages?.length - 1]?.time}
          </div> : <div className='text-xs text-gray-500'>
            {data?.chat?.messages[data?.chat?.messages?.length - 1]?.time}
          </div>}

        </div>
        {data?.chat?.messages?.length !== 0 &&
          <>
            {data?.chat?.messages[data?.chat?.messages?.length - 1]?.text ?
              <div className='flex justify-between w-full'>
                <div className='text-gray-500 truncate w-[200px]'>{data?.chat?.messages[data?.chat?.messages?.length - 1]?.text}</div>
                {unreadMsg !== 0 && <div className='flex items-center justify-center w-[22px] h-[22px] text-white bg-green-500 rounded-full'>{unreadMsg}</div>}
              </div>
              :
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 text-gray-500'>
                  <MdInsertPhoto />
                  {data?.chat?.messages[data?.chat?.messages?.length - 1]?.image?.caption ? data?.chat?.messages[data?.chat?.messages?.length - 1]?.image?.caption : "Photo"}
                </div>
                {unreadMsg !== 0 && <div className='flex items-center justify-center w-[22px] h-[22px] text-white bg-green-500 rounded-full'>{unreadMsg}</div>}
              </div>
            }
          </>
        }
      </div>
    </div>
  )
}

export default UserCard