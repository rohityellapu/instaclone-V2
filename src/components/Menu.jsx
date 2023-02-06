import React from 'react'
import { MdHomeFilled, MdOutlineExplore } from 'react-icons/md'
import { RiInstagramFill, RiMessengerLine } from 'react-icons/ri';
import { FiPlusSquare } from 'react-icons/fi';

import { FaRegUserCircle } from 'react-icons/fa'
function Menu() {
    return (
        <div className='w-full flex gap-4 p-4 bg-black text-white border-t-gray-50 border-opacity-20 border-t-2 justify-around md:hidden fixed bottom-0'>
            <MdHomeFilled className='h-8 w-8' />
            <MdOutlineExplore className='h-8 w-8' />
            <RiInstagramFill className='h-8 w-8' />
            <FiPlusSquare className='h-8 w-8' />
            <RiMessengerLine className='h-8 w-8' />
            <FaRegUserCircle className='h-8 w-8' />
        </div>
    )
}

export default Menu