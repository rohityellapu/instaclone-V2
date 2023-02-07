import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
const apiURL = "https://instaclone-backend-rndh.onrender.com/post";
function Form({ closeModal, setItems }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setisLoading] = useState(false)

    let [filePath, setFilePath] = useState(null);
    const [file, setFile] = useState(null);
    function handleFile(e) {
        const { files } = e.target;
        setFile(files[0])
        if (files[0]) setFilePath(URL.createObjectURL(e.target.files[0]));
        else setFilePath(null);

    }
    const onSubmit = async data => {
        console.log(data, file);
        const formDat = new FormData();
        formDat.append('file', file);
        formDat.append('name', data.name);
        formDat.append('location', data.location);
        formDat.append('description', data.description);
        try {
            setisLoading(true)
            const response = await axios({
                method: "post",
                url: apiURL,
                data: formDat,
                headers: { "Content-Type": "multipart/form-data" },
            }).then((items) => items.data.post)
                .catch(e => console.log(e));
            setisLoading(false)
            closeModal()
            setItems(prev => ([response, ...prev]))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={ handleSubmit(onSubmit) } className='flex flex-col gap-8 text-white bg-black'>
            <div className="image flex justify-center items-center flex-col">


                { filePath ? <img src={ filePath } alt='user-img' style={ { maxHeight: '250px' } } /> :
                    <div className="flex items-center justify-center w-full">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg ariaHidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input onInput={ handleFile } { ...register('file', { required: 'Please Upload an Image.' }) } id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                }

                <p className='text-red-400 text-xs pl-1'>{ errors.file?.message }</p>
            </div>
            <div className="name">

                <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="text" placeholder='Username' { ...register('name', { required: "Enter your name" }) } id="" />
                <p className='text-red-400 text-xs pl-1'>{ errors.name?.message }</p>
            </div>
            <div className="location">

                <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="text" placeholder='Location' { ...register('location', { required: "Enter the location" }) } id="" />
                <p className='text-red-400 text-xs pl-1'>{ errors.location?.message }</p>
            </div>
            <div className="description">

                <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="text" placeholder='Tell us something about' { ...register('description', { required: "Please describe it" }) } id="" />
                <p className='text-red-400 text-xs pl-1'>{ errors.description?.message }</p>
            </div>
            <input disabled={ isLoading } type="submit" value="Post" className='p-2 rounded-md bg-blue-600 disabled:opacity-50 hover:cursor-pointer hover:saturate-200' />
            { isLoading && <div className='w-full flex items-center justify-center p-5'>
                <img className='h-12 w-12' src={ require('../images/spinner.gif') } alt="" />
            </div> }
        </form>
    )
}

export default Form