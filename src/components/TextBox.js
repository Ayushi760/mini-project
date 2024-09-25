import React from 'react'
import InputEmoji from "react-input-emoji";
import { IoAddOutline } from "react-icons/io5";
import { IoIosMic } from "react-icons/io";
const TextBox = () => {
    return (
        <div className="flex h-[50px] px-6 justify-center items-center bg-gray-200 border-t border-solid border-t-medium-gray gap-4 z-30 absolute bottom-0 w-[70%]">
            <IoAddOutline className='text-2xl'/>
           <div className="flex-[1] h-full flex items-center justify-center w-0 rounded">
                <InputEmoji
                    value=""
                    borderRadius="0px"
                    theme="dark"
                />
            </div>
            <IoIosMic className='text-2xl text-gray-500 '/>
        </div>
    )
}

export default TextBox