import React, { useState } from 'react'
import whatsappIcon from "../assets/whatsapp.svg"
import profileIcon from "../assets/profile.jpg"
import editIcon from "../assets/edit.svg"
import menuIcon from "../assets/menu.svg"
import searchIcon from "../assets/search.svg"
import UserCard from './UserCard'
const SideBar = ({ data, onSelectUser }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data?.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className='w-[30%] py-3 px-6 flex flex-col gap-6 shadow-lg'>
            <div className='flex w-full gap-2'>
                <img src={whatsappIcon} alt='whatsapp-icon' />
                <div className='tracking-[1px] font-semibold text-gray-700'>WhatsApp</div>
            </div>
            <div className='flex items-center justify-between w-full p-2'>
                <div className='flex items-center gap-4'>
                    <img src={profileIcon} className='object-cover w-10 h-10 rounded-full' />
                    <div className='font-bold text-gray-700 tracking-[1px] text-xl'>Chats</div>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <img src={editIcon} className='cursor-pointer' />
                    <img src={menuIcon} className='w-6 cursor-pointer' />
                </div>
            </div>
            <div className="flex items-center justify-center h-20 px-4 overflow-hidden bg-white shadow-md cursor-pointer border-b-[2px] border-green-700 rounded-sm outline-gray-200 outline max-h-12">
                <input
                    placeholder="Search or start new chat"
                    id="input"
                    className="w-full text-sm text-gray-700 outline-none"
                    name="text"
                    type="text"
                    onChange={handleSearchChange}
                />
                <label className="px-3 cursor-text" for="input">
                    <img src={searchIcon} />
                </label>
            </div>
            <div className='flex flex-col gap-6 overflow-y-auto'>
                {filteredData?.map((item, index) => (
                    <UserCard key={index} data={item} onSelectUser={onSelectUser} />
                ))}
            </div>
        </div>
    )
}

export default SideBar