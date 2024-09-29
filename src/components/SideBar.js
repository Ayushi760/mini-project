import React, { useState } from "react";
import whatsappIcon from "../assets/whatsapp.svg";
import profileIcon from "../assets/profile.jpg";
import editIcon from "../assets/edit.svg";
import menuIcon from "../assets/menu.svg";
import searchIcon from "../assets/search.svg";
import UserCard from "./UserCard";
import GroupCard from "./GroupCard";
import { MdGroups } from "react-icons/md";

const SideBar = ({ data, onSelectUser, groupdata }) => {
    console.log(onSelectUser,"sidebar")
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const [isGroup, setIsGroup] = useState(false);
    console.log(isGroup)
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data?.filter((user) => {
        if (searchTerm === "Show Unread chats") {
            const lastMessage = user?.chat?.messages?.[user.chat.messages.length - 1];
            return user && lastMessage && lastMessage.sender !== "You";
        }
        else {
            return user.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
    });

    const handleUnread = () => {
        setSearchTerm("Show Unread chats");
        setActiveTab("unread");
    };

    const handleAllChats = () => {
        setSearchTerm("");
        setActiveTab("all");
        setIsGroup(false)
    };

    const handleGroups = () => {
        setActiveTab("groups");
        setIsGroup(!isGroup);
    };

    return (
        <div className="w-[30%] py-3 px-6 flex flex-col gap-6 shadow-lg" data-testid="sidebar-1">
            <div className="flex w-full gap-2">
                <img src={whatsappIcon} alt="whatsapp-icon" />
                <div className="tracking-[1px] font-semibold text-gray-700">
                    WhatsApp
                </div>
            </div>
            <div className="flex items-center justify-between w-full p-2">
                <div className="flex items-center gap-4">
                    <img
                        src={profileIcon}
                        className="object-cover w-10 h-10 rounded-full"
                    />
                    <div className="font-bold text-gray-700 tracking-[1px] text-xl">
                        Chats
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <img src={editIcon} className="cursor-pointer" />
                    <img src={menuIcon} className="w-6 cursor-pointer" />
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
            <div className="flex gap-2">
                <button
                    className={`px-4 py-2 rounded-full transition ${activeTab === "all"
                        ? "bg-[#e7fce3] text-green-500"
                        : "bg-[#e9edef] text-gray-700"
                        }`}
                    onClick={handleAllChats}
                >
                    All Chats
                </button>
                <button
                    className={`px-4 py-2 rounded-full transition ${activeTab === "unread"
                        ? "bg-[#e7fce3] text-green-500"
                        : "bg-[#e9edef] text-gray-700"
                        }`}
                    onClick={handleUnread}
                >
                    Unread
                </button>
                <button
                    className={`px-4 py-2 rounded-full transition ${activeTab === "groups"
                        ? "bg-[#e7fce3] text-green-500"
                        : "bg-[#e9edef] text-gray-700"
                        }`}
                    onClick={handleGroups}
                >
                    Groups
                </button>
            </div>
            <div className="flex flex-col gap-6 overflow-y-auto">

                {
                    isGroup ?
                        <>
                            {groupdata?.map((item, index) => (
                                <GroupCard key={index} data={item} onSelectUser={onSelectUser} />
                            ))}
                        </> :
                        <>
                            {filteredData?.map((item, index) => (
                                <UserCard key={index} data={item} onSelectUser={onSelectUser} />
                            ))}
                        </>
                }
            </div>
        </div>
    );
};

export default SideBar;