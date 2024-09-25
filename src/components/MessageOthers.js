import React from 'react'
const MessageOthers = ({ data }) => {
  return (
    <div className='flex w-full my-1'>
      <div className='relative p-3 bg-white rounded min-w-14 max-w-[700px] shadow-md'>
        {data?.text ? 
        <p className='pr-12 text-gray-700'>{data?.text}</p>
         : 
        <div>
          <img src={data?.image?.url} className='pb-2 h-52' />
          <div className='pr-12 text-gray-700'>
            {data?.image?.caption}
          </div>
        </div>}
        <p className='text-[10px] text-gray-500 absolute right-1 bottom-1'>{data?.time}</p>
      </div>
    </div>
  )
}

export default MessageOthers