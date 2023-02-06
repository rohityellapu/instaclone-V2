import React from 'react'
import { FiHeart, FiSend } from 'react-icons/fi'
import { BiBookmark } from 'react-icons/bi'
import { TbMessageCircle2 } from 'react-icons/tb';
function Posts({ imgUrl, name, desc, location, time }) {
    return (

        <>
            <header className='w-full flex justify-between items-center p-2'>
                <div className="names flex items-center">
                    <div className="image"> <img className='h-8 w-8 rounded-full' src={ imgUrl }
                    /></div>
                    <div className="head flex flex-col p-2">
                        <div className="name font-semibold">{ name }</div>
                        <div className="place text-sm">{ location }</div>
                    </div>
                </div>
                <div className="options text-xl font-bold">...</div>
            </header>
            <div className="image w-full h-[36rem]">
                <img className='h-full w-full rounded-md border-2 border-gray-100 border-opacity-50' src={ imgUrl }
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
            <div className="description"><span className='text-md font-semibold p-2'>uday_moto</span> { desc }</div>
            <div className="comment w-full border-b-2 border-gray-100 border-opacity-50">
                <input className='w-full bg-inherit focus:outline-none p-2 text-sm' type="text" name="comment" id="" placeholder='Add a comment' />
            </div>
        </>

    )
}

export default Posts

/**
 * PostImage
: 
"https://res.cloudinary.com/dovkoy31j/image/upload/v1673790159/instaclone/pu9n1hk9dcyoxqoajrrw.png"
createdAt
: 
"2023-01-15T13:42:39.590Z"
description
: 
"Finally got it"
location
: 
"Cambridge"
name
: 
"Rohit"
updatedAt
: 
"2023-01-15T13:42:39.590Z"
__v
: 
0
_id
: 
"63c402cfff0f914af9831d00"
 */