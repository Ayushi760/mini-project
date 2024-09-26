import React from 'react'
import MessageOthers from './MessageOthers'
import MessageSelf from './MessageSelf'

const ChatBox = ({data}) => {
  console.log(data)
  return (
    <div className='h-full p-6 mt-20 mb-24'>
      {data?.admin ?
      <>
       {data?.messages?.map((item,index)=>(
            item?.sender !== "You" ? <MessageOthers data={item} isGroup={true}/> : <MessageSelf data={item}/>
        ))}
      </>
      :
      <>
       {data?.chat?.messages?.map((item,index)=>(
            item?.sender !== "You" ? <MessageOthers data={item}/> : <MessageSelf data={item}/>
        ))}
      </>
      }
       
    </div>
  )
}

export default ChatBox