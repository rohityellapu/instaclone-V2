import React, { useEffect, useRef, useState } from 'react'
import LeftMenu from './LeftMenu'
import Menu from './Menu'
import axios from 'axios'
import Posts from './Posts'
const apiURL = 'http://localhost:5000/post';
function Home() {
    const [items, setItems] = useState([]);
    const observer = useRef(null);
    const lastItemRef = useRef(null);
    const [loading, setloading] = useState(false);
    async function fetchData(newPosts) {
        setloading(true);
        await axios.get(apiURL + `?load=${newPosts}`)
            .then((items) => setItems(prev => ([...prev, ...items.data.posts])))
            .catch(e => console.log(e)).finally(() => setloading(false))
    }
    useEffect(() => {
        fetchData(items.length);
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            console.log(entries[0]);
            if (entries[0].isIntersecting) {
                setItems(prevItems => [...prevItems, ...prevItems]);
            }
        });
        if (lastItemRef.current) observer.current.observe(lastItemRef.current);
        return () => {
            if (observer.current) observer.current.disconnect();
        };

    }, [lastItemRef]);
    return (
        <div className='w-[30rem] bg-black text-white'>
            <LeftMenu />
            <Menu />
            <header className='flex gap-2 h-20 p-8 w-full'>
                <div className="gradient-box bg-gradient-to-r from-pink-600 to-yellow-500 flex items-center justify-center h-14 w-14 rounded-full">
                    <img className='h-[3.25rem] w-[3.25rem] border-black border-2 rounded-full' src='https://images.generated.photos/xKR8G5DW4Kyay-VXBMKsfgoVrfqO82CA8WPck9fBKOA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE1NjMzLmpwZw.jpg'
                    />
                </div>
                <div className="gradient-box bg-gradient-to-r from-pink-600 to-yellow-500 flex items-center justify-center h-14 w-14 rounded-full">
                    <img className='h-[3.25rem] w-[3.25rem] border-black border-2 rounded-full' src='https://images.generated.photos/xKR8G5DW4Kyay-VXBMKsfgoVrfqO82CA8WPck9fBKOA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE1NjMzLmpwZw.jpg'
                    />
                </div>
                <div className="gradient-box bg-gradient-to-r from-pink-600 to-yellow-500 flex items-center justify-center h-14 w-14 rounded-full">
                    <img className='h-[3.25rem] w-[3.25rem] border-black border-2 rounded-full' src='https://images.generated.photos/xKR8G5DW4Kyay-VXBMKsfgoVrfqO82CA8WPck9fBKOA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE1NjMzLmpwZw.jpg'
                    />
                </div>
                <div className="gradient-box bg-gradient-to-r from-pink-600 to-yellow-500 flex items-center justify-center h-14 w-14 rounded-full">
                    <img className='h-[3.25rem] w-[3.25rem] border-black border-2 rounded-full' src='https://images.generated.photos/xKR8G5DW4Kyay-VXBMKsfgoVrfqO82CA8WPck9fBKOA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE1NjMzLmpwZw.jpg'
                    />
                </div>
                <div className="gradient-box bg-gradient-to-r from-pink-600 to-yellow-500 flex items-center justify-center h-14 w-14 rounded-full">
                    <img className='h-[3.25rem] w-[3.25rem] border-black border-2 rounded-full' src='https://images.generated.photos/xKR8G5DW4Kyay-VXBMKsfgoVrfqO82CA8WPck9fBKOA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE1NjMzLmpwZw.jpg'
                    />
                </div>
                <div className="gradient-box bg-gradient-to-r from-pink-600 to-yellow-500 flex items-center justify-center h-14 w-14 rounded-full">
                    <img className='h-[3.25rem] w-[3.25rem] border-black border-2 rounded-full' src='https://images.generated.photos/xKR8G5DW4Kyay-VXBMKsfgoVrfqO82CA8WPck9fBKOA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE1NjMzLmpwZw.jpg'
                    />
                </div>



            </header>
            <main className='w-full'>
                { items.map((post, i) => (
                    <Posts
                        key={ post._id + i }
                        desc={ post.description }
                        location={ post.location }
                        name={ post.name }
                        time={ post.updatedAt }
                        imgUrl={ post.PostImage }
                        ref={ i === items.length - 1 ? lastItemRef : null }

                    />

                )) }

            </main>
            { loading && <div className='w-full flex items-center justify-center p-5'>
                <img className='h-12 w-12' src={ require('../images/spinner.gif') } alt="" />
            </div> }
        </div>
    )
}

export default Home

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