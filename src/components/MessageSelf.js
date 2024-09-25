import React from 'react'
import grayticks from "../assets/doubleTickGray.svg"
import blueticks from "../assets/doubleTickBlue.svg"
const MessageSelf = ({ data }) => {
    return (
        <div className='flex justify-end w-full my-1'>
            <div className='relative p-3 bg-[#d6fbd2] rounded min-w-14 max-w-[700px] shadow-md'>
                {data?.text ?
                    <p className='pr-12 text-gray-700'>{data?.text}</p>
                    :
                    <div>
                        <img src={data?.image?.url} className='pb-2 h-52' />
                        <div className='pr-12 text-gray-700'>
                            {data?.image?.caption}
                        </div>
                    </div>}
                <p className='text-[10px] text-gray-500 absolute right-[22px] bottom-1'>{data?.time}</p>
                {data?.isRead ? <img src={blueticks} className='absolute h-3.5 right-1 bottom-1' /> : <img src={grayticks} className='absolute h-3.5 right-1 bottom-1' />}
            </div>
        </div>
    )
}

export default MessageSelf