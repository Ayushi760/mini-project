import React, { useEffect, useState } from 'react';
import { fetchUserMessages } from '../api/api';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

const ChatBox = ({ data }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (data) {
        const fetchedMessages = await fetchUserMessages(data.id);
        setMessages(fetchedMessages);
      }
    };

    fetchMessages();
  }, [data]);

  return (
    <div className='h-full p-6 mt-20 mb-24'>
      {messages.map((item, index) => (
        item?.sender !== "You" ? <MessageOthers key={index} data={item} /> : <MessageSelf key={index} data={item} />
      ))}
    </div>
  );
};

export default ChatBox;
