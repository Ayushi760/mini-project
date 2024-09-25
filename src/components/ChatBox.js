import React from 'react'
import MessageOthers from './MessageOthers'
import MessageSelf from './MessageSelf'

const ChatBox = ({data}) => {
  return (
    <div className='h-full p-6 mt-20 mb-24'>
        {data?.chat?.messages?.map((item,index)=>(
            item?.sender !== "You" ? <MessageOthers data={item}/> : <MessageSelf data={item}/>
        ))}
    </div>
  )
}

export default ChatBox