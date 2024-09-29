import React, { useState } from 'react';
import InputEmoji from "react-input-emoji";
import { IoAddOutline } from "react-icons/io5";
import { IoIosMic } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessage } from '../api/api';
import { IoIosSend } from "react-icons/io";

const TextBox = ({isPopupOpen, userId}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const queryClient = useQueryClient();
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const mutation = useMutation({
        mutationFn: sendMessage,
        onSuccess: (data) => {
          console.log('Message sent successfully:', data);
          setMessage('');
        },
        onError: (error) => {
          console.error('Error sending message:', error.message);
        },
      });

      const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                sender: 'You',
                text: message,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                isRead: false,
            };
            mutation.mutate({ userId, newMessage });
            setMessage('');
        }
    };
    

    return (
        <div className={`absolute flex h-[50px] px-6 justify-center items-center bg-gray-200 border-t border-solid border-t-medium-gray gap-4 z-30 bottom-0 w-[70%] ${isPopupOpen && "w-[45%]"}`}>
            <IoAddOutline
                className={`text-2xl cursor-pointer transform transition-transform duration-300 ${isOpen ? 'bg-gray-300 rounded-full rotate-45' : ''}`}
                onClick={handleOpen}
            />
            <div className="flex-[1] h-full flex items-center justify-center w-0 rounded">
                <InputEmoji
                    value={message}
                    onChange={setMessage}
                    borderRadius="0px"
                    theme="dark"
                />
            </div>
            <IoIosSend onClick={handleSendMessage} className='text-2xl text-gray-500 cursor-pointer'/>
            <IoIosMic className='text-2xl text-gray-500' />
            <div className={`absolute bottom-[50px] left-[2%] transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
                <div className="p-4 bg-white rounded-md shadow">
                    <div className='rounded hover:bg-gray-100'>
                        <label htmlFor="file-upload" className='flex items-center gap-3 p-3 cursor-pointer'>
                            <FaFileAlt className='text-[#6256CA] text-xl' />
                            <p className='text-[16px] text-gray-500'>Documents</p>
                        </label>
                        <input type="file" className='hidden' accept='application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf' />
                    </div>
                    <div className='rounded hover:bg-gray-100'>
                        <label htmlFor="file-upload" className='flex items-center gap-3 p-3 cursor-pointer'>
                            <IoMdPhotos className='text-[#4379F2] text-xl' />
                            <p className='text-[16px] text-gray-500'>Photos & videos</p>
                        </label>
                        <input id="file-upload" type="file" className='hidden' accept='image/*' />
                    </div>
                    <div className='rounded hover:bg-gray-100'>
                        <label htmlFor="file-upload" className='flex items-center gap-3 p-3 cursor-pointer'>
                            <IoLocationSharp className='text-xl text-red-500' />
                            <p className='text-[16px] text-gray-500'>Current Location</p>
                        </label>
                        <input id="file-upload" type="file" className='hidden' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextBox;
