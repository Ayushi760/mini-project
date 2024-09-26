import React from 'react';
import { RxCross2 } from "react-icons/rx";
const Profile = ({ isPopupOpen, data, onClose }) => {
  return (
    <div
      className={`flex items-center justify-center overflow-y-auto bg-white absolute z-30 w-[25%] transition-all duration-500 gap-3 flex-col ${isPopupOpen ? "right-0" : "right-[-20rem]"
        }`}
    >
      <RxCross2 className='absolute top-0 left-0 m-3 text-xl cursor-pointer' onClick={onClose}/>
      <div className='flex flex-col items-center w-full gap-2 py-8 bg-white shadow-lg'>
        <img src={data?.profilePhoto} className='h-48 mb-2 rounded-full' />
        <div className='text-2xl text-gray-700 tracking-[1px]'>{data?.name}</div>
        <div className='text-sm text-gray-600 tracking-[1px]'>{data?.phoneNumber}</div>
      </div>
      <div className='flex flex-col w-full gap-2 px-8 py-8 bg-white shadow-lg'>
        <div className='text-[16px] font-semibold text-gray-400'>About</div>
        <div className='text-[16px] text-gray-700 font-medium'>{data?.about}</div>
      </div>
    </div>
  );
};

export default Profile;
