import React, { useState } from 'react'
import { MdHomeFilled, MdOutlineExplore } from 'react-icons/md'
import { RiInstagramFill, RiMessengerLine } from 'react-icons/ri';
import { FiPlusSquare } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import Form from './Form';

function Menu({ setItems }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='w-full flex gap-4 p-4 bg-black text-white border-t-gray-50 border-opacity-20 border-t-2 justify-around md:hidden fixed bottom-0'>
            <MdHomeFilled className='h-8 w-8' />
            <MdOutlineExplore className='h-8 w-8' />
            <RiInstagramFill className='h-8 w-8' />
            <FiPlusSquare className='h-8 w-8' onClick={ openModal } />
            <RiMessengerLine className='h-8 w-8' />
            <FaRegUserCircle className='h-8 w-8' />
            <Modal
                isOpen={ modalIsOpen }
                ariaHideApp={ false }
                onRequestClose={ closeModal }
                style={ customStyles }
                contentLabel="Form Modal"

            >
                <div className="modal flex flex-col p-2 rounder-lg w-72 lg:w-96">

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
export default Menu