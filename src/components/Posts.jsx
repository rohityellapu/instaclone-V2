import React from 'react'
import { FiHeart, FiSend } from 'react-icons/fi'
import { BiBookmark } from 'react-icons/bi'
import { TbMessageCircle2 } from 'react-icons/tb';
import PostTime from './PostTime';
function Posts({ imgUrl, name, desc, location, time }) {
    return (

        <>
            <header className='w-full flex justify-between items-center p-2'>
                <div className="names flex items-center">
                    <div className="image"> <img className='h-10 w-10 rounded-full' src={ imgUrl }
                    /></div>
                    <div className="head flex flex-col p-2">
                        <div className="name font-semibold flex flex-row justify-center"><span className='mr-1'>{ name }</span><span className='text-xs font-thin flex items-center justify-center'>. { <PostTime date={ time } /> }</span> </div>
                        <div className="place text-sm">{ location }</div>
                    </div>
                </div>
                <div className="options text-xl font-bold">...</div>
            </header>
            <div className="image w-full h-[36rem] flex justify-center items-center  rounded-md md:border-[1px] border-gray-100 border-opacity-50">
                <img className='min-w-full max-h-full' src={ imgUrl }
                />
            </div>
            <div className="icons flex justify-between">
                <div className="left flex">
                    <FiHeart className='h-6 w-6 m-2' />
                    <TbMessageCircle2 className='h-6 w-6 m-2' />
                    <FiSend className='h-6 w-6 m-2' />
                </div>
                <div className="right">
                    <BiBookmark className='h-6 w-6 m-2' />
                </div>
            </div>
            <div className="likes font-semibold pl-2 text-sm">4057 likes</div>
            <div className="description"><span className='text-md font-semibold p-2'>{ name }</span> { desc }</div>
            <div className="comment w-full border-b-2 border-gray-100 border-opacity-50">
                <input className='w-full bg-inherit focus:outline-none p-2 text-sm' type="text" name="comment" id="" placeholder='Add a comment' />
            </div>
        </>

    )
}

export default Posts

