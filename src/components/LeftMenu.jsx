import React, { useState } from 'react'
import { CgHome } from 'react-icons/cg';
import { GrInstagram } from 'react-icons/gr'
import { MdOutlineExplore, MdMenu } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri';
import { FiPlusSquare, FiSearch, FiHeart } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaRegUserCircle, FaInstagram } from 'react-icons/fa';
import Modal from 'react-modal';
import Form from './Form';


function LeftMenu({ setItems }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='hidden md:flex h-screen fixed left-0 flex-col bg-black text-white border-r-gray-50 border-opacity-20 border-r-2 justify-between gap-4 p-6 lg:pr-20'>
            <div className="brand lg:hidden duration-500">
                <FaInstagram className='h-6 w-6' />
            </div>
            <h1 className='text-3xl lg:block hidden duration-500'>Instagram</h1>
            <div className="menu flex-1 mt-10 flex flex-row gap-4">

                <div className="flex flex-col gap-8 justify-start hover:cursor-pointer">
                    <CgHome className='h-6 w-6' />
                    <FiSearch className='h-6 w-6' />
                    <MdOutlineExplore className='h-6 w-6' />
                    <GrInstagram className='h-6 w-6' />
                    <RiMessengerLine className='h-6 w-6' />
                    <FiHeart className='h-6 w-6' />
                    <FiPlusSquare className='h-6 w-6' onClick={ openModal } />

                    <FaRegUserCircle className='h-6 w-6' />
                </div>
                <div className="names flex-col gap-8 justify-start hidden lg:flex hover:cursor-pointer">
                    <p className='h-6 w-6 flex items-center text-center'>Home</p>
                    <p className='h-6 w-6 flex items-center text-center'>Search</p>
                    <p className='h-6 w-6 flex items-center text-center'>Explore</p>
                    <p className='h-6 w-6 flex items-center text-center'>Reels</p>
                    <p className='h-6 w-6 flex items-center text-center'>Messages</p>
                    <p className='h-6 w-6 flex items-center text-center'>Notifications</p>
                    <p className='h-6 w-6 flex items-center text-center' onClick={ openModal }>Create</p>
                    <p className='h-6 w-6 flex items-center text-center'>Profile</p>
                </div>
            </div>
            <div className="flex gap-4 mb-10">
                <MdMenu className='h-6 w-6' />
                <p className='hidden lg:flex'>More</p>
            </div>
            <Modal
                isOpen={ modalIsOpen }
                ariaHideApp={ false }
                onRequestClose={ closeModal }
                style={ customStyles }
                contentLabel="Form Modal"

            >
                <div className="modal flex flex-col p-2 rounder-lg lg:w-96">

                    <div className="head flex items-center justify-between mb-8">
                        <h2 className="text-xl font-semibold m-2">CREATE A POST</h2>
                        <button onClick={ closeModal }><AiOutlineCloseCircle className='h-8 w-8 text-red' /></button>
                    </div>

                    <Form closeModal={ closeModal } setItems={ setItems } />
                </div>
            </Modal>
        </div>
    )
}
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.25)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        color: 'white'
    },
};
export default LeftMenu