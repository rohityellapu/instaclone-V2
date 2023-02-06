import React from 'react'
import { CgHome } from 'react-icons/cg';
import { GrInstagram } from 'react-icons/gr'
import { MdOutlineExplore, MdMenu } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri';
import { FiPlusSquare, FiSearch, FiHeart } from 'react-icons/fi';

import { FaRegUserCircle, FaInstagram } from 'react-icons/fa'
function LeftMenu() {
    return (
        <div className='hidden md:flex h-screen fixed left-0 flex-col bg-black text-white border-r-gray-50 border-opacity-20 border-r-2 justify-between gap-4 p-6 lg:pr-20'>
            <div className="brand lg:hidden duration-500">
                <FaInstagram className='h-6 w-6' />
            </div>
            <h1 className='text-3xl lg:block hidden duration-500'>Instagram</h1>
            <div className="menu flex-1 mt-10 flex flex-row gap-4">

                <div className="flex flex-col gap-8 justify-start">
                    <CgHome className='h-6 w-6' />
                    <FiSearch className='h-6 w-6' />
                    <MdOutlineExplore className='h-6 w-6' />
                    <GrInstagram className='h-6 w-6' />
                    <RiMessengerLine className='h-6 w-6' />
                    <FiHeart className='h-6 w-6' />
                    <FiPlusSquare className='h-6 w-6' />

                    <FaRegUserCircle className='h-6 w-6' />
                </div>
                <div className="names flex-col gap-8 justify-start hidden lg:flex">
                    <p className='h-6 w-6 flex items-center text-center'>Home</p>
                    <p className='h-6 w-6 flex items-center text-center'>Search</p>
                    <p className='h-6 w-6 flex items-center text-center'>Explore</p>
                    <p className='h-6 w-6 flex items-center text-center'>Reels</p>
                    <p className='h-6 w-6 flex items-center text-center'>Messages</p>
                    <p className='h-6 w-6 flex items-center text-center'>Notifications</p>
                    <p className='h-6 w-6 flex items-center text-center'>Post</p>
                    <p className='h-6 w-6 flex items-center text-center'>Profile</p>
                </div>
            </div>
            <div className="flex gap-4">
                <MdMenu className='h-6 w-6' />
                <p className='hidden lg:flex'>More</p>
            </div>
        </div>
    )
}

export default LeftMenu