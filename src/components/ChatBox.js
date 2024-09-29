import React, { useEffect, useRef, useState } from 'react';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

const ChatBox = ({ messages }) => {
 const chatboxRef = useRef(null);
useEffect(()=>{
  if(chatboxRef.current)
  {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }
},[messages])
  return (
    <div ref={chatboxRef} className='h-full p-6 mt-20 mb-[50px] overflow-y-auto'>
      {messages.map((item, index) => (
        item?.sender !== "You" ? <MessageOthers key={index} data={item} /> : <MessageSelf key={index} data={item} />
      ))}
    </div>
  );
};

export default ChatBox;
