import React from 'react'
import { MdInsertPhoto } from "react-icons/md";
const UserCard = ({ data, onSelectUser }) => {
  return (
    <div className='flex w-full gap-5 cursor-pointer' onClick={() => onSelectUser(data)}>
      <img src={data?.profilePhoto} className='rounded-full h-14' />
      <div className='flex flex-col w-full'>
        <div className='flex items-center justify-between w-full'>
          <div className='font-bold text-gray-700 tracking-[1px] text-lg'>{data?.name}</div>
          <div className='text-xs text-gray-500'>
            {data?.chat?.messages[data?.chat?.messages?.length - 1]?.time}
          </div>
        </div>
        {data?.chat?.messages?.length !== 0 &&
          <>
            {data?.chat?.messages[data?.chat?.messages?.length - 1]?.text ?
              <div className='text-gray-500'>{data?.chat?.messages[data?.chat?.messages?.length - 1]?.text}
              </div>
              :
              <div className='flex items-center gap-2 text-gray-500'>
                <MdInsertPhoto />
                {data?.chat?.messages[data?.chat?.messages?.length - 1]?.image?.caption ? data?.chat?.messages[data?.chat?.messages?.length - 1]?.image?.caption : "Photo"}
              </div>
            }
          </>
        }
      </div>
    </div>
  )
}

export default UserCard