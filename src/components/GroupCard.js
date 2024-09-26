import React from 'react'
import { MdInsertPhoto } from "react-icons/md";
import groupicon from "../assets/groups.svg";
const GroupCard = ({ data, onSelectUser }) => {
 console.log(data)
  return (
    <div className='flex w-full gap-5 cursor-pointer' onClick={() => onSelectUser(data)}>
     <img src={groupicon} className='w-12 h-12 p-2 bg-gray-200 rounded-full'/>
      <div className='flex flex-col w-full'>
        <div className='flex items-center justify-between w-full'>
          <div className='font-bold text-gray-700 tracking-[1px] text-lg'>{data?.name}</div>
          <div className='text-xs text-gray-500'>
            {data?.messages[data?.messages?.length - 1]?.time}
          </div>

        </div>
        {data?.chat?.messages?.length !== 0 &&
          <>
            {data?.messages[data?.messages?.length - 1]?.text ?
              <div className='flex justify-between w-full'>
                <div className='text-gray-500 truncate w-[200px]'>{data?.messages[data?.messages?.length - 1]?.text}</div>
              </div>
              :
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 text-gray-500'>
                  <MdInsertPhoto />
                  {data?.messages[data?.messages?.length - 1]?.image?.caption ? data?.messages[data?.messages?.length - 1]?.image?.caption : "Photo"}
                </div>
               </div>
            }
          </>
        }
      </div>
    </div>
  )
}

export default GroupCard